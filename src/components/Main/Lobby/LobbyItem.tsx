import {TeamMemberType} from "../../../type.ts";
import {LobbyMember} from "./LobbyMember.tsx";

interface LobbyItemProps {
    captain: string
    lobbyMembers: TeamMemberType[];

}

export const LobbyItem = ( props: LobbyItemProps) => {
    return (
        <div className="flex min-w-[500px]  flex-col rounded-[12px] px-[36px] py-[19px] border-[1px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-[#2B2B2B]!">
            <div className="w-[100%] justify-center flex flex-row text-center gap-[12px]">
                <h2 className="text-[32px] text-[#9D9D9D] font-[Montserrat-semibold]">  <span className="text-[32px] text-[#EF2323] opacity-100 font-[Montserrat-semibold]">{props.captain}</span> team
                </h2>
            </div>
            <div className="mt-[30px] flex flex-col gap-[5px]">
                {props.lobbyMembers.map((member, index) => (
                    <LobbyMember
                        key={index}
                        mmr={member.mmr}
                        name={member.name}
                        positions={member.positions}
                        avatar_url={member.avatar_url} // Если есть
                    />
                ))}
            </div>
        </div>
    );
};