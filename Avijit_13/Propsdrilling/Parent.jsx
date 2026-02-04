import React from "react";
import Child from "./Child";

function App() {
  const userName = "Avijit";

  return (
    <div>
      <h1>App Component</h1>
      <Child name={userName} />
    </div>
  );
}

export default App;
