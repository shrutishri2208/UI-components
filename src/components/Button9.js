import React, { useState } from "react";

const Button8 = ({ loaderTime }) => {
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
      <button className="relative sub-btn-4" onClick={openLoader}>
        {isClicked && (
          <div>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-wave-loader-1"
            >
              <rect width="100" height="100" rx="40" fill="#fff" />
            </svg>
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="bg-wave-loader-2"
            >
              <rect width="100" height="100" rx="40" fill="#fff" />
            </svg>
          </div>
        )}

        <span className="ml-2 mb-0.5">SUBMIT</span>
      </button>
    </div>
  );
};

export default Button8;
