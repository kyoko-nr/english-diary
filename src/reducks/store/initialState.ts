const initialState = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
    email: '',
    diaries: [],
    currentYM: undefined,
  },
  errors: {
    errorMsgs: [],
  },
}

export default initialState
