import * as Actions from './actions'
import initialState from 'reducks/store/initialState'
import * as Types from './types'
import { VoidExpression } from 'typescript'

export const DiariesReducer = (state = initialState.diaries, action: Types.saveAction) => {
  switch (action.type) {
    default:
      return []
  }
}
