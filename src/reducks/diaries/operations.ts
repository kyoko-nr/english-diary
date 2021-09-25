import { push } from 'connected-react-router'
import { diaryState, diaryDbState } from './types'
import { db } from 'firebase/index'
import { Timestamp, setDoc, doc, collection, getDoc, where, query, getDocs, orderBy } from 'firebase/firestore'
import { Dispatch } from 'redux'
import { fetchDiariesAction } from './actions'

const DOC_NAME = 'diaries'

export const saveDiary = (diary: diaryState) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const timestamp = Timestamp.now()

    const ref = doc(collection(db, DOC_NAME))
    const id = ref.id
    const data: diaryDbState = {
      id: id,
      userId: diary.userId,
      date: Timestamp.fromDate(new Date()),
      title: diary.title,
      content: diary.content,
      createdAt: timestamp,
      updatedAt: timestamp,
    }

    return setDoc(doc(db, DOC_NAME, id), data)
      .then(() => {
        dispatch(push('/'))
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

export const fetchDiaries = (userId: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const diaries: diaryState[] = []
    const q = query(collection(db, DOC_NAME), where('userId', '==', userId), orderBy('date', 'desc'))
    console.log(q)
    const snapshot = await getDocs(q)
    snapshot.forEach((doc) => {
      const data = doc.data()
      const diary: diaryState = {
        id: doc.id,
        userId: data.userId,
        date: data.date.toDate().toDateString(),
        title: data.title,
        content: data.content,
      }
      diaries.push(diary)
    })
    console.log(diaries)
    dispatch(fetchDiariesAction(diaries))
  }
}

export const fetchDiary = async (id: string): Promise<diaryState> => {
  const docref = doc(db, 'diaries', id)
  const snapshot = await getDoc(docref)
  if (snapshot.exists()) {
    const id = snapshot.id
    const data = snapshot.data()
    return {
      id,
      userId: data.userId,
      date: data.date.toDate().toDateString(),
      title: data.title,
      content: data.content,
    }
  } else {
    return Promise.reject()
  }
}
