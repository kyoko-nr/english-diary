import * as Types from './types'

export const FETCH_DIARIES = 'FETCH_DIARIES'
export const fetchDiariesAction = (diaries: Types.diaryState[]) => {
  return {
    type: 'FETCH_DIARIES',
    payload: diaries,
  }
}

// export const SAVE = 'SAVE'
// export const saveAction = (diaryState: Types.diaryState) => {
//   return {
//     type: 'SAVE',
//     payload: {},
//   }
// }
