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

export const SAVE_DIARY = 'SAVE_DIARY'
export const saveDirayAction = (userState: Types.UserState): Types.UsersAction => {
  return {
    type: 'SAVE_DIARY',
    payload: {
      ...userState,
    },
  }
}
