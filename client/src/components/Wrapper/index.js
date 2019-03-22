import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="wrapper" {...props} />;
}

export default Wrapper; 

//basically adds the class wrapper to all of its props
