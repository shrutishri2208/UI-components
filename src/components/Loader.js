import React from "react";
import Loader1 from "./Loader1";
import Loader2 from "./Loader2";

const Loader = () => {
  return (
    <div className="border-2 rounded-lg p-8 grid grid-cols-2 loader-cont text-center">
      <Loader1 />
      <Loader2 />
    </div>
  );
};

export default Loader;
