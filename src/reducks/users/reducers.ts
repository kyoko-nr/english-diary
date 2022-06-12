import * as Actions from './actions'
import initialState from 'reducks/store/initialState'
import * as Types from './types'

export const UsersReducer = (state = initialState.users, action: Types.UsersAction): Types.UserState => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }
    case Actions.SIGN_OUT:
      return {
        ...action.payload,
      }
    case Actions.UPDATE_DIARY_WORD:
      return {
        ...state,
        diaries: action.payload.diaries,
        words: action.payload.words,
      }
    case Actions.CHANGE_CURRENT_YM:
      return {
        ...state,
        currentYM: action.payload.currentYM,
      }
    case Actions.UPDATE_USER_ACCOUNT:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
      }
    case Actions.UPDATE_LOADING_STATE:
      return {
        ...state,
        loading: action.payload.loading,
      }
    default:
      return state
  }
}
