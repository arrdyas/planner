import React from "react";
import { useRef } from "react";

const Section = ({ id, color, refs, text }) => {
  const c = "#D9D4BA";
  return (
    <div
      className="section"
      style={{ backgroundColor: `${color}`, height: `800px` }}
      ref={refs}
    >
      <div className={id}>{text}</div>
    </div>
  );
};

export default Section;
