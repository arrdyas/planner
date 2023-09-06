import React, { useState } from "react";

const AddEventForm = ({ show, date, setShow, todoMasterList }) => {
  const days = [
    "Weekend",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekend",
  ];
  const [event, setEvent] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addTodos(date.toDateString() + ": " + event);
    setEvent("");
    setShow(false);
    alert("Event added");
  }
  function addTodos(title) {
    let i = 2 * (date.getDay() - 1);
    if (i == -2) i = 10;
    let setTodoList = todoMasterList[i + 1];
    if (title != "") {
      setTodoList((currentTodos) => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false, date: date },
        ];
      });
    }
  }
  return (
    <div className="row addEventFormContainer">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "10px",
          gap: "10px",
        }}
      >
        <label for="inputPassword5" class="form-label">
          Add Event for {days[date.getDay()]}
        </label>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => setShow(false)}
        >
          Close
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          id="inputPassword5"
          class="form-control"
          aria-labelledby="passwordHelpBlock"
          onChange={(e) => setEvent(e.target.value)}
          value={event}
        />
      </form>
      <div id="passwordHelpBlock" class="form-text">
        Selected Date: {date.toDateString()}
      </div>
    </div>
  );
};

export default AddEventForm;
