import { push } from 'connected-react-router'
import { signUpParams, signInParams } from './types'
import { auth, db } from 'firebase/index'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  UserCredential,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { Timestamp, setDoc, doc, getDoc } from 'firebase/firestore'
import { Dispatch, Unsubscribe } from 'redux'
import { signInAction, signOutAction } from './actions'

const DOC_NAME = 'users'

export const listenAuthState = () => {
  return async (dispatch: Dispatch): Promise<Unsubscribe> => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        getDoc(doc(db, DOC_NAME, uid)).then((snapshot) => {
          const data = snapshot.data()
          if (data) {
            dispatch(signInAction({ username: data.username, uid: data.uid, isSignedIn: true }))
          }
        })
      } else {
        dispatch(push('/signin'))
      }
    })
  }
}

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
          getDoc(doc(db, DOC_NAME, uid)).then((snapshot) => {
            const data = snapshot.data()
            if (data) {
              dispatch(signInAction({ username: data.username, uid: data.uid, isSignedIn: true }))
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

export const signUp = (params: signUpParams) => {
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
            created_at: timestamp,
            email: params.email,
            uid: uid,
            updated_at: timestamp,
            usename: params.username,
          }

          setDoc(doc(db, DOC_NAME, uid), userInitialData).then(() => {
            dispatch(push('/'))
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const signOutFrom = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    signOut(auth).then(() => {
      dispatch(signOutAction())
      dispatch(push('/signin'))
    })
  }
}

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
