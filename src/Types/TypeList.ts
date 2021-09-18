import { ChangeEvent } from 'react'

export type Diary = {
  id: string
  date: string
  title: string
  content: string
  userId: string
}

export type SaveFunc = (date: string, title: string, content: string, id?: string) => void

export type InputFunction = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
