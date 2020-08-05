export const initialState = {
  user: {
    username: null,
    photo: null, //placeholder?
    followers: 0,
    following: 0,
    repos: 0
  },
  repositories: {
    name: null,
    description: null,
    language: null
  }
};

export default function reducer(state, action) {
  switch(action.type) {
    default: 
      return state;
  }
}
