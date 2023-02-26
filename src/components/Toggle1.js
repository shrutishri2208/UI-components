import React, { useState } from "react";

const Toggle1 = () => {
  const [state, setState] = useState(true);

  return (
    <div onClick={() => setState(!state)} className="cursor-pointer toggle-1">
      <svg
        width="90"
        height="50"
        viewBox="15 -4 50 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="2"
        className="m-auto mb-4"
      >
        <rect
          id="bg"
          x="9.5"
          y="1"
          width="60"
          height="30"
          rx="15"
          strokeWidth="1"
          strokeOpacity="0.5"
          stroke="#fff"
          fill="#2f2f2f"
        />
        <circle
          className={`sun ${state ? "sVisible" : "mHide"}`}
          cx="25"
          cy="16"
          r="11.5"
          stroke="#ffdd00"
          fill="#ffdd00"
        />
        <path
          className={`moon ${!state ? "mVisible" : "sHide"}`}
          d="M64.3435 12.4246C66.1762 18.7858 62.5114 25.4279 56.1563 27.2715C53.5206 27.7749 51.2442 27.6736 49.1952 27.0229C47.5076 26.487 45.9521 25.5713 44.4638 24.2795C48.001 24.2999 50.7906 23.5092 52.9153 22.1853C55.3047 20.6966 56.8171 18.5558 57.6052 16.2235C59.0274 12.0148 58.1048 7.12171 55.674 4.22267C55.8739 4.25392 56.0982 4.30287 56.3432 4.37145C57.1666 4.60192 58.1813 5.04196 59.2205 5.70871C61.2994 7.04244 63.4293 9.25148 64.3435 12.4246Z"
          stroke="#fff9d0"
          fill="#fff9d0"
        />
      </svg>
    </div>
  );
};

export default Toggle1;
