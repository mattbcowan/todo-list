import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  tasks: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions for changing state

  function addTask(item) {
    dispatch({
      type: "ADD_TASK",
      payload: item,
    });
  }

  function removeTask(item) {
    dispatch({
      type: "REMOVE_TASK",
      payload: item,
    });
  }

  function updateTask(item) {
    dispatch({
      type: "UPDATE_TASK",
      payload: item,
    });
  }

  function clearCompletedTasks(item) {
    dispatch({
      type: "CLEAR_COMPLETED_TASKS",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        removeTask,
        updateTask,
        clearCompletedTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
