export type ErrorsState = {
  errorMsgs: string[]
}

export type ErrorsAction = {
  type: string
  payload: ErrorsState
}
