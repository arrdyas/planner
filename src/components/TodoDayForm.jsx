import React, { useState } from "react";

const TodoDayForm = ({ title, setTodoList }) => {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addTodos(newItem);
    console.log(newItem);
    setNewItem("");
  }
  function addTodos(title) {
    if (title != "") {
      setTodoList((currentTodos) => {
        return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false },
        ];
      });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label style={{ paddingRight: "2px" }}>
        <input
          type="text"
          name="name"
          placeholder={title}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </label>
      <input
        type="submit"
        className="btn btn-sm"
        value="Add"
        style={{ backgroundColor: "#fa9bc7" }}
      />
    </form>
  );
};

export default TodoDayForm;
