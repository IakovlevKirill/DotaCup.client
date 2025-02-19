import {TeamMember} from "./TeamMember.tsx";

interface TeamItemProps {
    teamName: string;
}

export const TeamItem = ( props: TeamItemProps) => {
    return (
        <div className="flex flex-col w- rounded-[12px] px-[36px] py-[19px] border-[1px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-[#2B2B2B]!">
            <h2 className="text-[32px] text-[#FFFFFF] opacity-57 font-[Montserrat-semibold]">{props.teamName}</h2>
            <div className="mt-[30px] flex flex-row gap-[30px]">
                <TeamMember mmr={2000} name={"Player1"}></TeamMember>
                <TeamMember mmr={2000} name={"Player2"}></TeamMember>
                <TeamMember mmr={2000} name={"Player3"}></TeamMember>
                <TeamMember mmr={2000} name={"Player4"}></TeamMember>
                <TeamMember mmr={2000} name={"Player5"}></TeamMember>
            </div>
        </div>
    );
};