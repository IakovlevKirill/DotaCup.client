
interface TournamentItemProps{
    date: string;
    dateTime: string;
    descriptionTittle: string;
    descriptionText: string;

}

export const TournamentItem = ( props : TournamentItemProps ) => {
    return (
        <div className="flex flex-col mb-[100px]">
            <div className="flex flex-row items-center gap-[19px] mt-[24px]">
                <h2 className="text-white font-[Montserrat-semibold] text-[36px]">{props.date}</h2>
                <span className={`flex items-center justify-center h-auto relative w-[60px]! h-[30px]! text-center rounded-[9px] font-[Montserrat-semibold] text-[16px]
                ${
                    props.date === 'Today'
                        ? 'text-black bg-[#FF5151]'
                        : 'text-black bg-[#D9D9D9]' 
                }
                    `}>
                    {(props.date === 'Today') && (
                        'Lobby'
                    )}
                    {(props.date !== 'Today') && (
                        props.dateTime
                    )}
                </span>
            </div>
            <span className="text-white mt-[3px] font-[Montserrat-reg] text-[16px]">{props.descriptionTittle}</span>
            <div
                className={`mt-[50px] flex flex-col items-center rounded-[24px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] ${
                    props.date === 'Today'
                        ? 'bg-gradient-to-t from-[#D73F3F] to-[#8B4A3A] p-[8px]'
                        : 'bg-white' // Например, белый фон, если дата не 'Today'
                }`}
            >
                <img className="rounded-t-[20px] w-[310px]" src="../src/assets/images/cup_bg.png" alt=""/>
                <div
                    className="rounded-b-[20px] w-[310px] flex flex-col bg-[#D9D9D9] justify-center items-center px-[20px]">
                    <span className="min-h-[160px] text-black mt-[22px] font-[Montserrat-medium] text-[13px]">
                        {props.descriptionText}
                    </span>
                    <div>
                        {(props.date !== 'Today') && (
                            <button
                                className="bg-[#171717] min-w-[205px] hover:opacity-85 focus:border-none! font-[Montserrat-medium] focus:outline:none! shadow-none cursor-pointer rounded-[10px] text-white text-center px-[40px] mb-[19px] py-[13px]">
                                Учавствовать
                            </button>
                        )}
                        {(props.date === 'Today') && (
                            <button
                                className="bg-[#CE3636] min-w-[205px] hover:opacity-85 focus:border-none! font-[Montserrat-medium] focus:outline:none! shadow-none cursor-pointer rounded-[10px] text-white text-center px-[40px] mb-[19px] py-[13px]">
                                Перейти в лобби
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
