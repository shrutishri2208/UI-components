import React from "react";

const Rectangle = () => {
  return (
    <div className="">
      <svg
        width="200"
        height="80"
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rectangle"
      >
        <rect x="10" y="5" width="80" height="30" rx="15" />
      </svg>
    </div>
  );
};

export default Rectangle;
