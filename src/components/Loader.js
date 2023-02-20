import React from "react";

const Loader = ({ isClicked }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`loader ${isClicked && "loader-open"}`}
    >
      <circle cx="50" cy="50" r="36" />
    </svg>
  );
};

export default Loader;
