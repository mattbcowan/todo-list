const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((item) => item !== action.payload),
      };
    case "UPDATE_TASK":
      return {
        tasks: action.payload,
      };
    case "CLEAR_COMPLETED_TASKS":
      return {
        tasks: state.tasks.filter((item) => item.isChecked !== true),
      };
    default:
      return state;
  }
};

export default AppReducer;
