import { push } from 'connected-react-router'
import { SignUpParams, signInParams, Diary } from './types'
import { auth, db } from 'firebase/index'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { Timestamp, setDoc, doc, getDoc, collection, getDocs, deleteDoc, orderBy, query } from 'firebase/firestore'
import { Dispatch, Unsubscribe } from 'redux'
import { signInAction, signOutAction, updateDirayAction, changeCurrentYMAction } from './actions'

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
      if (user) {
        const uid = user.uid
        const usersState = await fetchUsersState(uid)
        if (usersState) {
          dispatch(signInAction(usersState))
        } else {
          dispatch(push('/error/001'))
        }
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
        if (user) {
          const uid = user.uid
          const usersState = await fetchUsersState(uid)
          if (usersState) {
            dispatch(signInAction(usersState))
            dispatch(push('/'))
          } else {
            dispatch(push('/error/002'))
          }
        } else {
          dispatch(push('/error/002'))
        }
      })
      .catch((error) => {
        dispatch(push('/error/001'))
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
        if (user) {
          const uid = user.uid
          const timestamp = Timestamp.now()
          const userInitialData = {
            createdAt: timestamp,
            email: params.email,
            uid: uid,
            updatedAt: timestamp,
            usename: params.username,
          }
          await setDoc(doc(db, DOC_NAME_USERS, uid), userInitialData).catch((error) => {
            dispatch(push('/error/001'))
          })
          dispatch(push('/'))
        } else {
          dispatch(push('/error/002'))
        }
      })
      .catch((error) => {
        dispatch(push('/error/002'))
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
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch(push('/signin/sent'))
      })
      .catch(() => {
        dispatch(push('/signin/sent'))
      })
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
      ).catch((error) => {
        dispatch(push('/error/001'))
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
      }).catch((error) => {
        dispatch(push('/error/001'))
      })
    }

    const usersState = await fetchUsersState(uid)
    if (usersState) {
      dispatch(updateDirayAction(usersState))
      dispatch(push(`/post/${id}`))
    } else {
      dispatch(push('/error/001'))
    }
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
    if (usersState) {
      dispatch(updateDirayAction(usersState))
      dispatch(push('/'))
    } else {
      dispatch(push('/error/001'))
    }
  }
}

/**
 * Fetch users state
 * @param uid uid
 * @returns users state
 */
const fetchUsersState = async (uid: string) => {
  const users = await getDoc(doc(db, DOC_NAME_USERS, uid))
  const usersData = users.data()
  if (usersData) {
    const diaries = await fetchDiaries(uid)
    return {
      username: usersData.username,
      uid: usersData.uid,
      isSignedIn: true,
      diaries: diaries,
      currentYM: new Date(),
    }
  }
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
