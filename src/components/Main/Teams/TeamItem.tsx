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
            <div className="mt-[30px] flex flex-row gap-[30px]">
                <TeamMember mmr={3700} name={"Player1"} positions={'1'}></TeamMember>
                <TeamMember mmr={6000} name={"Player2"} positions={'2'}></TeamMember>
                <TeamMember mmr={2400} name={"Player3"} positions={'3'}></TeamMember>
                <TeamMember mmr={1500} name={"Player4"} positions={'4'}></TeamMember>
                <TeamMember mmr={5200} name={"Player5"} positions={'5'}></TeamMember>
            </div>
        </div>
    );
};