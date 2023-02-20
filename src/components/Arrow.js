import React from "react";
import { ReactComponent as Arrow1SVG } from "./arrow1.svg";
import { ReactComponent as Arrow2SVG } from "./arrow2.svg";
import { ReactComponent as Arrow3SVG } from "./arrow3.svg";

const loaderTime = 4000;

const Arrow1 = () => {
  return (
    <div className="border-2 rounded-lg m-8 p-8 grid grid-cols-2">
      <div className="border-r-2 px-8">
        <h1 className="mb-4">Arrows on Hover - 1</h1>
        <div className="grid grid-cols-2">
          <Arrow1SVG />
          <Arrow2SVG />
        </div>
      </div>
      {/* <div className="px-8">
        <h1 className="mb-4">Arrows on Hover - 2</h1>
        <div className="grid grid-cols-2">
          <Arrow3SVG />
        </div>
      </div> */}
    </div>
  );
};

export default Arrow1;
