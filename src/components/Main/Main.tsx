import {Link} from "react-router-dom";
import { Outlet, useLocation } from 'react-router-dom';

export const Main = () => {

    const location = useLocation();
    const pathname = location.pathname;


    const NavBar = () => {
        return(
            <div className="bg-[#191919] w-[100vw] min-h-[7%] flex items-center">
                <div className="ml-[3%] h-[100%] w-[37%] flex items-center  flex-row justify-between">
                    <Link
                        className={`text-[15px] text-white! font-[Montserrat-semibold]`}
                        to="tournaments">
                        Турниры
                        {(pathname.includes('tournaments')) && (
                            <div className="absolute w-[72px] h-[2px] bg-[#FF171B]"></div>
                        )}
                    </Link>
                    <Link className="text-[15px] text-white! font-[Montserrat-semibold]" to="teams">Команды
                        {(pathname.includes('teams')) && (
                            <div className="absolute w-[72px] h-[2px] bg-[#FF171B]"></div>
                        )}
                    </Link>
                    <Link className="text-[15px] text-white! font-[Montserrat-semibold]" to="players">Игроки
                        {(pathname.includes('players')) && (
                            <div className="absolute w-[72px] h-[2px] bg-[#FF171B]"></div>
                        )}</Link>
                    <Link className="text-[15px] text-white! font-[Montserrat-semibold]" to="vod-streams">VOD/Stream
                        {(pathname.includes('vod-stream')) && (
                            <div className="absolute w-[72px] h-[2px] bg-[#FF171B]"></div>
                        )}</Link>
                </div>
                <div className="w-[37%]"></div>
                <div className="w-[20%] mr-[3%] flex items-center justify-center flex-row gap-[15px]">
                    <div className="flex flex-col items-end">
                        <div className="flex flex-row gap-[6px]">
                            <span className="text-[#FFBB00] font-[Montserrat-semibold]">[НЕГРЫ]</span>
                            <span className="text-white font-[Montserrat-semibold]">Vkid #1337</span>
                        </div>
                        <span className="text-[#7C7C7C] font-[Montserrat-semibold]">1488 elo</span>
                    </div>
                    <img src="../src/assets/images/pudge_avatar.png" className="cursor-pointer w-[40px] h-[40px]"></img>
                </div>
            </div>
        )
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-[#1D1D1D] flex flex-col">
            <NavBar></NavBar>
            <Outlet />
        </div>
    );
};
