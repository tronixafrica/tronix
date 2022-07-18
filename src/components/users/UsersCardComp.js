import React from "react";
import "../../../src/App.css";

const UsersCardComp = ({ user }) => {
  return (
    <div className="flex items-center py-4 justify-between border-t border-[#717171] border-solid hover:bg-backgroundRed hover:text-white hover:border-none text-[#FEFDFD] text-sm">
      {/* Start of List of Users Card */}
      <div>
        <p>{user?.name}</p>
      </div>
      <div>
        <p>{user?.loc}</p>
      </div>
      <div>
        <p className="">{user?.stat}</p>
      </div>
      <p className="mr-4">
        <svg
          style={{ width: "1.5rem", height: "1.5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </p>
      {/* End of List of Users Card */}
    </div>
  );
};

export default UsersCardComp;
