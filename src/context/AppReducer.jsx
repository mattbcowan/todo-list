const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [action.payload, ...state.tasks],
      };
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default AppReducer;
