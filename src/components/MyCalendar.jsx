import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";

const MyCalendar = ({ date, setDate, show, setShow }) => {
  const [clicked, setClicked] = useState(false);
  function handleChange(value) {
    setClicked(true);
    console.log(value + " " + date);
    setDate(value);
    setShow(true);
  }
  return (
    <div className="calendar">
      <h1 className="header">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={(value, e) => handleChange(value)} value={date} />
      </div>
    </div>
  );
};

export default MyCalendar;
