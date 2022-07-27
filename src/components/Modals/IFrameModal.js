import { useRef } from "react";

const IFrameModals = () => {
    const iFrameRef = useRef(null)

    return ( 
        <div className="w-full h-screen bg-[#0000008f] shadow-sm text-textGrey fixed inset-0 z-[300000] flex items-center justify-center">
            <div className="bg-transparent">
                <iframe 
                ref={iFrameRef}
                // src="http://127.0.0.1:5500/index.html" 
                src={"/add_device"}
                width='1000'
                height='600'
                frameborder="0"></iframe>
                
            </div>
        </div>
    );
}
 
export default IFrameModals;