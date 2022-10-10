// import type
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  SET_CURRENT_TASK,
  TOGGLE_COMPLETED_TASK,
} from "./types";

// add task
export const addTask = (payload) => {
  return { type: ADD_TASK, payload };
};

//edit task
export const editTask = (payload) => {
  return { type: EDIT_TASK, payload };
};

//delete task
export const deleteTask = (payload) => {
  return { type: DELETE_TASK, payload };
};

//set current task
export const setCurrentTask = (payload) => {
  return { type: SET_CURRENT_TASK, payload };
};

// filter task
export const filterTask = (payload) => {
  return { type: FILTER_TASKS, payload };
};

//toggle completed task
export const toggleCompleteTask = (payload) => {
  return { type: TOGGLE_COMPLETED_TASK, payload };
};
