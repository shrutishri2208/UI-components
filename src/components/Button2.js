import React, { useState } from "react";
import LoaderSVG from "./LoaderSVG";

const Button2 = ({ loaderTime }) => {
  const [isClicked, setIsClicked] = useState(false);

  const openLoader = (e) => {
    e.preventDefault();
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
        <span className="mr-2 mb-0.5">SUBMIT</span>
        {isClicked && <LoaderSVG isClicked={isClicked} />}
      </button>
    </div>
  );
};

export default Button2;
