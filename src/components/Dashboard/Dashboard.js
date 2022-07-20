import RoundWithMinus from "../icons/RoundWithMinus";

const DashboardComponent = () => {
  return (
    <div className="bg-[#464646] p-0 m-0 box-border h-[80%] w-full flex flex-row justify-between">
      <div className="h-full sm:w-[70%] bg-[#464646] w-full">
        <div className="bg-[#464646] flex h-[20%] flex-row justify-between">
          {/*  */}
          {/*  */}
          {/* TOTAL DEVICES CARD */}
          <div className="h-full transition ease-in-out duration-300 hover:bg-[#D20202] bg-[#121212] w-[48%] p-[2rem] cursor-pointer rounded-lg border border-solid border-[#777]">
            <div className="flex flex-row justify-between">
              <h1 className="font-raleway text-base text-[#D4D4D4]">
                TOTAL DEVICES
              </h1>
              {<RoundWithMinus />}
            </div>
            <div className="flex flex-row items-center">
              <h1 className="font-poppins text-[150%] mr-[1rem] text-[#D4D4D4] font-semibold">
                40
              </h1>
              <p className="text-[70%] text-[#D4D4D4]">12 ON</p>
            </div>
          </div>
          {/* END OF TOTAL DEVICES CARD */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/* TOTAL USERS CARD */}
          <div className="h-full transition ease-in-out duration-300 hover:bg-[#D20202] bg-[#121212] w-[48%] p-[2rem] cursor-pointer rounded-lg border border-solid border-[#777]">
            <div className="flex flex-row justify-between">
              <h1 className="font-raleway text-base text-[#D4D4D4]">
                TOTAL USERS
              </h1>
              {<RoundWithMinus />}
            </div>
            <div className="flex flex-row items-center">
              <h1 className="font-poppins text-[150%] mr-[1rem] text-[#D4D4D4] font-semibold">
                30
              </h1>
              <p className="text-[70%] text-[#059D1D]">6 Online</p>
            </div>
          </div>
          {/* END OF TOTAL USERS CARD */}
          {/*  */}
          {/*  */}
        </div>
        {/*  */}
        {/*  */}
        {/* DEVICES DIV BELOW */}
        <div className="bg-[#121212] h-[30rem] mt-[4%] p-[1rem] border border-[#777] rounded-lg overflow-auto scroll">
          <h1 className="text-[180%] font-poppins text-[#D4D4D4] mb-[20px] ml-[8px]">
            Devices
          </h1>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((i) => (
            <div className="border-t border-[#555] flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:bg-[#D20202] bg-[#121212]">
              <div>
                <h1 className="font-poppins text-[#D4D4D4] flex flex-col text-[100%]">
                  Razor drill
                </h1>
                <p className="font-poppins text-[#777] text-[70%]">
                  Office Lounge
                </p>
              </div>
              <div>
                <h1 className="font-poppins text-[#059D1D] text-[100%]">ON</h1>
              </div>
            </div>
          ))}
        </div>
        {/* END OF DEVICES DIV */}
        {/*  */}
        {/*  */}
      </div>
      {/*  */}
      {/*  */}
      {/* NOTIFICATIONS DIV BELOW */}
      <div className="bg-[#121212] h-[40rem] w-[28%] p-[1rem] border border-[#777] rounded-lg overflow-auto scroll sm:block hidden">
        <h1 className="text-[180%] font-poppins text-[#D4D4D4] mb-[20px] ml-[8px]">
          Notifications
        </h1>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => (
          <div className="border-t border-[#555] flex items-center justify-between p-[10px] transition ease-in-out duration-300 hover:bg-[#D20202] bg-[#121212]">
            <div>
              <h1 className="font-poppins text-[#D4D4D4] flex flex-col text-[100%]">
                New device added
              </h1>
              <p className="font-poppins text-[#777] text-[70%]">5 mins ago</p>
            </div>
          </div>
        ))}
      </div>
      {/* END OF NOTIFICATIONS DIV */}
      {/*  */}
    </div>
  );
};

export default DashboardComponent;
