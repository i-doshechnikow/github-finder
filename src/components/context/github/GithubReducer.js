const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        loading: false,
        users: action.payload,
      };
    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default githubReducer;
