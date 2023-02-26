import React from "react";
import Arrow from "./components/Arrow";
import Loader from "./components/Loader";
import Submit1 from "./components/Submit1";
import Submit2 from "./components/Submit2";
import Submit3 from "./components/Submit3";
import Submit4 from "./components/Submit4";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <div className="container flex flex-wrap justify-center gap-4">
        <Submit1 />
        <Submit2 />
        <Submit4 />
        <Submit3 />
        <Loader />
        <Arrow />
        <Toggle />
      </div>
    </div>
  );
}

export default App;
