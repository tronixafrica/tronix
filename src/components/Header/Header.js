import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../../state/contexts/HeaderContext";

const Header = () => {
    // Header context state for the header
    const { pageTitle } = useContext(HeaderContext)
    // dashboard page title state
    const [ dashboardPageTitle, setdashboardPageTitle ] = useState(true)
 
    // observe the pageTitle state for the dashboard
    useEffect(() => {
        if(pageTitle === 'Welcome Onboard') {
            setdashboardPageTitle(true)
        } else {
            setdashboardPageTitle(false)
        }
    },[pageTitle])

    return ( 
        <div className="sticky top-0 px-6 py-6 bg-backgroundGrey flex justify-between items-center">
            {/* start page title */}
            <div className="">
                <div className='text-white font-poppins pb-3 text-[23px]'>{pageTitle} { dashboardPageTitle ? 'Precious' : null }</div>
                { 
                dashboardPageTitle && <div className="text-textGreyLighter font-raleway font-[400]">Monitor your devices and Air quality levels with one device.</div>
                }
            </div>
            {/* end page title */}

            {/* start profile image and notification */}
            <div className="flex items-center">
                {/* start notificaton icon */}
                <div className="mr-6">
                    <span className="relative inline-block">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">99</span>
                    </span>
                </div>
                {/* end notificaton icon */}

                {/* start profile image */}
                <div>
                    <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-full w-[2rem]"
                    alt="Avatar"
                    />
                </div>
                {/* end profile image */}
            </div>
            {/* end profile image and notification */}

            
        </div>
    );
}
 
export default Header;