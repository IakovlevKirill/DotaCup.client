import { Outlet } from 'react-router-dom';
import {MainNav} from "./MainNav.tsx";

export const Main = () => {

    return (
        <div className="w-[100vw] h-[100vh] bg-[#1D1D1D] flex flex-col">
            <MainNav></MainNav>
            <Outlet />
        </div>
    );
};
