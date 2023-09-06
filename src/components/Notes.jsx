import React from "react";

const Notes = ({ notes, setNotes }) => {
  return (
    <div className="notes">
      Notes
      <textarea
        rows="9"
        cols="100"
        autoCorrect="on"
        className="notes-text-area"
        value={notes}
        style={{ backgroundColor: "#ffe3f0" }}
        onChange={(e) => {
          setNotes(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

export default Notes;
