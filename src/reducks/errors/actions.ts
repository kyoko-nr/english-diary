import * as Types from './types'

export const SET_ERRORS = 'SET_ERRORS'
export const setErrorsAction = (errorMsgs: string[]): Types.ErrorsAction => {
  return {
    type: 'SET_ERRORS',
    payload: {
      errorMsgs: errorMsgs,
    },
  }
}

export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const clearErrorsAction = (): Types.ErrorsAction => {
  return {
    type: 'CLEAR_ERRORS',
    payload: {
      errorMsgs: [],
    },
  }
}
