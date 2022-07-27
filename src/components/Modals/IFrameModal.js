/* eslint-disable jsx-a11y/iframe-has-title */
import { useContext, useEffect, useRef } from "react";
import { AddDeviceContext } from "../../state/contexts/AddDeviceContext";

const IFrameModals = (props) => {
  // const iFrameRef = useRef(null)

  return (
    <>
      {props.display && (
        <div
          className="w-full h-screen bg-[#0000008f] shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center justify-center"
          onClick={props.toggleDevice}
        >
          <div className="bg-transparent">
            <iframe
              // src="http://127.0.0.1:5500/index.html"
              src="/add_device"
              width="1000"
              height="600"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default IFrameModals;
