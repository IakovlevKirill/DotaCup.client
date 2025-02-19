import {TournamentItem} from "./TournamentItem.tsx";

import { useRef } from 'react';

export const TournamentPage = () => {

    const tournamentData = undefined

    const containerRef = useRef(null);

    // Обработчик события wheel
    const handleWheel = (e : any) => {
        if (containerRef.current) {
            // Отменяем стандартное поведение (вертикальную прокрутку)
            e.preventDefault();
            // Прокручиваем контейнер по горизонтали
            containerRef.current.scrollLeft += e.deltaY;
        }
    };

    return (
        <div>
            <div className="pl-[5%] mt-[30px] flex flex-col">
                <h1 className="text-white font-[Montserrat-semibold] text-[48px]">Турниры</h1>
                {/* Контейнер с горизонтальным скроллом */}
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto scrollbar-custom gap-[120px] pb-4"
                    onWheel={handleWheel} // Добавляем обработчик wheel
                >
                    {/*
                    {tournamentData.map((tournament, index) => (
                        <TournamentItem
                            key={index}
                            date={tournament.date}
                            descriptionTittle={tournament.descriptionTitle}
                            descriptionText={tournament.descriptionText}
                            dateTime={tournament.dateTime}
                        />
                    ))}
                    */}
                    <TournamentItem
                        date={'Today'}
                        descriptionTittle={'bo3 - 4 teams / 1300 pts'}
                        descriptionText={'Еженедельный турнир, тут описание тип, представьте, что тут крутой текст, лмао ляпа гей кста))'}
                        dateTime={'14:00'}
                    />
                    <TournamentItem
                        date={'Tomorrow'}
                        descriptionTittle={'Grand final!!!!! Gandoni protiv penisov'}
                        descriptionText={'Кастом турик, тут описание тип, представьте, что тут крутой текст, лмао ляпа гей кста))'}
                        dateTime={'17:30'}
                    />
                    <TournamentItem
                        date={'22/02/25'}
                        descriptionTittle={'Grand final!!!!! Gandoni protiv penisov'}
                        descriptionText={'Кастом турик, тут описание тип, представьте, что тут крутой текст, лмао ляпа гей кста))'}
                        dateTime={'18:00'}
                    />
                    <TournamentItem
                        date={'22/02/25'}
                        descriptionTittle={'Grand final!!!!! Gandoni protiv penisov'}
                        descriptionText={'Кастом турик, тут описание тип, представьте, что тут крутой текст, лмао ляпа гей кста))'}
                        dateTime={'18:00'}
                    />
                    <TournamentItem
                        date={'22/02/25'}
                        descriptionTittle={'Grand final!!!!! Gandoni protiv penisov'}
                        descriptionText={'Кастом турик, тут описание тип, представьте, что тут крутой текст, лмао ляпа гей кста))'}
                        dateTime={'18:00'}
                    />
                    <TournamentItem
                        date={'22/02/25'}
                        descriptionTittle={'Grand final!!!!! Gandoni protiv penisov'}
                        descriptionText={'Кастом турик, тут описание тип, представьте, что тут крутой текст, лмао ляпа гей кста))'}
                        dateTime={'18:00'}
                    />
                </div>
            </div>
        </div>
    );
};