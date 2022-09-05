import React from "react";
import PasswordInput from "./PasswordInput";
import LoginInput from "./LoginInput";
import ButtonInput from "./ButtonInput"
import TextComponent from "./TextComponent";
function LoginContainer() {
    return (
        <>
            <LoginInput type="text" text="Email or username" />
            <PasswordInput text="Password" />
            <ButtonInput text="Login" />
            <TextComponent text="Create an account" target="/register" />
        </>
    )
}


export default LoginContainer;