import React from "react";

const Transaactions = () => {
  return (
    <div className=" w-full ">
      <article className="flex justify-between lg:items-center">
        <h2 className="mb-3 text-textGreyLighter capitalize w-full pl-3 text-lg md:text-2xl font-bold font-raleway">
          Transactions History
        </h2>
      </article>
      <div className=" w-full flex overflow-x-auto">
        <table className="w-full text-xs md:text-sm text-left rounded-xl ">
          <thead className="text-base text-textGrey uppercase ">
            <tr className="border-b border-[#5F5E5E]">
              <th
                scope="col"
                className="px-3 md:px-6 font-normal pb-3 text-sm md:text-base whitespace-nowrap  capitalize"
              >
                transaction id
              </th>
              <th
                scope="col"
                className="px-3 md:px-6 font-normal pb-3 text-sm md:text-base whitespace-nowrap capitalize"
              >
                date
              </th>
              <th
                scope="col"
                className="px-3 md:px-6 font-normal pb-3 text-sm md:text-base whitespace-nowrap capitalize"
              >
                payment info
              </th>
              <th
                scope="col"
                className="px-3 md:px-6 font-normal pb-3 text-sm md:text-base whitespace-nowrap capitalize"
              >
                billing code
              </th>
              <th
                scope="col"
                className="px-3 md:px-6 font-normal pb-3 text-sm md:text-base whitespace-nowrap capitalize"
              >
                status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key="j" className=" ">
              <th
                scope="row"
                className="px-3 md:px-6 py-4 font-medium text-textGrey  whitespace-nowrap"
              >
                nn
              </th>
              <td className="px-3 md:px-6 py-4">N kjj</td>
              <td className="px-3 md:px-6 py-4">ik</td>
              <td className="px-3 md:px-6 py-4">N j</td>
              <td className="px-3 md:px-6 py-4 text-[green] font-semibold">
                Paid
              </td>
            </tr>
            <tr key="j" className=" ">
              <th
                scope="row"
                className="px-3 md:px-6 py-4 font-medium text-textGrey  whitespace-nowrap"
              >
                nn
              </th>
              <td className="px-3 md:px-6 py-4">N kjj</td>
              <td className="px-3 md:px-6 py-4">ik</td>
              <td className="px-3 md:px-6 py-4">N j</td>
              <td className="px-3 md:px-6 py-4 text-[green] font-semibold">
                Paid
              </td>
            </tr>
            <tr key="j" className=" ">
              <th
                scope="row"
                className="px-3 md:px-6 py-4 font-medium text-textGrey  whitespace-nowrap"
              >
                nn
              </th>
              <td className="px-3 md:px-6 py-4">N kjj</td>
              <td className="px-3 md:px-6 py-4">ik</td>
              <td className="px-3 md:px-6 py-4">N j</td>
              <td className="px-3 md:px-6 py-4 text-[green] font-semibold">
                Paid
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaactions;
