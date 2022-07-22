import React, { useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard/ProfileCard";
import SubscriptionAndTxns from "../components/Profile/SubscriptionAndTxns/SubscriptionAndTxns";

const Profile = () => {
  return (
    <div className="font-poppins">
      <ProfileCard />
      <SubscriptionAndTxns />
    </div>
  );
};

export default Profile;
