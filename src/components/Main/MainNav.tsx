import {Link, useLocation} from "react-router-dom";
import pudge_avatar from '../../../src/assets/images/pudge_avatar.png';

export const MainNav = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const user_nickname = 'kiruhahaha'
    const user_elo = 5400
    const isUserHasTeam = true
    const user_team = "[" + "НЕГРЫ" + "]"

    return(
        <div className="bg-[#191919] overflow-hidden max-w-[100vw] min-w-[100vw] min-h-[7%] flex items-center">
            <div className="ml-[3%] h-[100%] w-[37%] flex items-center  flex-row justify-between">
                <Link
                    className="flex flex-col items-center justify-center text-[15px] text-white! font-[Montserrat-semibold]" to="tournaments">Турниры
                        <div className={`ml-[2%] w-[98%] h-[2px]
                        ${(pathname.includes('tournaments')) ? 
                        'bg-[#FF171B]' :
                        'bg-[#191919]'
                        }
                        `}></div>
                </Link>
                <Link className="flex flex-col items-center justify-center text-[15px] text-white! font-[Montserrat-semibold]" to="teams">Команды
                    <div className={`ml-[2%] w-[98%] h-[2px]
                        ${(pathname.includes('teams')) ?
                        'bg-[#FF171B]' :
                        'bg-[#191919]'
                    }
                        `}></div>
                </Link>
                <Link className="flex flex-col items-center justify-center text-[15px] text-white! font-[Montserrat-semibold]" to="players">Игроки
                    <div className={`ml-[2%] w-[98%] h-[2px]
                        ${(pathname.includes('players')) ?
                        'bg-[#FF171B]' :
                        'bg-[#191919]'
                    }
                        `}></div>
                </Link>
                <Link className="flex flex-col items-center justify-center text-[15px] text-white! font-[Montserrat-semibold]" to="vod-streams">VOD/Stream
                    <div className={`ml-[2%] w-[98%] h-[2px]
                        ${(pathname.includes('vod-streams')) ?
                        'bg-[#FF171B]' :
                        'bg-[#191919]'
                    }
                        `}></div>
                </Link>
            </div>
            <div className="w-[37%]"></div>
            <div className="w-[20%] mr-[3%] flex items-center justify-center flex-row gap-[15px]">
                <div className="flex flex-col items-end">
                    <div className="flex flex-row gap-[6px]">
                        {(isUserHasTeam) && ( ///TODO если команды все таки оставим, добавить линк на тиму
                            <span className="text-[#FFBB00] font-[Montserrat-semibold]">{user_team}</span>
                        )}
                        <Link className="text-white hover:underline font-[Montserrat-semibold]"to={`profile/${user_nickname}`}>{user_nickname}</Link>
                    </div>
                    <span className="text-[#7C7C7C] font-[Montserrat-semibold]">{user_elo}</span>
                </div>
                <Link to={`profile/${user_nickname}`}>
                    <img src={pudge_avatar} className="cursor-pointer w-[40px] h-[40px]"></img>
                </Link>

            </div>
        </div>
    )
}