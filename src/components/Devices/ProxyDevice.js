import React from "react";
import SwitchProxy from "./Switch/SwitchProxy";

const ProxyDevice = () => {
  return (
    <>
      {/* Start of Proxy Device */}
      <ul
        className="nav nav-tabs flex sm:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-home"
            className="
      w-28
      block
      font-medium
      text-white
      text-sm
      leading-tight
      border border-[#686868]
      transition
      ease-in-out
      bg-backgroundDark
      hover:bg-backgroundRed
      focus:bg-backgroundRed
      rounded-tl-md
      rounded-bl-md
      font-poppins
      text-center
      p-2
      my-2
      active
    "
            id="tabs-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            Switch
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#tabs-profile"
            className="
      w-28
      block
      font-medium
      text-sm
      text-white
      leading-tight
      border border-[#686868]
      transition
      ease-in-out
      bg-backgroundDark
      hover:bg-backgroundRed
      focus:bg-backgroundRed
      rounded-tr-md
      font-poppins
      rounded-br-md
      text-center
      p-2
      my-2
    "
            id="tabs-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            Wifi
          </a>
        </li>
      </ul>

      <div className="tab-content" id="tabs-tabContent">
        <div
          className="tab-pane fade show active"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
        >
          {/* Switch Tab */}
          <SwitchProxy />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-profile"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab"
        >
          {/* Wifi Tab */}

          <SwitchProxy />
        </div>
      </div>
      {/* End of Single Device */}
    </>
  );
};

export default ProxyDevice;
