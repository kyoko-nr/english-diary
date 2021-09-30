const initialState = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
    diaries: [],
    editing: {
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
