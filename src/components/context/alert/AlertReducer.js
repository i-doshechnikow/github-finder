const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        isAlert: true,
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        isAlert: false,
      };
    default:
      return state;
  }
};

export default alertReducer;
