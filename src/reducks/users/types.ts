import { Timestamp } from '@firebase/firestore'
import { Diary, Word } from 'types/types'

export type UserState = {
  isSignedIn: boolean
  uid: string
  username: string
  email: string | undefined
  diaries: Diary[]
  currentYM: Date | undefined
  loading: boolean
  words: Word[]
}

export type DiaryToSave = {
  id: string
  date: Timestamp
  title: string
  content: string
  updatedAt: Timestamp
  words: Word[]
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

export type signInParams = Pick<SignUpParams, 'email' | 'password'>
