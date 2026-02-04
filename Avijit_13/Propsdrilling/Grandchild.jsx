import React from "react";

function GrandChild(props) {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>User Name: {props.name}</p>
    </div>
  );
}

export default GrandChild;
