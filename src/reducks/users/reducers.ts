import * as Actions from './actions'
import initialState from 'reducks/store/initialState'
import * as Types from './types'

export const UsersReducer = (state = initialState.users, action: Types.signInOutAction): Types.userState => {
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
    default:
      return state
  }
}
