import {TournamentItem} from "./TournamentItem.tsx";

export const TournamentPage = () => {
    return (
        <div>
            <div className="px-[5%] mt-[30px] flex flex-col">
                <h1 className="text-white font-[Montserrat-semibold] text-[48px]">Турниры</h1>
                <div className="flex flex-row gap-[120px]">
                    <TournamentItem></TournamentItem>
                    <TournamentItem></TournamentItem>
                    <TournamentItem></TournamentItem>
                    <TournamentItem></TournamentItem>
                </div>
            </div>
        </div>
    );
};
