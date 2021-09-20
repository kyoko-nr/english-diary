import { db } from 'firebase/index'
import { collection, getDocs, doc, getDoc, addDoc, Timestamp } from 'firebase/firestore'
import { Diary } from 'types/TypeList'

const initialDiary: Diary[] = [
  {
    id: '1',
    date: 'Sun 08/01/2021',
    title: 'My first diary',
    content: 'This is my first diary. I watched some dramas on Netflix today. I like Atypical the most.',
    userId: 'kyoko',
  },
  {
    id: '2',
    date: 'Mon 08/02/2021',
    title: 'My second diary',
    content:
      'This is my second diary. I went to Minatomirai to watch a movie. The title of the movie is "In the Hights."',
    userId: 'kyoko',
  },
  {
    id: '3',
    date: 'Tue 08/10/2021',
    title: 'My third diary',
    content: 'This is my third diary. I have nothing to write today."',
    userId: 'kyoko',
  },
]
/**
 * Fetch all diaries.
 * @returns diaries
 */
export const fetchDiaries = async (): Promise<Diary[]> => {
  const diaries: Diary[] = []
  const snapshot = await getDocs(collection(db, 'diaries'))
  snapshot.forEach((doc) => {
    const data = doc.data()
    diaries.push({ id: doc.id, date: data.date, title: data.title, content: data.title, userId: data.userId })
  })
  return diaries
}

/**
 * Fetch one diary.
 * @param id id
 * @returns diary
 */
export const fetchDiary = async (id: string): Promise<Diary> => {
  const docRef = doc(db, 'diaries', id)
  const snapshot = await getDoc(docRef)
  if (snapshot.exists()) {
    const data = snapshot.data()
    return { id: snapshot.id, date: data.date, title: data.title, content: data.content, userId: data.userId }
  } else {
    return Promise.reject(`Invalid id : ${id}`)
  }
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

export const insertDiary = async (insert: Diary): Promise<Diary[]> => {
  await addDoc(collection(db, 'diaries'), {
    date: insert.date,
    title: insert.title,
    content: insert.content,
    userId: 'kyoko',
  })
  return await fetchDiaries()
}
