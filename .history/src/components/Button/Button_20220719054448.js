import React from "react";

const RedButton = (props) => {
  return (
    <article className="flex items-center justify-between w-full mt-7">
      <button
        disabled={props.disabled}
        type={props.type}
        className={`flex uppercase justify-center ${
          props.border && `border`
        } border-${
          props.borderColor
        } items-center px-4 h-12 w-24 grow font-bold text-${
          props.textColor
        } rounded-md bg-${
          props.backgroundColor
        } hover:brightness-90 tracking-wider`}
      >
        {props.children}
      </button>
    </article>
  );
};

export default RedButton;
