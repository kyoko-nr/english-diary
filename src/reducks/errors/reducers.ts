import * as Actions from './actions'
import initialState from 'reducks/store/initialState'
import * as Types from './types'

export const ErrorsReducer = (state = initialState.errors, action: Types.ErrorsAction): Types.ErrorsState => {
  switch (action.type) {
    case Actions.SET_ERRORS:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.CLEAR_ERRORS:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
