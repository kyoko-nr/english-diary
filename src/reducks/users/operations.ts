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
import { signInAction, signOutAction, updateDirayAction } from './actions'

const DOC_NAME_USERS = 'users'
const DOC_NAME_DIARIES = 'diaries'

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
    // TODO: validation
    if (params.email === '' || params.password === '') {
      alert('You need to fill up all forms')
      return Promise.reject()
    }

    return signInWithEmailAndPassword(auth, params.email, params.password)
      .then(async (result) => {
        const user = result.user
        if (user) {
          const uid = user.uid
          const usersState = await fetchUsersState(uid)
          if (usersState) {
            dispatch(signInAction(usersState))
            dispatch(push('/'))
          }
        }
      })
      .catch((error) => {
        console.log(error)
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
    // TODO: Validation
    if (params.username === '' || params.email === '' || params.password === '' || params.passwordConfirm === '') {
      alert('You need to fill up all forms')
      return Promise.reject()
    }
    if (params.password !== params.passwordConfirm) {
      alert("Password doesn't match to password to confirm.")
      return Promise.reject()
    }

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
            diaries: doc,
          }

          await setDoc(doc(db, DOC_NAME_USERS, uid), userInitialData)
          dispatch(push('/'))
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

/**
 * Sign out.
 * @returns
 */
export const signOutFrom = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    signOut(auth).then(() => {
      dispatch(signOutAction())
      dispatch(push('/signin'))
    })
  }
}

/**
 * Reset password.
 * @param email e-mail address
 * @returns
 */
export const resetPassword = (email: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    if (!email) {
      alert('Unvalid email')
      return Promise.reject()
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Password reset email was sent!')
          dispatch(push('/signin'))
        })
        .catch(() => {
          alert('Failed to send email')
        })
    }
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
      )
    } else {
      // create
      const diaryRef = doc(collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES))
      id = diaryRef.id
      await setDoc(doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, id), {
        id: id,
        date: Timestamp.fromDate(new Date(diary.date)),
        title: diary.title,
        content: diary.content,
        createdAt: timestamp,
        updatedAt: timestamp,
      })
    }

    const usersState = await fetchUsersState(uid)
    if (usersState) {
      dispatch(updateDirayAction(usersState))
      dispatch(push(`/post/${id}`))
    } else {
      alert('unable to update')
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
      alert('unable to update')
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
  // const snapShot = await getDocs(collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES))
  const q = query(collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES), orderBy('date', 'desc'), orderBy('title'))
  const snapShot = await getDocs(q)
  snapShot.forEach((diary) => {
    const data = diary.data()
    diaries.push({
      id: data.id,
      date: data.date.toDate().toDateString(),
      title: data.title,
      content: data.content,
    })
  })
  return diaries
}
