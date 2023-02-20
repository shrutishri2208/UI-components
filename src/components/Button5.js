import React, { useState } from "react";
import Rectangle from "./Rectangle";

const Button5 = ({ loaderTime }) => {
  const [isClicked, setIsClicked] = useState(false);

  const openLoader = () => {
    setIsClicked(true);
    closeLoader();
  };

  const closeLoader = () => {
    setTimeout(() => {
      setIsClicked(false);
    }, loaderTime);
  };

  return (
    <div className={`relative m-auto   ${isClicked && "rect-1"}`}>
      <Rectangle />
      <button className="sub-btn-2" onClick={openLoader}>
        SUBMIT
      </button>
    </div>
  );
};

export default Button5;
