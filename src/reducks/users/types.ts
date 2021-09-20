export type userState = {
  isSignedIn: boolean
  uid: string
  username: string
}

export type signInAction = {
  type: string
  payload: userState
}

export type signUpParams = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}

export type signInParams = {
  email: string
  password: string
}
