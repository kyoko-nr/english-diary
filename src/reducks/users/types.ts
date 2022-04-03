import { Timestamp } from '@firebase/firestore'

export type UserState = {
  isSignedIn: boolean
  uid: string
  username: string
  email: string | undefined
  diaries: Diary[]
  currentYM: Date | undefined
}

export type Diary = {
  id: string
  date: Date
  title: string
  content: string
  words: Word[] | undefined
}

export type DiaryToSave = {
  id?: string
  date?: Timestamp
  title: string
  content: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

export type Word = {
  id: string
  name: string
  meanings: Addible[] | undefined
  synonyms: Addible[] | undefined
  examples: Addible[] | undefined
}

export type Addible = {
  id: string
  value: string
}

export type UsersAction = {
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
