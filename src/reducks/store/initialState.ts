const initialState = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
    email: '',
    diaries: [],
    currentYM: undefined,
    loading: false,
  },
  errors: {
    errorMsgs: [],
  },
}

export default initialState
