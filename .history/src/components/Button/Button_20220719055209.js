import React from "react";

const Button = (props) => {
  return (
    <article className="flex items-center justify-between w-full mt-7">
      <button
        disabled={props.disabled}
        type={props.type}
        className={`flex uppercase justify-center ${
          props.border && `border` //This specifies if the button has aborder or not
        } border-${
          props.borderColor
        } items-center px-4 h-12 w-24 grow font-bold text-${
          props.textColor // This specifies the color of the button text
        } rounded-md bg-${
          props.backgroundColor //This specifies the color of the background
        } hover:brightness-90 tracking-wider`}
      >
        {props.children}
      </button>
    </article>
  );
};

export default Button;
