import React, { useState } from "react";
import LoaderSVG from "./LoaderSVG";

const Button1 = ({ loaderTime }) => {
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
        {isClicked && <LoaderSVG isClicked={isClicked} />}
        <span className="ml-2 mb-0.5">SUBMIT</span>
      </button>
    </div>
  );
};

export default Button1;
