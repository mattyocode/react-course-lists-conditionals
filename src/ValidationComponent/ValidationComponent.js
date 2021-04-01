import React from "react";

const ValidationComponent = (props) => {
  let statement = "";
  if (props.len < 5) {
    statement = "Text too short";
  } else if (props.len > 10) {
    statement = "Text too long";
  }

  return <div>{statement}</div>;
};

export default ValidationComponent;
