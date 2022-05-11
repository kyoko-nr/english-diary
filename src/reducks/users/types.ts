import { Timestamp } from '@firebase/firestore'

export type UserState = {
  isSignedIn: boolean
  uid: string
  username: string
  email: string | undefined
  diaries: Diary[]
  currentYM: Date | undefined
  loading: boolean
}

export type Diary = {
  id: string
  date: Date
  title: string
  content: string
  words: Word[]
}

export type DiaryToSave = {
  id: string
  date: Timestamp
  title: string
  content: string
  updatedAt: Timestamp
}

export type Word = {
  wordId: string
  title: string
  meanings: Addible[]
  synonyms: Addible[]
  examples: Addible[]
  pos: string
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

export type Feature = 'meanings' | 'examples' | 'synonyms'
