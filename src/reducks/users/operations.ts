import { auth, db } from 'firebase/index'
import { Timestamp, setDoc, doc, getDoc, collection, getDocs, deleteDoc, orderBy, query } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
  signOut,
  sendPasswordResetEmail,
  User,
  updateEmail,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'
import { Dispatch, Unsubscribe } from 'redux'
import { push } from 'connected-react-router'
import { SignUpParams, signInParams, UserState, DiaryToSave } from './types'

import { Diary, Word } from 'types/types'
import {
  signInAction,
  signOutAction,
  updateDirayAction,
  changeCurrentYMAction,
  updateAccountAction,
  updateLoadingState,
} from './actions'
import { setErrorsAction } from 'reducks/errors/actions'
import { Messages } from 'constants/ErrorMessages'
import { AppState } from 'reducks/store/store'

const DOC_NAME_USERS = 'users'
const DOC_NAME_DIARIES = 'diaries'
// const DOC_NAME_WORDS = 'words'

/**
 * Change the status of changeYM.
 * @param date date
 * @returns
 */
export const changeCurrentYM = (date: Date) => {
  return async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
    const usersState = getState().users
    const newState = {
      ...usersState,
      currentYM: date,
    }
    dispatch(changeCurrentYMAction(newState))
  }
}

/**
 * Listen authentification state of App.
 * @returns
 */
export const listenAuthState = () => {
  return async (dispatch: Dispatch): Promise<Unsubscribe> => {
    return onAuthStateChanged(auth, async (user) => {
      if (!user) {
        dispatch(push('/signin'))
        return
      }
      const usersState = await fetchUsersState(user, false)
      if (usersState) {
        dispatch(signInAction(usersState))
      } else {
        dispatch(push('/signin'))
      }
    })
  }
}

/**
 * Change loading state to false to end loading animation.
 * @returns
 */
export const changeLoadingState = (loading: boolean) => {
  return async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
    const usersState = getState().users
    usersState.loading = loading
    dispatch(updateLoadingState(usersState))
  }
}

/**
 * Update user account information.
 * @param email email
 * @param username username
 * @param password password
 * @returns
 */
export const updateUserAccount = (email: string, username: string, password?: string) => {
  return async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
    const currentUser = auth.currentUser
    if (!currentUser) {
      dispatch(setErrorsAction([Messages.NO_CURRENT_LOGIN]))
      dispatch(push('/signin'))
      return
    }

    const usersState = getState().users
    if (password && usersState.email !== email) {
      const credential = EmailAuthProvider.credential(email, password)
      try {
        await reauthenticateWithCredential(currentUser, credential)
        await updateEmail(currentUser, email)
      } catch {
        dispatch(setErrorsAction([Messages.EMAIL_PASSWORD_WRONG]))
        dispatch(push('/mypage/edit'))
        return
      }
    }

    if (usersState.username !== username) {
      await setDoc(doc(db, DOC_NAME_USERS, currentUser.uid), { username: username }, { merge: true })
    }

    const newState = {
      ...usersState,
      email: email,
      username: username,
    }
    dispatch(updateAccountAction(newState))
    dispatch(push('/mypage'))
  }
}

/**
 * Delete user account.
 * @returns
 */
export const deleteAccount = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    const currentUser = auth.currentUser
    if (!currentUser) {
      dispatch(setErrorsAction([Messages.NO_CURRENT_LOGIN]))
      dispatch(push('/signin'))
      return
    }
    await deleteUser(currentUser)
    dispatch(push('/signin'))
  }
}

/**
 * Sign in.
 * @param params param
 * @returns
 */
export const signIn = (params: signInParams) => {
  return async (dispatch: Dispatch): Promise<UserCredential | void> => {
    return signInWithEmailAndPassword(auth, params.email, params.password)
      .then(async (result) => {
        const user = result.user
        const usersState = await fetchUsersState(user, true)
        dispatch(signInAction(usersState))
        dispatch(push('/'))
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/wrong-password':
            dispatch(setErrorsAction([Messages.EMAIL_PASSWORD_WRONG]))
            break
          case 'auth/user-disabled':
            dispatch(setErrorsAction([Messages.UNKNOWN_UER_ERROR]))
            break
          case 'auth/user-not-found':
            dispatch(setErrorsAction([Messages.USER_NOT_FOUND]))
            break
          case 'auth/too-many-requests':
            dispatch(setErrorsAction([Messages.MANY_FAILED_LOGIN]))
            break
          default:
            throw new Error(error)
        }
      })
  }
}

/**
 * Sign up
 * @param params params
 * @returns
 */
