import React from "react";
import { greeting, headStyle } from "./greeting";

function Heading() {
  return (
    <h1 className="heading" style={headStyle}>
      {" "}
      Good {greeting} My Friend! {" "}
    </h1>
  );
}

export default Heading;
