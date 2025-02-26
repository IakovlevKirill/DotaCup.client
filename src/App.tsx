import {AuthPage} from "./components/authentication/AuthPage.tsx";
import {Main} from "./components/Main/Main.tsx";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {TournamentPage} from "./components/Main/Tournaments/TournamentPage.tsx";
import {TeamsPage} from "./components/Main/Teams/TeamsPage.tsx";
import {PlayersPage} from "./components/Main/Players/PlayersPage.tsx";
import {StreamsAndVodPage} from "./components/Main/StreamsAndVOD/StreamsAndVOD.tsx";
import {NotFoundPage} from "./components/NotFoundPage.tsx";
import {Lobby} from "./components/Main/Lobby/Lobby.tsx";
import {ProfilePage} from "./components/Profile/ProfilePage.tsx";
import {LogIn} from "./components/authentication/LogIn.tsx";
import { SignUp } from "./components/authentication/SignUp.tsx";

const ProtectedRoute = ({ children } : any) => {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Пример проверки авторизации

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthPage />}>
                    <Route index element={<LogIn />} /> {/* index маршрут */}
                    <Route path="/login" element={<LogIn />} /> {/* явный маршрут для /login */}
                    <Route path="/signup" element={<SignUp />} />
                </Route>

                <Route
                    path="/main"
                    element={
                        <ProtectedRoute>
                            <Main />
                        </ProtectedRoute>
                    }
                >
                    <Route index path="tournaments" element={<TournamentPage />} />
                    <Route path="tournaments/:id1/lobby/:id2" element={<Lobby />} />
                    <Route path="teams" element={<TeamsPage />} />
                    <Route path="players" element={<PlayersPage />} />
                    <Route path="vod-streams" element={<StreamsAndVodPage />} />
                    <Route path="profile/:nickname" element={<ProfilePage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};