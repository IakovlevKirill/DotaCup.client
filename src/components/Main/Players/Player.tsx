import {Link} from "react-router-dom";

interface PlayerProps {
    id: number
    ladderPosition: number
    name: string
    mmr: number
    className?: string
}

export const Player = (props : PlayerProps) => {
    return (
        <>
            <div
                className={`h-[40px] text-[20px] font-[Montserrat-reg] justify-center text-white flex items-center ${props.className}`}
            >
                <span className="h-full border-[1px] border-[#434343] flex w-[20%] items-center justify-center">{props.ladderPosition}</span>
                <div className="h-full w-[5%] border-[1px] border-r-0 border-[#434343]"></div>
                <Link to={`/main/profile/${props.name}`} className="h-full flex w-[60%] items-center border-l-0 cursor-pointer border-[1px] border-[#434343] hover:underline">
                        {props.name}
                </Link>
                <span
                    className="h-full flex w-[15%] items-center border-[1px] border-[#434343] justify-center">{props.mmr}</span>
            </div>
        </>
    );
};