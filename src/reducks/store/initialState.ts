const initialState = {
  users: {
    isSignedIn: false,
    uid: '',
    username: '',
    diaries: [],
    editing: {
      id: '',
      date: undefined,
      title: '',
      content: '',
      createdAt: undefined,
      updatedAt: undefined,
    },
  },
  // diaries: {
  //   list: [],
  // },
}

export default initialState
