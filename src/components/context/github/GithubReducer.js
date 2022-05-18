const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "SET_REPOS":
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        loading: false,
        user: action.payload,
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
