import { push } from 'connected-react-router'
import { signUpParams, signInParams } from './types'
import { auth, db } from 'firebase/index'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { Timestamp, setDoc, doc, getDoc } from 'firebase/firestore'
import { Dispatch } from 'redux'
import { signInAction } from './actions'

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
          getDoc(doc(db, 'users', uid)).then((snapshot) => {
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

          setDoc(doc(db, 'users', uid), userInitialData).then(() => {
            dispatch(push('/'))
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
