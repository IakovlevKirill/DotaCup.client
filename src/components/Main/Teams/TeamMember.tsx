
interface TeamMemberProps {
    name: string
    mmr: number
    avatar_url?: string
    positions: string
}

export const TeamMember = ( props: TeamMemberProps) => {

    console.log(props.positions)

    const isCarry : boolean = props.positions.includes("1")
    const isMidlaner : boolean = props.positions.includes("2")
    const isHardlaner : boolean = props.positions.includes("3")
    const isSoftSupport : boolean = props.positions.includes("4")
    const isHardSupport : boolean = props.positions.includes("5")

    return (
        <div className="cursor-pointer  flex flex-col pt-[10px] pb-[14px] rounded-[18px] px-[10px] items-center justify-center
            hover:bg-[#6b1a1b]
        ">
            <img src="../src/assets/images/pudge_90.png" className="cursor-pointer w-[90px] h-[90px] "></img>
            <span className="text-[16px] text-[#FFFFFF] font-[Montserrat-semibold] mt-[12px]">{props.name}</span>
            <span className="text-[14px] text-[#FFFFFF] opacity-47 font-[Montserrat-semibold] mt-[0px]">{props.mmr}</span>
            <div className="flex mt-[12px] gap-[10px] flex-row">


                {(isCarry) && (
                    <img src="../src/assets/images/carry_icon.png" alt=""/>
                )}
                {(isMidlaner) && (
                    <img src="../src/assets/images/mid_icon.png" alt=""/>
                )}

                {isHardlaner ? 'хардер' : ''}
                {isSoftSupport ? 'четверка' : ''}
                {isHardSupport ? 'пятерка' : ''}
            </div>
        </div>
    );
};
