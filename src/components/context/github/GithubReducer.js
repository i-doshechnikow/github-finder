const githubReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALL_USER_INFO':
      return {
        ...state,
        loading: false,
        repos: action.repos,
        user: action.user,
      }
    case "SET_USERS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USER_LIST":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default githubReducer;
