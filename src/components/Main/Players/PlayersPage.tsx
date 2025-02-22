import {Player} from "./Player.tsx";

export const PlayersPage = () => {

    const players = [
        { id: 1, ladderPosition: 1, name: "Иван Иванов", mmr: 2987 },
        { id: 2, ladderPosition: 2, name: "Петр Петров", mmr: 2954 },
        { id: 3, ladderPosition: 3, name: "Сергей Сергеев", mmr: 2901 },
        { id: 4, ladderPosition: 4, name: "Алексей Алексеев", mmr: 2856 },
        { id: 5, ladderPosition: 5, name: "Дмитрий Дмитриев", mmr: 2803 },
        { id: 6, ladderPosition: 6, name: "Андрей Андреев", mmr: 2750 },
        { id: 7, ladderPosition: 7, name: "Николай Николаев", mmr: 2702 },
        { id: 8, ladderPosition: 8, name: "Владимир Владимиров", mmr: 2654 },
        { id: 9, ladderPosition: 9, name: "Александр Александров", mmr: 2601 },
        { id: 10, ladderPosition: 10, name: "Михаил Михайлов", mmr: 2550 },
        { id: 11, ladderPosition: 11, name: "Егор Егоров", mmr: 2500 },
        { id: 12, ladderPosition: 12, name: "Артем Артемов", mmr: 2450 },
        { id: 13, ladderPosition: 13, name: "Виктор Викторов", mmr: 2400 },
        { id: 14, ladderPosition: 14, name: "Олег Олегов", mmr: 2350 },
        { id: 15, ladderPosition: 15, name: "Юрий Юрьев", mmr: 2300 },
        { id: 16, ladderPosition: 16, name: "Константин Константинов", mmr: 2250 },
        { id: 17, ladderPosition: 17, name: "Игорь Игорев", mmr: 2200 },
        { id: 18, ladderPosition: 18, name: "Павел Павлов", mmr: 2150 },
        { id: 19, ladderPosition: 19, name: "Роман Романов", mmr: 2100 },
        { id: 20, ladderPosition: 20, name: "Василий Васильев", mmr: 2050 },
    ];
    const sortedPlayers = players.sort((a, b) => a.ladderPosition - b.ladderPosition);

    return (
        <div className="max-w-[100%] overflow-x-hidden flex scrollbar-custom-players flex-col items-center py-[80px]">
            <div className="flex flex-col shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[600px]">
                {sortedPlayers.map((player, index) => (
                    <Player
                        key={index}
                        id={player.id}
                        ladderPosition={player.ladderPosition}
                        name={player.name}
                        mmr={player.mmr}
                        className={index % 2 === 0 ? 'bg-[#1A1A1A]' : 'bg-[#202020]'} // Чередуем классы
                    ></Player>
                ))}
            </div>
        </div>
    );
};
