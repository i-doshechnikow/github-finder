const githubReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        loading: false,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default githubReducer;
