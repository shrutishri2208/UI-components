import React from "react";
import Button7 from "./Button7";
import Button8 from "./Button8";

const loaderTime = 4000;

const Submit3 = () => {
  return (
    <div className="border-2 rounded-lg p-8 w-fit">
      <h1 className="mb-4">Loader on Click - 4</h1>
      <div className="grid grid-cols-2 gap-14">
        <Button7 loaderTime={loaderTime} />
        <Button8 loaderTime={loaderTime} />
      </div>
    </div>
  );
};

export default Submit3;
