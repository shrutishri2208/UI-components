import Button5 from "./Button5";
import Button6 from "./Button6";
import React from "react";

const loaderTime = 4000;

const Submit2 = () => {
  return (
    <div className="border-2 rounded-lg p-8 w-full">
      <h1 className="mb-4">Loader on Click - 2</h1>
      <div className="grid 2xl:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-2 sub-2 ">
        <Button5 loaderTime={loaderTime} />
        <Button6 loaderTime={loaderTime} />
      </div>
    </div>
  );
};

export default Submit2;
