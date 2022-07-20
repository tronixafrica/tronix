import React, { useState, useRef } from "react";
import EmailImage from "../../src/components/Auth/EmailImage/EmailImage";
import Loader from "../components/Auth/Loader/Loader";
import AddDeviceModal from "../components/Modals/AddDeviceModal";
import AddUserModal from "../components/Modals/AddUserModal";
import AlertModal from "../components/Modals/AlertModal";
import ConfirmationModal from "../components/Modals/ConfirmationModal";
import FilterUsersModal from "../components/Modals/FilterUsersModal";

const VerifyEmail = () => {
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const fifthInput = useRef(null);
  const sixthInput = useRef(null);

  const [loader, setLoader] = useState(false);

  return (
    <>
      <section className="bg-backgroundDark overflow-y-auto flex h-screen w-full text-textAuthGrey font-raleway items-center justify-center py-7">
        <div className="flex flex-col items-center space-y-7 w-[450px]  rounded-md  px-5 scrollbar-hide">
          {/*Start of Header */}
          <h2 className="text-2xl font-bold text-center font-raleway">
            Verify Your Email Address
          </h2>
          {/* End of header */}
          {/* Email image starts */}
          <div>
            <EmailImage />
          </div>
          {/* Email image ends */}
          {/* Verification message */}
          <div>
            <p className="text-center text-textGrey">
              We have sent a verification email to tronic123@gmail.com Follow
              the link to verify your email adress.
            </p>
          </div>
          {/* Verification message ends */}
        </div>
      </section>

      {/* Confirmation modal starts */}
      <FilterUsersModal display={false} />
      {/* Confirmation modal ends */}
    </>
  );
};

export default VerifyEmail;
