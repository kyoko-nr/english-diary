export type userState = {
  isSignedIn: boolean
  uid: string
  username: string
}

export type signInAction = {
  type: string
  payload: userState
}
