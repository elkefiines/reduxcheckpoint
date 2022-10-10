import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  setCurrentTask,
  toggleCompleteTask,
} from "../redux/actions/taskActions";

const Task = ({ todo }) => {
  const { id, description, isDone } = todo;
  const dispatch = useDispatch();
  const onClick = (e) => {
    if (e.target.id === "completed") {
      dispatch(toggleCompleteTask(id));
    }
    if (e.target.id === "edit") {
      dispatch(setCurrentTask(todo));
    }
    if (e.target.id === "delete") {
      dispatch(deleteTask(id));
    }
  };
  return (
    <li>
      <span
        id="completed"
        className={isDone ? "completed" : ""}
        onClick={onClick}
      >
        {description}
      </span>
      <i
        id="edit"
        data-bs-toggle="modal"
        data-bs-target="#editTask"
        className="fa-solid fa-pen-to-square"
        onClick={onClick}
      ></i>
      <i id="delete" className="fa-solid fa-trash-can" onClick={onClick}></i>
    </li>
  );
};

export default Task;
