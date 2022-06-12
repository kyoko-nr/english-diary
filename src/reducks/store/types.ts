import { Diary, Word } from 'types/types'
import { User } from '@firebase/auth'

export interface AppState {
  users: UsersInfo
  errors: ErrorsInfo
}

export interface UsersInfo extends User {
  isSignedIn: boolean
  uid: string
  username: string
  email: string
  diaries: Array<Diary>
  currentYM: Date
  words: Word[]
  loading: boolean
}

export interface ErrorsInfo {
  errorMsgs: Array<string>
}
