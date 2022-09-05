import React from "react";

import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import ButtonInput from "./ButtonInput"
import TextComponent from "./TextComponent";

function RegisterContainer() {
    return (
        <>
            <LoginInput type="text" text="Username" />
            <LoginInput type="email" text="Email" />
            <PasswordInput text="Password" />
            <PasswordInput text="Repeat password" />
            <ButtonInput text="Register" />
            <TextComponent text="Back to login" target="/login" />
        </>
    )
}


export default RegisterContainer;