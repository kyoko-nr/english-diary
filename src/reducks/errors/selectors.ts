import { createSelector } from 'reselect'

const errorsSelector = (state: any) => state.errors

export const getErrors = createSelector([errorsSelector], (state) => state)
