import { createSelector } from 'reselect'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const usersSelector = (state: any) => state.users

export const getIsSignedIn = createSelector([usersSelector], (state) => state.isSignedIn)

export const getUserId = createSelector([usersSelector], (state) => state.uid)

export const getEmail = createSelector([usersSelector], (state) => state.email)

export const getUsername = createSelector([usersSelector], (state) => state.username)

export const getDiaries = createSelector([usersSelector], (state) => state.diaries)

export const getCurrentYM = createSelector([usersSelector], (state) => state.currentYM)
