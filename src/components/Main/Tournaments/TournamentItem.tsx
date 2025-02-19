
export const TournamentItem = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-[19px] mt-[24px]">
                <h2 className="text-white font-[Montserrat-semibold] text-[36px]">Today</h2>
                <span
                    className="flex items-center justify-center h-auto relative text-black bg-[#FF5151] w-[60px]! h-[30px]! text-center rounded-[9px] font-[Montserrat-semibold] text-[16px]">Lobby</span>
            </div>
            <span className="text-white mt-[3px] font-[Montserrat-reg] text-[16px]">bo3 - 4 teams / 1300 pts</span>
            <div className="mt-[50px] flex flex-col items-center bg-gradient-to-t from-[#D73F3F] to-[#8B4A3A] rounded-[24px] p-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <img className="rounded-t-[20px] w-[310px]" src="../src/assets/images/dota_cup_bg.png" alt=""/>
                <div className="rounded-b-[20px] w-[310px] flex flex-col bg-[#D9D9D9] justify-center items-center px-[20px]">
                    <span className="min-h-[160px] text-black mt-[22px] font-[Montserrat-medium] text-[13px]">
                        Еженедельный турнир, тут описание тип, представьте, что тут крутой текст, лмао ляпа гей кста))
                    </span>
                    <div>
                        <button
                            className="bg-[#CE3636] hover:opacity-85 focus:border-none! focus:outline:none! shadow-none cursor-pointer rounded-[10px] text-white text-center px-[40px] mb-[19px] py-[13px]">Перейти
                            в лобби
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
