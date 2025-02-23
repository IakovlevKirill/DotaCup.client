import {TeamMember} from "./TeamMember.tsx";
import {TeamMemberType} from "../../../type.ts";

interface TeamItemProps {
    teamName: string;
    teamMembers: TeamMemberType[];

}

export const TeamItem = ( props: TeamItemProps) => {
    return (
        <div className="flex flex-col w- rounded-[12px] px-[36px] py-[19px] border-[1px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-[#2B2B2B]!">
            <h2 className="text-[32px] text-[#FFFFFF] opacity-57 font-[Montserrat-semibold]">{props.teamName}</h2>
            <div className="mt-[30px] flex flex-row gap-[20px]">
                {props.teamMembers.map((member, index) => (
                    <TeamMember
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