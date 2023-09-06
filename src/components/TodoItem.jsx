import React, { useState } from "react";

const TodoItem = ({ id, title, removeItem, completed, toggleChecked }) => {
  const [isComplete, setCompleted] = useState(false);
  return (
    <li className="todoItem">
      <input
        type="checkbox"
        className="form-check-input"
        disabled={completed}
        checked={completed}
        onChange={(e) => toggleChecked(id, e.target.checked)}
        // style={{ marginRight: "5px" }}
      ></input>
      <label className="form-check-label" htmlFor="flexCheckDisabled">
        {title}
      </label>
      <button
        type="button"
        className="btn btn-link btn-sm"
        aria-label="Close"
        onClick={() => removeItem(id)}
        style={{ backgroundColor: "fa9bc7", borderRadius: "5px" }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
};

export default TodoItem;
