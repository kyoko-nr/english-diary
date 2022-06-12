const initialState = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
    email: '',
    diaries: [],
    currentYM: undefined,
    loading: false,
    words: [],
  },
  errors: {
    errorMsgs: [],
  },
}

export default initialState
