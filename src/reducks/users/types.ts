export type UserState = {
  isSignedIn: boolean
  uid: string
  username: string
  diaries: Diary[]
  editing: Diary | undefined
}

export type Diary = {
  id: string
  date: string
  title: string
  content: string
}

export type SignInOutAction = {
  type: string
  payload: UserState
}

export type SignUpParams = {
  username: string
  email: string
  password: string
  passwordConfirm: string
}

export type signInParams = {
  email: string
  password: string
}
