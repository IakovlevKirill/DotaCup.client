import {TeamItem} from "./TeamItem.tsx";

export const TeamsPage = () => {
    return (
        <div className="px-[5%] mt-[30px] flex flex-col">
            <h1 className="mb-[35px] text-white font-[Montserrat-semibold] text-[48px]">Команды</h1>
            <div className="flex flex-row flex-wrap gap-[64px] justify-between">
                <TeamItem teamName={"Team1"}></TeamItem>
                <TeamItem teamName={"Team2"}></TeamItem>
                <TeamItem teamName={"Team3"}></TeamItem>
                <TeamItem teamName={"Team4"}></TeamItem>
            </div>
        </div>
    );
};
