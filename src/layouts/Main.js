import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import SideNav from '../components/Navbar/SideNav';

const Main = () => {
    return ( 
        <div className="flex h-[100vh]">
            {/* start desktop sidenav */}
            <SideNav />
            {/* end desktop sidenav */}

            {/* start header and page route content */}
            <div className="ml-[15rem] w-full bg-backgroundGrey">
                {/* start header */}
                <Header />
                {/* end header */}

                {/* start page route content */}
                <div className="bg-backgroundGrey px-6">
                    <Outlet />
                </div>
                {/* end page route content */}
            </div>
            {/* end header and page route content */}
        </div>
    );
}
 
export default Main;