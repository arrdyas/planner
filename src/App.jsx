import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPlanner from "./components/MainPlanner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CalenderPage from "./components/CalenderPage";
import { useState, useEffect } from "react";
import Quotes from "./components/Quotes";

export default function App() {
  const [newMonday, setNewMonday] = useState("");
  const [mondayTodos, setMondayTodos] = useState(() => {
    const localValue = localStorage.getItem("MONDAY_ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [tuesdayTodos, setTuesdayTodos] = useState(() => {
    const localValue = localStorage.getItem("TUESDAY_ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [wednesdayTodos, setWednesdayTodos] = useState(() => {
    const localValue = localStorage.getItem("WEDNESDAY_ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [thursdayTodos, setThursdayTodos] = useState(() => {
    const localValue = localStorage.getItem("THURSDAY_ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [fridayTodos, setFridayTodos] = useState(() => {
    const localValue = localStorage.getItem("FRIDAY_ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [weekendTodos, setWeekendTodos] = useState(() => {
    const localValue = localStorage.getItem("WEEKEND_ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [notes, setNotes] = useState(() => {
    const localValue = localStorage.getItem("NOTES");
    if (localValue == null) return "";
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("MONDAY_ITEMS", JSON.stringify(mondayTodos));
  }, [mondayTodos]);
  useEffect(() => {
    localStorage.setItem("TUESDAY_ITEMS", JSON.stringify(tuesdayTodos));
  }, [tuesdayTodos]);
  useEffect(() => {
    localStorage.setItem("WEDNESDAY_ITEMS", JSON.stringify(wednesdayTodos));
  }, [wednesdayTodos]);
  useEffect(() => {
    localStorage.setItem("THURSDAY_ITEMS", JSON.stringify(thursdayTodos));
  }, [thursdayTodos]);
  useEffect(() => {
    localStorage.setItem("FRIDAY_ITEMS", JSON.stringify(fridayTodos));
  }, [fridayTodos]);
  useEffect(() => {
    localStorage.setItem("WEEKEND_ITEMS", JSON.stringify(weekendTodos));
  }, [weekendTodos]);

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes]);

  function updateText(text) {
    console.log(text);
    setNotes(text);
  }

  //console.log(fridayTodos);
  const todoMasterList = [
    mondayTodos,
    setMondayTodos,
    tuesdayTodos,
    setTuesdayTodos,
    wednesdayTodos,
    setWednesdayTodos,
    thursdayTodos,
    setThursdayTodos,
    fridayTodos,
    setFridayTodos,
    weekendTodos,
    setWeekendTodos,
  ];
  return (
    <>
      <div style={{ backgroundColor: "#ffe3f0" }}>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route
              path="/"
              element={
                <MainPlanner
                  todoMasterList={todoMasterList}
                  notes={notes}
                  setNotes={setNotes}
                />
              }
            ></Route>
            <Route
              path="/calender"
              element={<CalenderPage todoMasterList={todoMasterList} />}
            ></Route>
            <Route path="/quote" element={<Quotes />}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
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
