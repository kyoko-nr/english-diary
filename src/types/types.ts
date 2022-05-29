export type Diary = {
  id: string
  date: Date
  title: string
  content: string
  words: Word[]
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

export type Feature = 'meanings' | 'examples' | 'synonyms'

export type Option = {
  key: string
  value: string
}

export type SortType = 'Alphabetical' | 'Parts of speech' | 'Newer' | 'Older'

export type SortOption = {
  key: string
  sort: SortType
}
