import * as Types from './types'

export const SAVE = 'SAVE'
export const saveAction = (diaryState: Types.diaryState) => {
  return {
    type: 'SAVE',
    payload: {},
  }
}
