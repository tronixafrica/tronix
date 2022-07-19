import React from "react";

const RedButton = (props) => {
  return (
    <article className="flex items-center justify-between w-full mt-7">
      <button
        type="submit"
        className={`flex uppercase justify-center items-center px-4 h-12 w-24 grow font-bold text-white rounded-md bg-backgroundRed hover:brightness-90 tracking-wider`}
      >
        {props.children}
      </button>
    </article>
  );
};

export default RedButton;
