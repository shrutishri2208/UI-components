import React, { useState } from "react";

const Button7 = ({ loaderTime }) => {
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
    <div className="m-auto">
      <button className="relative sub-btn-3" onClick={openLoader}>
        {isClicked && (
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-loader"
          >
            <g id="rect">
              <rect
                id="Rectangle 1"
                x="0"
                y="0"
                width="100"
                height="50"
                fill="#fff"
              />
            </g>
          </svg>
        )}
        <span className="ml-2 mb-0.5">SUBMIT</span>
      </button>
    </div>
  );
};

export default Button7;
