import React, { useState } from "react";
import Loader from "./Loader";

const Button4 = ({ loaderTime }) => {
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
    <div className=" flex justify-center">
      <button className="relative sub-btn-1 flex-col" onClick={openLoader}>
        <span className="ml-2 mb-0.5">SUBMIT</span>
        {isClicked && <Loader isClicked={isClicked} />}
      </button>
    </div>
  );
};

export default Button4;
