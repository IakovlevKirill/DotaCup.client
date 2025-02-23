import {Link} from "react-router-dom";

interface TeamMemberProps {
    name: string
    mmr: number
    avatar_url?: string
    positions: string
}

export const TeamMember = ( props: TeamMemberProps) => {

    const isCarry : boolean = props.positions.includes("1")
    const isMidlaner : boolean = props.positions.includes("2")
    const isHardlaner : boolean = props.positions.includes("3")
    const isSoftSupport : boolean = props.positions.includes("4")
    const isHardSupport : boolean = props.positions.includes("5")

    return (
        <Link
            to={`/main/profile/${props.name}`}
            className="cursor-pointer  flex flex-col pt-[10px] pb-[14px] rounded-[18px] px-[10px] items-center justify-center
            hover:bg-[#6b1a1b]
        ">
            <img src="../src/assets/images/pudge_90.png" className="cursor-pointer w-[90px] h-[90px] "></img>
            <span className="text-[16px] text-[#FFFFFF] font-[Montserrat-semibold] mt-[12px]">{props.name}</span>
            <span className="text-[14px] text-[#FFFFFF] opacity-47 font-[Montserrat-semibold] mt-[0px]">{props.mmr}</span>
            <div className="flex mt-[12px] gap-[10px] flex-row">
                {(isCarry) && (
                    <img src="../../../../src/assets/images/carry_icon.png" alt="1"/>

                )}
                {(isMidlaner) && (
                    <img src="../../../../src/assets/images/mid_icon.png" alt="2"/>
                )}
                {(isHardlaner) && (
                    <img className="w-[16px]" src="../../../../src/assets/images/hardlane_icon.png" alt="3"/>
                )}
                {(isSoftSupport) && (
                    <img src="../../../../src/assets/images/soft_support_icon.png" alt="4"/>
                )}
                {(isHardSupport) && (
                    <img src="../../../../src/assets/images/hard_support_icon.png" alt="5"/>
                )}
            </div>
        </Link>
    );
};
