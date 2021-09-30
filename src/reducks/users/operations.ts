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
import { Timestamp, setDoc, doc, getDoc, collection } from 'firebase/firestore'
import { Dispatch, Unsubscribe } from 'redux'
import { signInAction, signOutAction } from './actions'

const DOC_NAME_USERS = 'users'
const DOC_NAME_DIARIES = 'diaries'

/**
 * Listen authentification state of App.
 * @returns
 */
export const listenAuthState = () => {
  return async (dispatch: Dispatch): Promise<Unsubscribe> => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        getDoc(doc(db, DOC_NAME_USERS, uid)).then((snapshot) => {
          const data = snapshot.data()
          if (data) {
            dispatch(
              signInAction({
                username: data.username,
                uid: data.uid,
                isSignedIn: true,
                diaries: data.diaries,
                editing: undefined,
              })
            )
          }
        })
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
      .then((result) => {
        const user = result.user
        if (user) {
          const uid = user.uid
          getDoc(doc(db, DOC_NAME_USERS, uid)).then((snapshot) => {
            const data = snapshot.data()
            if (data) {
              dispatch(
                signInAction({
                  username: data.username,
                  uid: data.uid,
                  isSignedIn: true,
                  diaries: data.diaries,
                  editing: undefined,
                })
              )
              dispatch(push('/'))
            }
          })
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
      .then((result) => {
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

          setDoc(doc(db, DOC_NAME_USERS, uid), userInitialData).then(() => {
            dispatch(push('/'))
          })
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
  return async (dispatch: Dispatch, getState: any): Promise<void> => {
    const timestamp = Timestamp.now()
    const uid = getState().users.uid

    if (diary.id) {
      // update
      const data: Diary = {
        ...diary,
        updatedAt: timestamp,
      }
      await setDoc(doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, diary.id), data)
    } else {
      // create
      const diaryRef = doc(collection(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES))
      const id = diaryRef.id
      const data: Diary = {
        ...diary,
        id: id,
        updatedAt: timestamp,
        createdAt: timestamp,
      }
      await setDoc(doc(db, DOC_NAME_USERS, uid, DOC_NAME_DIARIES, id), data)
    }
    dispatch(push('/'))
  }
}
