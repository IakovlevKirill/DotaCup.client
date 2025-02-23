import {Player} from "./Player.tsx";

export const PlayersPage = () => {

    const players = [
        { id: 1, name: "zhopa", mmr: 2987 },
        { id: 2, name: "Петр Петров", mmr: 2954 },
        { id: 3, name: "Сергей Сергеев", mmr: 2901 },
        { id: 4, name: "Алексей Алексеев", mmr: 2856 },
        { id: 5, name: "Дмитрий Дмитриев", mmr: 2803 },
        { id: 6, name: "Андрей Андреев", mmr: 2750 },
        { id: 7, name: "Николай Николаев", mmr: 2702 },
        { id: 8, name: "Владимир Владимиров", mmr: 2654 },
        { id: 9, name: "Александр Александров", mmr: 2601 },
        { id: 10, name: "Михаил Михайлов", mmr: 2550 },
        { id: 11, name: "Егор Егоров", mmr: 2500 },
        { id: 12, name: "Артем Артемов", mmr: 2450 },
        { id: 13, name: "Виктор Викторов", mmr: 2400 },
        { id: 14, name: "Олег Олегов", mmr: 2350 },
        { id: 15, name: "Юрий Юрьев", mmr: 2300 },
        { id: 16, name: "Константин Константинов", mmr: 2250 },
        { id: 17, name: "Игорь Игорев", mmr: 2200 },
        { id: 18, name: "Павел Павлов", mmr: 2150 },
        { id: 19, name: "Роман Романов", mmr: 2100 },
        { id: 21, name: "chlen", mmr: 3050 },
        { id: 22, name: "hui", mmr: 4050 },
        { id: 23, name: "pipiska", mmr: 5050 },
        { id: 24, name: "gavno", mmr: 6050 },
        { id: 25, name: "ass", mmr: 7050 },
        { id: 26, name: "yaica", mmr: 8050 },
        { id: 27, name: "minet", mmr: 9050 },
        { id: 28, name: "pisun", mmr: 10050 },
        { id: 29, name: "kakashka", mmr: 11050 },
    ];
    const sortedPlayers = players.sort((b, a) => a.mmr - b.mmr);
    console.log(sortedPlayers)
    return (
        <div className="max-w-[100%] overflow-x-hidden flex scrollbar-custom-players flex-col items-center py-[80px]">
            <div className="flex flex-col shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[600px]">
                {sortedPlayers.map((player, index) => (
                    <Player
                        key={index}
                        id={player.id}
                        name={player.name}
                        mmr={player.mmr}
                        ladderPosition={index+1}
                        className={index % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#202020]'} // Чередуем классы
                    ></Player>
                ))}
            </div>
        </div>
    );
};
