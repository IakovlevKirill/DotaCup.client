import {Button, Form, Input} from "antd";
import {useState} from "react";
import { useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate();

    const [isLogInFormHidden, setIsLogInFormHidden] = useState(true)
    const [isSignUpFormHidden, setIsSignUpFormHidden] = useState(false)

    const SignUp = () => {
        return(
            <Form
                hidden={isSignUpFormHidden}
                requiredMark={false}
                layout="vertical"
                onFinish={ () => {
                    navigate('/main/tournaments')
                }}
            >
                <div
                    className="w-[520px] h-[100vh] backdrop-blur-[80px] bg-[#000000 2%] flex flex-col px-[32px] py-[26px] align-center justify-center">
                    <Form.Item
                        name={'name'}
                    >
                        <Input
                            className="
                            z-1 text-[16px]! w-[368px] h-[46px] text-white! font-[Montserrat-reg]!
                            border-0! rounded-[0]!

                            "
                            placeholder="Name"
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item
                        name={'email'}
                    >
                        <Input
                            className="text-[16px]! w-[368px] h-[46px] text-white! font-[Montserrat-reg]! border-0! rounded-[0]!"
                            placeholder="Email"
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                    >
                        <Input
                            className="text-[16px]! w-[368px] h-[46px] text-white! font-[Montserrat-reg]! border-0! rounded-[0]!"
                            placeholder="Password"
                        ></Input>
                    </Form.Item>
                    <a
                        className="mt-[40px]  text-[16px] text-white! text-center font-[Montserrat-reg]!
                        border-none
                        hover-border-[none]!
                        focus:outline-none!
                         "
                        onClick={() => {
                            setIsSignUpFormHidden(true);
                            setIsLogInFormHidden(false);
                        }}
                    >
                        Login
                    </a>
                    <div className="w-[100%] flex justify-center">
                        <Button
                            htmlType="submit"
                            className="min-w-[270px]! w-[100%] mt-[17px] w-auto py-[13px]! px-[100px]! bg-[#D9D9D9]! hover:bg-[#C2C2C2]! cursor-pointer border-none! focus:outline-none! hover:border-none! text-black! font-[Montserrat-bold]! ">
                            SIGN UP
                        </Button>
                    </div>
                    <div className="mt-[27px] flex gap-[26px] justify-center">
                        <a className="hover:opacity-80" href="">
                            <img src="src/assets/images/google_logo.png" alt=""/>
                        </a>
                        <a className="hover:opacity-80" href="">
                            <img src="src/assets/images/discord_logo.png" alt=""/>
                        </a>
                    </div>
                </div>
            </Form>
        )
    }

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

    const LogIn = () => {
        return (
            <Form
                hidden={isLogInFormHidden}
                requiredMark={false}
                layout="vertical"
                onFinish={() => {
                    navigate('/main/tournaments')
                }}
            >
                <div
                    className="w-[520px] h-[100vh] backdrop-blur-[80px] bg-[#000000 2%] flex flex-col px-[32px] py-[26px] align-center justify-center">
                    <Form.Item
                        name={'name'}
                    >
                        <Input
                            className="
                            z-1 text-[16px]! w-[368px] h-[46px] text-white! font-[Montserrat-reg]! border-0! rounded-[0]!

                            "
                            placeholder="Name"
                        >
                        </Input>
                    </Form.Item>
                    <Form.Item
                        name={'email'}
                    >
                        <Input
                            className="text-[16px]! w-[368px] h-[46px] text-white! font-[Montserrat-reg]! border-0! rounded-[0]!"
                            placeholder="Email"
                        ></Input>
                    </Form.Item>
                    <Form.Item
                        name={'password'}
                    >
                        <Input
                            className="text-[16px]! w-[368px] h-[46px] text-white! font-[Montserrat-reg]! border-0! rounded-[0]!"
                            placeholder="Password"
                        ></Input>
                    </Form.Item>
                    <a
                        className="mt-[40px]  text-[16px] text-white! text-center font-[Montserrat-reg]
                        border-none
                        hover-border-[none]!
                        focus:outline-none!
                         "
                        onClick={() => {
                            setIsSignUpFormHidden(false);
                            setIsLogInFormHidden(true);
                        }}
                    >
                        Sign Up
                    </a>
                    <div className="w-[100%] flex justify-center">
                        <Button
                            htmlType="submit"
                            className="min-w-[270px]! w-[100%] mt-[17px] w-auto py-[13px]! px-[100px]! bg-[#D9D9D9]! hover:bg-[#C2C2C2]! cursor-pointer border-none! focus:outline-none! hover:border-none! text-black! font-[Montserrat-bold]! ">
                            LOGIN
                        </Button>
                    </div>
                    <div className="mt-[27px] flex gap-[26px] justify-center">
                        <a className="hover:opacity-80" href="">
                            <img src="src/assets/images/google_logo.png" alt=""/>
                        </a>
                        <a className="hover:opacity-80" href="">
                            <img src="src/assets/images/discord_logo.png" alt=""/>
                        </a>
                    </div>
                </div>
            </Form>
        )
    }

    return (
        <>
            <div
                className="w-[100vw] h-[100vh] bg-gradient-to-r from-[#DA393C] to-[#000000] bg-no-repeat flex items-end justify-end">
                <img className="absolute mr-[7%]" src="src/assets/images/padgik).png" alt=""/>
                <ReversedString></ReversedString>
                <SignUp></SignUp>
                <LogIn></LogIn>
            </div>
        </>
    );
};
