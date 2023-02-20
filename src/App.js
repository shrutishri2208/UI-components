import React from "react";
import Arrow from "./components/Arrow";
import Submit1 from "./components/Submit1";
import Submit2 from "./components/Submit2";
import Submit3 from "./components/Submit3";
import Submit4 from "./components/Submit4";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Submit1 />
        <Submit2 />
        <Submit3 />
        <Submit4 />
        <Arrow />
      </div>
    </div>
  );
}

export default App;
