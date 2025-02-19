import {Login} from "./components/authentication/Login.tsx";
import {Main} from "./components/Main/Main.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TournamentPage} from "./components/Main/Tournaments/TournamentPage.tsx";
import {TeamsPage} from "./components/Main/Teams/TeamsPage.tsx";
import {PlayersPage} from "./components/Main/Players/PlayersPage.tsx";
import {StreamsAndVodPage} from "./components/Main/StreamsAndVOD/StreamsAndVOD.tsx";
import {NotFoundPage} from "./components/NotFoundPage.tsx";

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* Главная страница логина */}
                    <Route path="/" element={<Login />} />

                    {/* Главная страница (Main) с вложенными маршрутами */}
                    <Route path="/main" element={<Main />}>
                        <Route path="tournaments" element={<TournamentPage />} />
                        <Route path="teams" element={<TeamsPage />} />
                        <Route path="players" element={<PlayersPage />} />
                        <Route path="vod-streams" element={<StreamsAndVodPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};