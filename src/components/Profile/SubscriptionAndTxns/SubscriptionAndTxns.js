import React from "react";
import Subscription from "./Subscription";
import Transactions from "./Transactions";

const SubscriptionAndTxns = () => {
  return (
    <section className=" w-full mb-10">
      <div className=" bg-backgroundDark rounded-xl p-3 md:p-5 border border-[#5F5E5E] space-y-5">
        <Subscription />
        <Transactions />
      </div>
    </section>
  );
};

export default SubscriptionAndTxns;
