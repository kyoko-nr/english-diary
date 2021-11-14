import * as Types from './types'

export const SIGN_IN = 'SIGN_IN'
export const signInAction = (userState: Types.UserState): Types.UsersAction => {
  return {
    type: 'SIGN_IN',
    payload: {
      ...userState,
      isSignedIn: true,
      currentYM: new Date(),
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
      email: '',
      diaries: [],
      currentYM: undefined,
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

export const CHANGE_CURRENT_YM = 'CHANGE_CURRENT_YM'
export const changeCurrentYMAction = (userState: Types.UserState): Types.UsersAction => {
  return {
    type: 'CHANGE_CURRENT_YM',
    payload: {
      ...userState,
    },
  }
}

export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const updateProfileAction = (userState: Types.UserState): Types.UsersAction => {
  return {
    type: 'UPDATE_PROFILE',
    payload: {
      ...userState,
    },
  }
}
