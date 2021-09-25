import { createSelector } from 'reselect'

const diariesSelector = (state: any) => state.diaries

export const getDiaries = createSelector([diariesSelector], (state) => state.list)
