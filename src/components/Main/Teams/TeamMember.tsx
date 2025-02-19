
interface TeamMemberProps {
    name: string
    mmr: number
    avatar_url?: string
}

export const TeamMember = ( props: TeamMemberProps) => {
    return (
        <div className="cursor-pointer  flex flex-col pt-[10px] pb-[14px] rounded-[18px] px-[10px] items-center justify-center
            hover:bg-[#6b1a1b]
        ">
            <img src="../src/assets/images/pudge_90.png" className="cursor-pointer w-[90px] h-[90px]"></img>
            <span className="text-[16px] text-[#FFFFFF] font-[Montserrat-semibold] mt-[12px]">{props.name}</span>
            <span className="text-[14px] text-[#FFFFFF] opacity-47 font-[Montserrat-semibold] mt-[0px]">{props.mmr}</span>
            <div className="flex mt-[12px] gap-[10px] flex-row">
                <img src="../src/assets/images/carry_icon.png" alt=""/>
                <img src="../src/assets/images/mid_icon.png" alt=""/>
            </div>
        </div>
    );
};
