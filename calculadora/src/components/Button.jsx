import React from "react";
import "./Button.css";

export default (props) => (
  <button
    className={`${props.operation ? "operation" : ""} ${props.double ? "double" : ""} ${props.triple ? "triple" : ""}`}
    onClick={() => props.click && props.click(props.label)}>
    {props.label}
  </button>
)
