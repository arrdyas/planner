import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="myNav"
      style={{ alignItems: "center", backgroundColor: "#fa9bc7" }}
    >
      <p>© 2023 by Arrdya Srivastav</p>
      <Link to="/calender" style={{ color: "black", textDecoration: "none" }}>
        <p> Calender</p>
      </Link>
    </div>
  );
};

export default Footer;
