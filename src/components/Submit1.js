import Button1 from "./Button1";
import Button2 from "./Button2";
import Button3 from "./Button3";
import Button4 from "./Button4";

import React from "react";

const loaderTime = 4000;

const Submit1 = () => {
  return (
    <div className="border-2 rounded-lg p-8 w-fit h-fit">
      <h1 className="mb-4">Loader on Click - 1</h1>
      <div className="grid grid-cols-4 gap-x-8">
        <Button1 loaderTime={loaderTime} />
        <Button2 loaderTime={loaderTime} />
        <Button3 loaderTime={loaderTime} />
        <Button4 loaderTime={loaderTime} />
      </div>
    </div>
  );
};

export default Submit1;
