const initialState = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
    diaries: [],
    current: {
      id: '',
      date: '',
      title: '',
      content: '',
    },
  },
  // diaries: {
  //   list: [],
  // },
}

export default initialState
