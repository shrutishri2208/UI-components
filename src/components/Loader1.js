import React from "react";

const Loader1 = () => {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-4">Loader - 1</h1>
      <div className="loader-1 relative m-auto">
        <div className="shape1 absolute"></div>
        <div className="shape2 absolute"></div>
        <div className="shape3 "></div>
      </div>
    </div>
  );
};

export default Loader1;
