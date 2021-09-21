import * as Types from './types'

export const SIGN_IN = 'SIGN_IN'
export const signInAction = (userState: Types.userState): Types.signInOutAction => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOutAction = (): Types.signInOutAction => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      uid: '',
      username: '',
    },
  }
}
