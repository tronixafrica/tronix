import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../../state/contexts/HeaderContext";

const SideNav = () => {
    const { dipsatchPageTitle } = useContext(HeaderContext)
    // instance of Navigate hook
    const navigate = useNavigate()

    // routing to other routes
    const handleRoute = (route, action, title) => {
        // routing to the desired route
        navigate(route)

        // dispatching the title of the header,
        // depending on the route
        dipsatchPageTitle({
            type: action,
            pageTitle: title
        })
    }

    return ( 
        <div className="fixed w-[15rem] h-[100vh] shadow-md bg-backgroundDark px-1 py-6 sm:flex flex-col justify-between hidden">
            {/* start tronix logo */}
            <ul className="px-6">
                <li><img src="/logo/TronixLogo.png" alt="tronix logo" className="w-[7rem]"/></li>
            </ul>
            {/* end tronix logo */}

            {/* start first list section of the route links */}
            <ul className="relative font-poppins -mt-[3rem]">
                {/* start dashboard */}
                <li className="relative cursor-pointer" onClick={() => handleRoute('/dashboard', 'DISPLAY_DASHBOARD', 'Welcome Onboard')}>
                    <span className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" data-mdb-ripple-color="dark">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path></svg>
                        <span>Dashboard</span>
                    </span>
                </li>
                {/* end dashboard */}

                {/* start spaces */}
                <li className="relative cursor-pointer" >
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" href="#!" data-mdb-ripple-color="dark">
                        <svg 
                        style={{
                            fill: '#C2C2C2',
                            marginRight: '0.75rem'
                        }}
                        width="14" 
                        height="14" 
                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4444 11.5556L8.88889 8V5.17333C9.92 4.8 10.6667 3.82222 10.6667 2.66667C10.6667 1.19111 9.47556 0 8 0C6.52444 0 5.33333 1.19111 5.33333 2.66667C5.33333 3.82222 6.08 4.8 7.11111 5.17333V8L3.55556 11.5556H0V16H4.44444V13.2889L8 9.55556L11.5556 13.2889V16H16V11.5556H12.4444Z"/>
                        </svg>

                        <span>Spaces</span>
                    </a>
                </li>
                {/* end spaces */}

                {/* start reports */}          
                <li className="relative cursor-pointer" onClick={() => handleRoute('/reports', 'DISPLAY_REPORTS', 'Generate Reports')}>
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" href="#!" data-mdb-ripple-color="dark">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
                        <span>Reports</span>
                    </a>
                </li>
                {/* end reports */}

                {/* start devices */}
                <li className="relative cursor-pointer" onClick={() => handleRoute('/devices', 'DISPLAY_DEVICES', 'Devices')}>
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" href="#!" data-mdb-ripple-color="dark">
                       <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        <span>Devices</span>
                    </a>
                </li>
                {/* end devices */}

                {/* start users */}
                <li className="relative cursor-pointer">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" href="#!" data-mdb-ripple-color="dark">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                        <span>Users</span>
                    </a>
                </li>
                {/* end users */}

                {/* start device groups */}
                <li className="relative cursor-pointer">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" href="#!" data-mdb-ripple-color="dark">
                        <svg 
                        width="16px" 
                        height="16px" 
                        style={{
                            fill: '#C2C2C2',
                            marginRight: '0.75rem'
                        }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M19 6h-8a1 1 0 0 0-1 1v13H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3zm-6 2h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                            </g>
                        </svg>
                        <span>Device Groups</span>
                    </a>
                </li>
                {/* end device groups */}
            </ul>
            {/* end first list section of the route links */}

            {/* start first list section of the route links */}
            <ul className="relative font-poppins">
                {/* start settings */}
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" href="#!" data-mdb-ripple-color="dark">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                        <span>Settings</span>
                    </a>
                </li>
                {/* end settings */}

                {/* start help */}
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-textGrey text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-backgroundDarkRed transition duration-300 ease-in-out" href="#!" data-mdb-ripple-color="dark">
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                        <span>Help</span>
                    </a>
                </li>
                {/* end help */}

                
            </ul>
            {/* end first list section of the route links */}

        </div>
    );
}
 
export default SideNav;