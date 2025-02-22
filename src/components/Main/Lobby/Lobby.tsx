import {LobbyItem} from "./LobbyItem.tsx";

export const Lobby = () => {
    return (
        <div className="px-[2%] mt-[30px] flex flex-col">
            <h1 className="mb-[35px] text-white text-center font-[Montserrat-semibold] text-[48px]">Lobby</h1>
            <div className="flex flex-row flex-wrap gap-[64px] justify-between items-center">
                {/*
                {teamData.map((team, index) => (
                    <TeamItem
                        key={index}
                        teamName={team.teamName}
                        teamMembers={}
                    />
                ))}
                */}
                <LobbyItem
                    lobbyMembers={[
                        {name: "somebodysream", mmr: 6300, positions: '1'},
                        {name: "kiruhahaha", mmr: 6000, positions: '2'},
                        {name: "Mac", mmr: 4900, positions: '3'},
                        {name: "Candibober", mmr: 2800, positions: '4'},
                        {name: "feel my pain", mmr: 5200, positions: '5'},
                    ]}
                 captain={'somebodysream'}></LobbyItem>
                <div className="w-[300px] h-[200px] border-[#2B2B2B]! rounded-[12px] border-[1px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">

                </div>
                <LobbyItem
                    lobbyMembers={[
                        {name: "n00necaresxxx", mmr: 9500, positions: '1'},
                        {name: "www", mmr: 6400, positions: '2'},
                        {name: "17%", mmr: 5200, positions: '3'},
                        {name: "tough guy", mmr: 2500, positions: '4'},
                        {name: "вротберунчик", mmr: 2900, positions: '5'},

                    ]}
                    captain={'n00necaresxxx'}
                ></LobbyItem>
            </div>
        </div>
    );
};

export default Lobby;