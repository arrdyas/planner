import React from "react";
import TodoItem from "./TodoItem";
import { Link } from "react-router-dom";

const TodoDay = ({ title, todoList, setTodoList }) => {
  function removeItem(id) {
    setTodoList((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function toggleChecked(id, completed) {
    setTodoList((todoList) => {
      return todoList.map((todo) => {
        if (todo.id === id) {
          let c = { ...todo, completed };
          console.log(completed);
          return c;
        }
        return todo;
      });
    });
  }
  return (
    <div>
      <Link to={"/quote"} style={{ textDecoration: "none", color: "black" }}>
        {title}
      </Link>
      <div className="ew">
        {todoList.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              title={todo.title}
              removeItem={removeItem}
              completed={todo.completed}
              key={todo.id}
              toggleChecked={toggleChecked}
            ></TodoItem>
          );
        })}
      </div>
    </div>
  );
};

export default TodoDay;
