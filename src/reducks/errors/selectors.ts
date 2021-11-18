import { createSelector } from 'reselect'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorsSelector = (state: any) => state.errors

export const getErrors = createSelector([errorsSelector], (state) => state)
