import React from "react";

const Loader2 = () => {
  return (
    <div>
      <h1 className="mb-8">Loader - 2</h1>
      <svg
        width="60"
        height="35"
        viewBox="15 -4 50 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="loader2 m-auto"
      >
        <rect
          className="bg"
          x="9.5"
          y="1"
          width="60"
          height="30"
          rx="15"
          fill="#fff"
          stroke="#fff"
          strokeWidth="4"
        />
        <rect
          className="loader2rect"
          x="9.5"
          y="1"
          width="30"
          height="30"
          rx="15"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default Loader2;
