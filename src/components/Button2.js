import React, { useState } from "react";
import Loader from "./Loader";

const Button2 = ({ loaderTime }) => {
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
      <button className="relative sub-btn-1" onClick={openLoader}>
        <span className="mx-2 mb-0.5">SUBMIT</span>
        {isClicked && <Loader isClicked={isClicked} />}
      </button>
    </div>
  );
};

export default Button2;
