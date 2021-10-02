import * as Types from './types'

export const SIGN_IN = 'SIGN_IN'
export const signInAction = (userState: Types.UserState): Types.UsersAction => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
      diaries: userState.diaries,
    },
  }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOutAction = (): Types.UsersAction => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      uid: '',
      username: '',
      diaries: [],
    },
  }
}

export const UPDATE_DIARY = 'UPDATE_DIARY'
export const updateDirayAction = (userState: Types.UserState): Types.UsersAction => {
  return {
    type: 'UPDATE_DIARY',
    payload: {
      ...userState,
    },
  }
}
