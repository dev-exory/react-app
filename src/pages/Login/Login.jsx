import React, { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import ButtonInput from "../../components/ButtonInput"
import TextComponent from "../../components/TextComponent";


export default function Login({ handleChange }) {

    const [loginInputs, setLoginInputs] = useState({
        username: "",
        password: "",
    })

    return (
        <>
            <UsernameInput type="text" text="Email or username" handleChange={handleChange} setState={setLoginInputs} name="username" />
            <PasswordInput text="Password" handleChange={handleChange} setState={setLoginInputs} name="password" />
            <ButtonInput text="Login" />
            <TextComponent text="Create an account" target="/register" />
            <h1>{loginInputs.username}</h1>
            <h1>{loginInputs.password}</h1>
        </>
    )
}//e12b37
