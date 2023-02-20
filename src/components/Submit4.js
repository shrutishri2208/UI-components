import React from "react";
import Button9 from "./Button9";

const loaderTime = 4000;

const Submit4 = () => {
  return (
    <div className="border-2 rounded-lg m-8 p-8">
      <h1 className="mb-4">Loader on Click - 4</h1>
      <div className="grid grid-cols-1">
        <Button9 loaderTime={loaderTime} />
      </div>
    </div>
  );
};

export default Submit4;
