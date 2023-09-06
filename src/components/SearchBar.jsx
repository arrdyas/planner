import React, { useState } from "react";

const SearchBar = ({ newItem, setNewItem }) => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(newItem);
  }
  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="To Do"
        aria-label="To Do"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        className="btn btn-outline-success"
        onClick={handleSubmit}
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default SearchBar;