export const signUp = (params: SignUpParams) => {
  return async (dispatch: Dispatch): Promise<UserCredential | void> => {
    return createUserWithEmailAndPassword(auth, params.email, params.password)
      .then(async (result) => {
        const user = result.user
        const timestamp = Timestamp.now()
        const userInitialData = {
          createdAt: timestamp,
          email: params.email,
          uid: user.uid,
          updatedAt: timestamp,
          username: params.username,
        }
        await setDoc(doc(db, DOC_NAME_USERS, user.uid), userInitialData)
        dispatch(push('/'))
      })
      .catch(() => {
        dispatch(setErrorsAction([Messages.CREATE_ACCOUNT_ERROR]))
      })
  }
}

/**
 * Sign out.
 * @returns
 */
export const signOutFrom = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    await signOut(auth)
    dispatch(signOutAction())
    dispatch(push('/signin'))
  }
}

/**
 * Reset password.
 * @param email e-mail address
 * @returns
 */
export const resetPassword = (email: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      // Do nothing.
    }
    dispatch(push('/signin/sent'))
  }
}

/**
 * Save diary.
 * @param diary diary
 * @returns
 */
export const saveDiary = (diary: Diary) => {
  return async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
    const timestamp = Timestamp.now()
    const user = getState().users

    const diaryToSave: DiaryToSave = {
      id: diary.id,
      date: Timestamp.fromDate(diary.date),
      title: diary.title,
      content: diary.content,
      updatedAt: timestamp,
      words: diary.words,
    }

    const diaryRef = doc(db, DOC_NAME_USERS, user.uid, DOC_NAME_DIARIES, diary.id)
    await setDoc(diaryRef, diaryToSave, { merge: true })

    const usersState = await fetchUsersState(user, user.loading)
    dispatch(updateDirayAction(usersState))
    dispatch(push(`/post/${diary.id}`))
  }
}

/**
 * Delete a diary.
 * @param id diary id
 * @returns
 */
export const deleteDiary = (id: string) => {
  return async (dispatch: Dispatch, getState: () => AppState): Promise<void> => {
    const user = getState().users
    await deleteDoc(doc(db, DOC_NAME_USERS, user.uid, DOC_NAME_DIARIES, id))
    const usersState = await fetchUsersState(user, user.loading)
    dispatch(updateDirayAction(usersState))
    dispatch(push('/'))
  }
}

/**
 * Fetch users state
 * @param user Authenticated user
 * @returns users state
 */
const fetchUsersState = async (user: User, loading: boolean) => {
  const users = await getDoc(doc(db, DOC_NAME_USERS, user.uid))
  const usersData = users.data()
  if (!usersData) {
    throw new Error(Messages.UNKNOWN_UER_ERROR)
  }
  const diaries = await fetchDiaries(user.uid)
  const words: Word[] = []
  // diaries.forEach((diary) => diary.words.forEach((word) => words.push(word)))
  const usersState: UserState = {
    username: usersData.username,
    uid: user.uid,
    email: user.email || '',
    isSignedIn: true,
    diaries: diaries,
    currentYM: new Date(),
    loading: loading,
    words: words,
  }
  return usersState
}

/**
 * Fetch diaries of uid.
 * @param uid uid
 * @returns Promise of diaries array
 */
const fetchDiaries = async (uid: string): Promise<Diary[]> => {
  const diaries: Diary[] = []
  const diaryCollRef = collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES)
  const q = query(diaryCollRef, orderBy('date', 'desc'), orderBy('title', 'desc'))
  const snapShot = await getDocs(q)
  for await (const diary of snapShot.docs) {
    const data = diary.data()
    // const words = await fetchWords(diaryCollRef, data.id)

    diaries.push({
      id: data.id,
      date: data.date.toDate(),
      title: data.title,
      content: data.content,
      words: data.words,
    })
  }
  return diaries
}

/**
 * Get Id of diary
 * @param uid uid
 * @returns new diary id
 */
export const getDiaryId = (uid: string): string => {
  const ref = collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES)
  const id = doc(ref).id
  return id
}

// /**
//  * Get ID of word feature.
//  * @returns new ID
//  */
// export const getWordFeatureId = (
//   uid: string,
//   diaryId: string,
//   wordId: string,
//   featurePath: 'meanings' | 'examples' | 'synonyms'
// ): string => {
//   const ref = collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, diaryId, DOC_NAME_WORDS, wordId, featurePath)
//   const id = doc(ref).id
//   return id
// }

// /**
//  * Get ID of word.
//  * @returns new ID
//  */
// export const getWordId = (uid: string, diaryId: string): string => {
//   const ref = collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, diaryId, DOC_NAME_WORDS)
//   const id = doc(ref).id
//   return id
// }
