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
      <div className="container grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-4">
        <Submit1 />
        <Submit2 />
        <Submit3 />
        <Submit4 />
        <Toggle />
        <Arrow />
        <Loader />
      </div>
    </div>
  );
}

export default App;
