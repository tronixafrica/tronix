import { useContext, useEffect, useState } from "react";
import { DisplaySidebarContext } from "../../state/contexts/DisplaySidebarContext";
import { HeaderContext } from "../../state/contexts/HeaderContext";

const Header = () => {
    // Header context state for the header
    const { pageTitle } = useContext(HeaderContext)
    // dashboard page title state
    const [ dashboardPageTitle, setdashboardPageTitle ] = useState(true)

    const { toggleSideNav } = useContext(DisplaySidebarContext)
 
    // observe the pageTitle state for the dashboard
    useEffect(() => {
        if(pageTitle === 'Welcome Onboard') {
            setdashboardPageTitle(true)
        } else {
            setdashboardPageTitle(false)
        }
    },[pageTitle])


    // toggle sidebar
    // const toggleSidebar = () => {
    //     console.log('open the sidebar')
    // }

    return ( 
            <div className={`sticky top-0 px-6 py-[2rem] h-[9rem] sm:h-[8rem] bg-backgroundGrey flex sm:flex-row flex-col-reverse justify-between sm:items-center transition-all`}>
            {/* start page title */}
            <div className="pt-[1rem] sm:pt-0 ">
                <div className='text-white font-poppins pb-3 text-[17px] sm:text-[23px]'>{pageTitle} { dashboardPageTitle ? 'Precious' : null }</div>
                
                { 
                dashboardPageTitle && <div className="hidden sm:block text-textGreyLighter pr-[4rem] sm:pr-0 font-raleway font-[400] text-sm">Monitor your devices and Air quality levels with one device.</div>
                }
            </div>
            {/* end page title */}

            {/* start hamburger menu, profile image and notification */}
            <div className="flex sm:block items-center justify-between w-full sm:w-auto">
                {/* start hamburger menu */}
                <div className="flex sm:hidden" onClick={() => toggleSideNav()}>
                    <svg className="w-6 h-6 text-[#FFFFFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </div>
                {/* end hamburger menu */}

                {/* start notification icon and profile image */}
                <div className="flex items-center">
                    {/* start notificaton icon */}
                    <div className="mr-6 inline-flex items-center">
                        <span className="relative inline-block">
                            <svg className="sm:w-6 sm:h-6 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center sm:px-2 sm:py-1 px-[0.3rem] py-1 sm:text-xs text-[0.50rem] font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">99</span>
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
                {/* end notification icon and profile image */}

            </div>
            {/* end hamburger menu, profile image and notification */}

            
        </div>
    );
}
 
export default Header;