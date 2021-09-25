import * as Actions from './actions'
import initialState from 'reducks/store/initialState'
import * as Types from './types'

export const DiariesReducer = (state = initialState.diaries, action: Types.fetchDiariesAction) => {
  switch (action.type) {
    case Actions.FETCH_DIARIES:
      return {
        ...state,
        list: [...action.payload],
      }
    default:
      return state
  }
}
