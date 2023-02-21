import React from "react";

const Loader2 = () => {
  return (
    <div>
      <h1 className="mb-4">Loader - 2</h1>
      <svg
        width="100"
        height="100"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="5"
        stroke="#aeaeae"
        className=""
      >
        <rect x="5" y="5" width="10" height="10" rx="15" className="ldr2c1" />
        <rect x="35" y="5" width="10" height="10" rx="15" className="ldr2c2" />
        <rect x="5" y="35" width="10" height="10" rx="15" className="ldr2c3" />
        <rect x="35" y="35" width="10" height="10" rx="15" className="ldr2c4" />
      </svg>
    </div>
  );
};

export default Loader2;
