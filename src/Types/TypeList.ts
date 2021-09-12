export type Diary = {
  id: string
  date: string
  title: string
  content: string
}

export type SaveFunc = (date: string, title: string, content: string, id?: string) => void
