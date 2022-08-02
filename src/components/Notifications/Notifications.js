import React from "react";

export const Notifications = () => {
  return (
    <div className="flex flex-col sm:h-full">
      {" "}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="w-full border border-solid border-[#454545] flex-1 flex items-center justify-between p-4 rounded-lg px-6 bg-backgroundDark">
          <p className="text-textGreyLighter">60 Notifications</p>
          <svg
            style={{ color: "#686868", width: "1.5rem", height: "1.5rem" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="w-full border border-solid border-[#454545] flex-1 p-4 rounded-lg flex items-center bg-backgroundDark px-6">
          <svg
            style={{ color: "#686868", marginRight: ".7rem" }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="border-none bg-transparent text-textGreyLighter w-full"
          />
          <svg
            style={{ color: "white" }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
      </div>
      <div className="bg-backgroundDark h-full w-full p-[1rem] sm:block sm:h-full border border-[#454545] rounded-lg mt-4">
        <div className="p-2 overflow-auto scroll h-[38rem]">
          <h1 className="text-[160%] font-poppins text-textGreyLighter mb-[20px] ml-[8px]">
            Notifications
          </h1>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((i) => (
            <div className="border-t border-[#555] flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:bg-backgroundRed bg-backgroundDark">
              <div>
                <h1 className="font-poppins text-textGreyLighter flex flex-col text-[100%]">
                  New device added
                </h1>
                <p className="font-poppins text-[#777] text-[70%]">
                  5 mins ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
