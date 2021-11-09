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
} from 'firebase/auth'
import { Dispatch, Unsubscribe } from 'redux'
import { push } from 'connected-react-router'
import { SignUpParams, signInParams, Diary, UserState, DiaryToSave } from './types'
import { signInAction, signOutAction, updateDirayAction, changeCurrentYMAction } from './actions'
import { setErrorsAction } from 'reducks/errors/actions'
import { Messages } from 'constants/ErrorMessages'
import { AppState } from 'reducks/store/store'

const DOC_NAME_USERS = 'users'
const DOC_NAME_DIARIES = 'diaries'

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
      const usersState = await fetchUsersState(user)
      if (usersState) {
        dispatch(signInAction(usersState))
      } else {
        dispatch(push('/signin'))
      }
    })
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
        try {
          const usersState = await fetchUsersState(user)
          dispatch(signInAction(usersState))
          dispatch(push('/'))
        } catch (error) {
          throw new Error(Messages.NO_USER_ERROR)
        }
      })
      .catch(() => {
        dispatch(setErrorsAction([Messages.UNABLE_TO_SIGNIN_ERROR]))
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
        try {
          await setDoc(doc(db, DOC_NAME_USERS, user.uid), userInitialData)
          dispatch(push('/'))
        } catch (error) {
          throw new Error(Messages.CREATE_ACCOUNT_ERROR)
        }
      })
      .catch(() => {
        throw new Error(Messages.CREATE_ACCOUNT_ERROR)
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
    let id = ''
    let diaryToSave: DiaryToSave

    if (diary.id) {
      // update
      id = diary.id
      diaryToSave = {
        title: diary.title,
        content: diary.content,
        updatedAt: timestamp,
      }
    } else {
      // create
      const diaryRef = doc(collection(db, DOC_NAME_USERS, user.uid, DOC_NAME_DIARIES))
      id = diaryRef.id
      diaryToSave = {
        id: id,
        date: Timestamp.fromDate(diary.date),
        title: diary.title,
        content: diary.content,
        createdAt: timestamp,
        updatedAt: timestamp,
      }
    }

    await setDiary(user.uid, id, diaryToSave)

    const usersState = await fetchUsersState(user)
    dispatch(updateDirayAction(usersState))
    dispatch(push(`/post/${id}`))
  }
}

/**
 * Set diary to DB.
 * @param uid user id
 * @param id diary id
 * @param diary diary to save
 */
const setDiary = async (uid: string, id: string, diary: DiaryToSave): Promise<void> => {
  try {
    await setDoc(doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, id), diary, { merge: true })
  } catch (error) {
    throw new Error(Messages.UNABLE_TO_SAVE_DIARY)
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
    const usersState = await fetchUsersState(user)
    dispatch(updateDirayAction(usersState))
    dispatch(push('/'))
  }
}

/**
 * Fetch users state
 * @param user Authenticated user
 * @returns users state
 */
const fetchUsersState = async (user: User) => {
  const users = await getDoc(doc(db, DOC_NAME_USERS, user.uid))
  const usersData = users.data()
  if (!usersData) {
    throw new Error(Messages.NO_USER_ERROR)
  }
  const diaries = await fetchDiaries(user.uid)
  const usersState: UserState = {
    username: usersData.username,
    uid: user.uid,
    email: user.email || '',
    isSignedIn: true,
    diaries: diaries,
    currentYM: new Date(),
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
  const q = query(
    collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES),
    orderBy('date', 'desc'),
    orderBy('createdAt', 'desc')
  )
  const snapShot = await getDocs(q)
  snapShot.forEach((diary) => {
    const data = diary.data()
    diaries.push({
      id: data.id,
      date: data.date.toDate(),
      title: data.title,
      content: data.content,
    })
  })
  return diaries
}
