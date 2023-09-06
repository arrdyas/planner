import "../styles.css";
import { useRef, useState, useEffect } from "react";
import TodoDay from "./TodoDay";
import TodoDayForm from "./TodoDayForm";
import Notes from "./Notes";
import { BrowserRouter as Router } from "react-router-dom";

export default function MainPlanner({ todoMasterList, notes, setNotes }) {
  let formI = -1;
  let dayI = -1;
  function handleSubmit(e) {
    e.preventDefault();
    setNewMonday("");
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Weekend",
  ];
  return (
    <>
      <div
        style={{
          backgroundColor: "#ffe3f0",
          //   height: "100%",
          //   width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            paddingTop: "50px",
            paddingLeft: "20px",
            paddingRight: "20px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {days.map((day) => {
            {
              formI++;
            }
            return (
              <TodoDayForm
                title={day}
                handleSubmit={handleSubmit}
                todoList={todoMasterList[formI]}
                setTodoList={todoMasterList[++formI]}
                key={day}
              ></TodoDayForm>
            );
          })}
        </div>
        <div className="container">
          {days.map((day) => {
            dayI++;
            return (
              <TodoDay
                title={day}
                key={day}
                todoList={todoMasterList[dayI]}
                setTodoList={todoMasterList[++dayI]}
              ></TodoDay>
            );
          })}
          <Notes notes={notes} setNotes={setNotes}></Notes>
        </div>
      </div>
    </>
  );
}

// const [newItem, setNewItem] = useState("");
// const home = useRef(null);
// const about = useRef(null);
// const contact = useRef(null);
// const refs = [home, about, contact];
// const colors = ["#A68776", "#731D0A", "#400101"];
// const items = ["Home", "About", "Contact"];
// let i = -1;

// function scrollToSection(elementRef) {
//   window.scrollTo({
//     top: elementRef.current.offsetTop,
//     behavior: "smooth",
//   });
// }

// return (
//   <>
//     <div className="page" style={{ alignItems: "center" }}>
//       <NavBar
//         items={items}
//         thisRef={refs}
//         scrollToSection={scrollToSection}
//         newItem={newItem}
//         setNewItem={setNewItem}
//       />
//       {colors.map((thisColor) => {
//         i++;
//         return (
//           <Section
//             color={thisColor}
//             id={items[i]}
//             refs={refs[i]}
//             key={items[i]}
//             text={newItem}
//           />
//         );
//       })}
//     </div>
//   </>
// );
