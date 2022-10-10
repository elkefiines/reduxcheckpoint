import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, filterTask } from "../redux/actions/taskActions";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onClick = () => {
    if (text) {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        description: text,
        isDone: false,
      };
      dispatch(addTask(newTask));
      setText("");
    }
  };
  const onFilter = (e) => {
    dispatch(filterTask(e.target.id));
  };
  return (
    <div className="my-todos">
      <h1 className="title">My toDo list</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add ToDo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="addBtn" onClick={onClick}>
          Add
        </button>
      </div>
      <div className="d-flex justify-content-around">
        <div>
          <input
            type="radio"
            name="task"
            value="all"
            id="all"
            onClick={onFilter}
          />
          <label className="form-label" htmlFor="all">
            All
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="completed"
            id="completed"
            onClick={onFilter}
          />
          <label className="form-label" htmlFor="completed">
            Completed
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="task"
            value="uncompleted"
            id="uncompleted"
            onClick={onFilter}
          />
          <label className="form-label" htmlFor="uncompleted">
            Uncompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
