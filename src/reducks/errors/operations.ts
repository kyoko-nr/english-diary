import { Dispatch } from 'redux'
import { setErrorsAction, clearErrorsAction } from './actions'

/**
 * Set error messages.
 * @param messages Array of error messages.
 * @returns
 */
export const setErrors = (messages: string[]) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(setErrorsAction(messages))
  }
}

/**
 * Clear error messages.
 * @returns
 */
export const clearErrors = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(clearErrorsAction())
  }
}
