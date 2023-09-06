import React from "react";

const NavItem = ({ itemName, thisRef, scrollToSection }) => {
  let classString = "nav-link";
  if (itemName == "Home") classString += " active";
  return (
    <>
      <li className="nav-item" style={{ color: "white" }}>
        <a className={classString} onClick={() => scrollToSection(thisRef)}>
          {itemName}
        </a>
      </li>
    </>
  );
};

export default NavItem;
