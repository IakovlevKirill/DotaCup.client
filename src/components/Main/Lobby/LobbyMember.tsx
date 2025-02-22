
interface LobbyMemberProps {
    name: string
    mmr: number
    avatar_url?: string
    positions: string
}

export const LobbyMember = ( props: LobbyMemberProps) => {

    console.log(props.positions)

    const isCarry : boolean = props.positions.includes("1")
    const isMidlaner : boolean = props.positions.includes("2")
    const isHardlaner : boolean = props.positions.includes("3")
    const isSoftSupport : boolean = props.positions.includes("4")
    const isHardSupport : boolean = props.positions.includes("5")

    return (
        <div className="flex flex-row pt-[5px] pb-[5px] rounded-[18px] items-end justify-between">
            <div className="w-[60%] flex items-end">
                <span
                    className="flex text-[16px] text-[#FFFFFF] font-[Montserrat-semibold] mt-[12px] cursor-pointer  hover:underline">{props.name}</span>
            </div>
            <div className="flex flex-row items-end justify-between w-[40%]">
                <span
                    className="text-[14px] text-[#FFFFFF] opacity-47 font-[Montserrat-semibold] mt-[0px]">{props.mmr}</span>
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
            </div>

        </div>
    );
};
