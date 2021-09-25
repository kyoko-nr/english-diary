import { Timestamp } from '@firebase/firestore'

export type diaryState = {
  id: string
  userId: string
  date: string
  title: string
  content: string
}

export type diaryDbState = {
  id: string
  userId: string
  date: Timestamp
  title: string
  content: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export type fetchDiariesAction = {
  type: string
  payload: diaryState[]
}

// export type saveAction = {
//   type: string
//   payload: diaryState
// }

// export type DiaryDb = {
//   id: string
//   userId: string
//   date: Timestamp
//   title: string
//   content: string
//   createdAt: Timestamp
//   updatedAt: Timestamp
// }
