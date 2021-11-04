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
import { SignUpParams, signInParams, Diary, UserState } from './types'
import { signInAction, signOutAction, updateDirayAction, changeCurrentYMAction } from './actions'
import { setErrorsAction } from 'reducks/errors/actions'
import { Messages } from 'constants/ErrorMessages'

const DOC_NAME_USERS = 'users'
const DOC_NAME_DIARIES = 'diaries'

/**
 * Change the status of changeYM.
 * @param date date
 * @returns
 */
export const changeCurrentYM = (date: Date) => {
  return async (dispatch: Dispatch, getState: () => any): Promise<void> => {
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
        if (!user) {
          dispatch(setErrorsAction([Messages.NO_USER_ERROR]))
        }
        const usersState = await fetchUsersState(user)
        dispatch(signInAction(usersState))
        dispatch(push('/'))
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
        if (!user) {
          throw new Error(Messages.NO_USER_ERROR)
          // dispatch(accountErrorAction([Messages.NO_USER_ERROR]))
          // dispatch(push('/signin'))
          // return
        }
        const uid = user.uid
        const timestamp = Timestamp.now()
        const userInitialData = {
          createdAt: timestamp,
          email: params.email,
          uid: uid,
          updatedAt: timestamp,
          username: params.username,
        }
        setDoc(doc(db, DOC_NAME_USERS, uid), userInitialData)
          .then(() => dispatch(push('/')))
          .catch(() => {
            throw new Error(Messages.NO_USER_ERROR)
            // dispatch(accountErrorAction([Messages.NO_USER_ERROR]))
            // dispatch(push('/signin'))
          })
      })
      .catch(() => {
        throw new Error(Messages.CREATE_ACCOUNT_ERROR)
        // dispatch(accountErrorAction([Messages.CREATE_ACCOUNT_ERROR]))
        // dispatch(push('/signin'))
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
    await sendPasswordResetEmail(auth, email)
    dispatch(push('/signin/sent'))
  }
}

/**
 * Save diary.
 * @param diary diary
 * @returns
 */
export const saveDiary = (diary: Diary) => {
  return async (dispatch: Dispatch, getState: () => any): Promise<void> => {
    const timestamp = Timestamp.now()
    const uid = getState().users.uid
    let id = ''

    if (diary.id) {
      // update
      id = diary.id
      await setDoc(
        doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, id),
        {
          title: diary.title,
          content: diary.content,
          updatedAt: timestamp,
        },
        { merge: true }
      ).catch(() => {
        throw new Error(Messages.UNABLE_TO_SAVE_DIARY)
        // dispatch(push('/error/001'))
      })
    } else {
      // create
      const diaryRef = doc(collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES))
      id = diaryRef.id
      await setDoc(doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, id), {
        id: id,
        date: Timestamp.fromDate(diary.date),
        title: diary.title,
        content: diary.content,
        createdAt: timestamp,
        updatedAt: timestamp,
      }).catch(() => {
        throw new Error(Messages.UNABLE_TO_SAVE_DIARY)
        // dispatch(push('/error/001'))
      })
    }

    const usersState = await fetchUsersState(uid)
    dispatch(updateDirayAction(usersState))
    dispatch(push(`/post/${id}`))
  }
}

/**
 * Delete a diary.
 * @param id diary id
 * @returns
 */
export const deleteDiary = (id: string) => {
  return async (dispatch: Dispatch, getState: () => any): Promise<void> => {
    const uid = getState().users.uid
    await deleteDoc(doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, id))
    const usersState = await fetchUsersState(uid)
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
  // if (usersData) {
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
