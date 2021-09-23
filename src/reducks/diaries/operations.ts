import { push } from 'connected-react-router'
import { diaryState, diaryDbState } from './types'
import { db } from 'firebase/index'
import { Timestamp, setDoc, doc, collection, getDoc } from 'firebase/firestore'
import { Dispatch } from 'redux'
// import {  } from './actions'

const DOC_NAME = 'diaries'

export const saveDiary = (diary: diaryState) => {
  return async (dispatch: Dispatch): Promise<void> => {
    const timestamp = Timestamp.now()

    const ref = doc(collection(db, DOC_NAME))
    const id = ref.id
    const data: diaryDbState = {
      ...diary,
      id: id,
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

export const fetchDiary = async (id: string): Promise<diaryState> => {
  console.log('id : ', id)
  const docref = doc(db, 'diaries', id)
  const docSnap = await getDoc(docref)
  if (docSnap.exists()) {
    const id = docSnap.id
    const data = docSnap.data()
    return { id, userId: data.userId, date: data.date, title: data.title, content: data.content }
  } else {
    return Promise.reject()
  }
}
