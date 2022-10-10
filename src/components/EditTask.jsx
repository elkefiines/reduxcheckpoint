import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../redux/actions/taskActions";
const EditTask = () => {
  const current = useSelector((state) => state.tasks.current);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onClick = () => {
    const updTask = {
      id: current.id,
      description: text,
    };
    dispatch(editTask(updTask));
  };
  useEffect(() => {
    if (current) {
      setText(current.description);
    }
  }, [current]);
  return (
    <div className="modal" tabIndex="-1" id="editTask">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit task</h5>
          </div>
          <div className="modal-body">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-primary"
              onClick={onClick}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
