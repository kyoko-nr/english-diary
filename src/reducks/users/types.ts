import { Timestamp } from '@firebase/firestore'

export type UserState = {
  isSignedIn: boolean
  uid: string
  username: string
  diaries: Diary[]
  editing: Diary | undefined
}

export type Diary = {
  id: string
  date: Timestamp | undefined
  title: string
  content: string
  createdAt: Timestamp | undefined
  updatedAt: Timestamp | undefined
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
