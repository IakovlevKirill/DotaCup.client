import {useParams} from "react-router-dom";


export const ProfilePage = () => {

    const { nickname } = useParams();
    const user_elo = 6000
    return (
        <div className="w-[100%] flex flex-row mt-[50px] px-[5%] justify-between">
            <div
                className="w-[49%] bg-[#1B1B1B] flex flex-col h-[700px] border-[1px] border-[#2B2B2B] rounded-[12px] px-[40px] pt-[30px]">
                <div className="flex flex-row">
                    <img className="w-[150px] h-[150px] rounded-[4px] border-none shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                         src="../../../src/assets/images/pudge_square.png" alt=""/>
                    <div className="ml-[27px] flex flex-col">
                        <span className="text-[36px] text-[#FFFFFF] font-[Montserrat-semibold]">{nickname}</span>
                        <span className="text-[20px] text-[#868686] font-[Montserrat-semibold]">{user_elo}</span>

                    </div>
                </div>
                <div className="mt-[27px] flex min-h-[64px] border-[1px] border-[#2B2B2B] bg-[#191919] rounded-[7px]">

                </div>
                <div className="mt-[27px] flex min-h-[235px] border-[1px] border-[#2B2B2B] bg-[#191919] rounded-[7px]">

                </div>
            </div>
            <div className="w-[49%] bg-[#1B1B1B] flex h-[700px] border-[1px] border-[#2B2B2B] rounded-[12px]"></div>
        </div>
    );
};