import React from "react";
import GrandChild from "./GrandChild";

function Child(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild name={props.name} />
    </div>
  );
}

export default Child;
