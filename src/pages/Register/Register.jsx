import React, { useState, useEffect } from 'react'
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import PhoneInput from "../../components/PhoneInput"
import ButtonInput from "../../components/ButtonInput"
import TextComponent from "../../components/TextComponent";

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'


export default function Register({ handleChange }) {


    const [registerInputs, setRegisterInputs] = useState({
        username: "",
        phoneNumber: "",
        password: "",
        repeatPassword: ""
    })

    const [passwordMatch, setPasswordMatch] = useState(true)


    useEffect(() => {
        if (registerInputs.password != "" && registerInputs.repeatPassword != "") {
            if (registerInputs.password != registerInputs.repeatPassword) {
                setPasswordMatch(false)
            } else {
                setPasswordMatch(true)
            }
        }
    }, [registerInputs])


    return (
        <>
            <UsernameInput type="text" text="Username" name="username" handleChange={handleChange} setState={setRegisterInputs} />
            <PhoneInput name="phoneNumber" handleChange={handleChange} setState={setRegisterInputs} />
            <PasswordInput text="Password" name="password" handleChange={handleChange} setState={setRegisterInputs} />
            <PasswordInput text="Repeat password" isInvalid={!passwordMatch} name="repeatPassword" handleChange={handleChange} setState={setRegisterInputs} />
            <ButtonInput text="Register" />
            <TextComponent text="Back to login" target="/login" />
            <h1>{registerInputs.username}</h1>
            <h1>{registerInputs.phoneNumber}</h1>
            <h1>{registerInputs.password}</h1>
            <h1>{registerInputs.repeatPassword}</h1>

            {!passwordMatch &&
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Password fields do not match!</AlertTitle>
                    {/* <AlertDescription>Password fields do not match!</AlertDescription> */}
                </Alert>}

        </>
    )
}
