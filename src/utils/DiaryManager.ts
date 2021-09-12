import { Diary, SaveFunc } from 'Types/TypeList'

const initialDiary: Diary[] = [
  {
    id: '1',
    date: 'Sun 08/01/2021',
    title: 'My first diary',
    content: 'This is my first diary. I watched some dramas on Netflix today. I like Atypical the most.',
  },
  {
    id: '2',
    date: 'Mon 08/02/2021',
    title: 'My second diary',
    content:
      'This is my second diary. I went to Minatomirai to watch a movie. The title of the movie is "In the Hights."',
  },
  {
    id: '3',
    date: 'Tue 08/10/2021',
    title: 'My third diary',
    content: 'This is my third diary. I have nothing to write today."',
  },
]

export const fetchDiaries = (): Diary[] => {
  return initialDiary
}

export const fetchDiary = (id: string): Diary | undefined => {
  return initialDiary.find((diary) => diary.id === id)
}

export const deleteDiary = (id: string): Diary[] => {
  return initialDiary.filter((diary) => diary.id !== id)
}

export const updateDiary = (update: Diary): Diary[] => {
  const diaryToUpdate = initialDiary.find((diary) => diary.id === update.id)
  if (diaryToUpdate) {
    const updated = { ...diaryToUpdate, content: update.content, title: update.title }
    return initialDiary.map((diary) => (diary.id === updated.id ? { ...updated } : diary))
  }
  return initialDiary
}

export const insertDiary = (insert: Diary): Diary[] => {
  return [...initialDiary, insert]
}
