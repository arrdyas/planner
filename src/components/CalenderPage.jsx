import React from "react";
import MyCalendar from "./MyCalendar";
import { useState } from "react";
import AddEventForm from "./AddEventForm";
import Notes from "./Notes";

const CalenderPage = ({ todoMasterList }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container">
        <div className="col-8" style={{ padding: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              padding: "2opx",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyCalendar
              date={date}
              setDate={setDate}
              show={show}
              setShow={setShow}
            />

            {show && (
              <AddEventForm
                date={date}
                setShow={setShow}
                show={show}
                todoMasterList={todoMasterList}
              />
            )}
          </div>
        </div>
        <div className="col-8">
          <Notes></Notes>
        </div>
      </div>
    </>
  );
};

export default CalenderPage;
