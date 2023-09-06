import React from "react";
import NavItem from "./NavItem";

const CollapseNavBar = ({ items, thisRef, scrollToSection }) => {
  let i = -1;
  return (
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        {items.map((item) => {
          i++;
          return (
            <NavItem
              itemName={item}
              key={item}
              thisRef={thisRef[i]}
              scrollToSection={scrollToSection}
            ></NavItem>
          );
        })}
      </ul>
    </div>
  );
};

export default CollapseNavBar;
