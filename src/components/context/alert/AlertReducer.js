const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        isAlert: true,
        message: action.message,
        type: action.alertType,
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        isAlert: false,
        message: "",
        type: "",
      };
    default:
      return state;
  }
};

export default alertReducer;
