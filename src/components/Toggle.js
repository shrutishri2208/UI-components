import React from "react";
import Toggle1 from "./Toggle1";
import Toggle2 from "./Toggle2";

const Toggle = () => {
  return (
    <div className="border-2 rounded-lg p-8">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="mb-4">Toggle - 1</h1>
          <Toggle1 />
        </div>
        <div>
          <h1 className="mb-4">Toggle - 2</h1>
          <Toggle2 />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
