import React, { useState } from "react";

const Toggle2 = () => {
  const [state, setState] = useState(false);
  return (
    <div onClick={() => setState(!state)} className="cursor-pointer toggle-2">
      <svg
        width="85"
        height="45"
        viewBox="15 -4 50 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
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
          className={`${state ? "stateTrue" : "stateFalse"}`}
          x="9.5"
          y="1"
          width="30"
          height="30"
          rx="15"
          strokeWidth="1"
          strokeOpacity="0.5"
          stroke="#000"
          fill="#000"
        />
        <circle
          className={`${state ? "black" : "white"}`}
          cx="24.5"
          cy="15.5"
          r="5"
        />
        <rect
          className={`${state ? "white" : "black"}`}
          x="51"
          y="8"
          width="5"
          height="15"
          rx="3"
        />
      </svg>
    </div>
  );
};

export default Toggle2;
