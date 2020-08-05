export const initialState = {
  user: {
    username: null,
    photo: null, //placeholder?
    followers: 0,
    following: 0,
    repos: 0
  },
  repositories: [],
  searchInput: ''
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'GET_USER_DETAILS':
      return { ...state, user: action.payload };
    case 'GET_REPOSITORIES':
      return { ...state, repositories: action.payload };
    default: 
      return state;
  }
}
