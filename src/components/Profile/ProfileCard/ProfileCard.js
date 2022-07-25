import React, { useState } from "react";
import Loader from "../../Auth/Loader/Loader";

const ProfileCard = () => {
  const [loader, setLoader] = useState(false);

  return (
    <section className="h-fit flex flex-col p-3 md:p-5 lg:p-0 lg:flex-row space-y-5 lg:space-x-5 w-full mb-5 bg-backgroundDark border border-[#5F5E5E]  rounded-xl">
      <div className="h-full flex lg:flex-col w-full lg:w-[24rem] lg:px-5 lg:py-5 rounded-t-xl lg:rounded-l-xl bg-backgroundDark justify-between lg:justify-center items-start space-x-3 lg:space-x-0 space-y-1 lg:space-y-4">
        <article
          className={` w-[50px] h-[50px] min-h-[50px] min-w-[50px] md:w-[80px] md:h-[80px] md:min-w-[80px] md:min-h-[80px]
              rounded-full bg-backgroundDark flex items-center justify-center transition-all duration-500`}
        >
          <img
            src={`https://res.cloudinary.com/zichygraphs/image/upload/v1648953021/1_ljgwqe.png`}
            alt=""
            className="rounded-full object-cover w-[50px] h-[50px] md:w-[80px] md:h-[80px] "
          />
        </article>
        <article className="space-y-1">
          <p className="font-bold text-sm md:text-base text-textGreyLighter uppercase tracking-widest">
            LNG borny oil and gas
          </p>
          <p className="text-[green] text-xs md:text-sm font-semibold">
            23664899
          </p>
        </article>
        {/* Edit button starts */}
        <article className="flex items-center">
          <button
            type="submit"
            className={`flex uppercase text-sm md:text-base justify-center items-center px-4 h-10 md:h-12 w-20 md:w-32 lg:grow font-bold text-white rounded-md bg-backgroundRed hover:brightness-90 tracking-widest font-poppins`}
          >
            {loader ? <Loader /> : "Edit"}
          </button>
        </article>
        {/* Edit button ends */}
      </div>
      <div className=" w-full grid rounded-b-xl lg:rounded-r-xl bg-backgroundDark lg:py-5 lg:px-7 grid-cols-2 gap-x-4 gap-y-5 lg:gap-y-0">
        <article className="space-y-1 mb-5">
          <p className="text-textGreyLighter font-bold text-sm md:text-base uppercase tracking-widest">
            E-mail
          </p>
          <p
            className={`text-[green] text-xs md:text-sm font-semibold capitalize`}
          >
            kjsss@gmail.com
          </p>
        </article>
        <article className="space-y-1 mb-5 text-right lg:text-left">
          <p className="text-textGreyLighter font-bold text-sm md:text-base uppercase tracking-widest">
            Software Version
          </p>
          <p
            className={`text-[green] text-xs md:text-sm font-semibold capitalize`}
          >
            1.3.6
          </p>
        </article>
        <article className="space-y-1">
          <p className="text-textGreyLighter font-bold text-sm md:text-base uppercase tracking-widest">
            Password
          </p>
          <p
            className={`text-[green] text-xs md:text-sm font-semibold capitalize`}
          >
            *********
          </p>
        </article>
        <article className="space-y-1 text-right lg:text-left">
          <p className="text-textGreyLighter font-bold text-sm md:text-base uppercase tracking-widest">
            Last Login
          </p>
          <p
            className={`text-[green] text-xs md:text-sm font-semibold capitalize`}
          >
            17/45/47
          </p>
        </article>
      </div>
    </section>
  );
};

export default ProfileCard;
