import React, { useState } from "react";

const Button = ({ title, onclickFunc, selected }) => {
  return (
    <button
      type="button"
      className={`cursor-pointer py-4 px-2 hover:text-blue-800 border-b-2 ${selected==title ? "border-blue-800" : "border-transparent"}`}
      onClick={() => {
        onclickFunc(`${title}`);
      }}
    >
      {title.toUpperCase()}
    </button>
  );
};
export default Button;
