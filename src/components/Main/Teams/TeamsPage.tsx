import {TeamItem} from "./TeamItem.tsx";

export const TeamsPage = () => {
    return (
        <div className="px-[5%] mt-[30px] flex flex-col">
            <h1 className="mb-[35px] text-white font-[Montserrat-semibold] text-[48px]">Команды</h1>
            <div className="flex flex-row flex-wrap gap-[64px] justify-between">
                <TeamItem
                    teamName={"Team1"}
                    teamMembers={[
                        { name: "Kiruhahahh", mmr: 6000, positions: '1' },
                        { name: "Mac", mmr: 6000, positions: '2' },
                        { name: "www", mmr: 2400, positions: '3' },
                        { name: "somebodysreams", mmr: 1500, positions: '4' },
                        { name: "n00necaresxxx", mmr: 5200, positions: '5' },
                    ]}
                ></TeamItem>

            </div>
        </div>
    );
};
