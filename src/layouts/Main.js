import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import BottomNav from '../components/Navbar/BottomNav';
import SideNav from '../components/Navbar/SideNav';
import '../App.css'
import FloatingIcon from '../components/AddDevicesFloatingIcon/FloatingIcon';
import MobileSideNav from '../components/Navbar/MobileSideNav';

const Main = () => {
    
    return ( 
        <div className="flex h-[100vh] relative">
            {/* start desktop sidenav */}
            <SideNav />
            {/* end desktop sidenav */}

            <MobileSideNav />

            {/* start header and page route content */}
            <div className="sm:ml-[15rem] w-full bg-backgroundGrey relative">
                {/* start header */}
                <Header />
                {/* end header */}

                {/* start page route content */}
                <div className="h-full bg-backgroundGrey px-6">
                    <Outlet />
                </div>
                {/* end page route content */}

                {/* start bottom nav */}
                <BottomNav />
                {/* end bottom nav */}

                {/* start float icon */}
                <FloatingIcon />
                {/* end float icon */}
            </div>
            {/* end header and page route content */}
        </div>
    );
}
 
export default Main;