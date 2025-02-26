
import {Outlet} from "react-router-dom";


export const AuthPage = () => {

    const ReversedString = () => {

        return (
            <div className="container-wrap font-[Montserrat-bold]!">
                <div className="container">
                    <div className="animated">
                        <div
                            className="text">DOTA
                            2 TOP4 CUP
                        </div>
                        <div
                            className="text">DOTA
                            2 TOP4 CUP
                        </div>
                        <div
                            className="text">DOTA
                            2 TOP4 CUP
                        </div>
                    </div>
                    <div className="animated">
                        <div
                            className="text">DOTA
                            2 TOP4 CUP
                        </div>
                        <div
                            className="text">DOTA
                            2 TOP4 CUP
                        </div>
                        <div
                            className="text">DOTA
                            2 TOP4 CUP
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <>
            <div
                className="w-[100vw] h-[100vh] bg-gradient-to-r from-[#DA393C] to-[#000000] bg-no-repeat flex items-end justify-end">
                <img className="mr-[5%]  absolute" src="../../../src/assets/images/auth_pudge_bg.png" alt="pudge"/>
                <ReversedString></ReversedString>
                <Outlet></Outlet>
            </div>
        </>
    );
};
