import React, { useState, useEffect, useDisclosure } from 'react'
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import PhoneInput from "../../components/PhoneInput"
import ButtonInput from "../../components/ButtonInput"
import TextComponent from "../../components/TextComponent";

import logo from "../../assets/logo.svg";

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

export default function Register({ handleChange }) {


    const [codeSent, setCodeSent] = useState(false)

    const [registerInputs, setRegisterInputs] = useState({
        username: "",
        phoneNumber: "",
        password: "",
        repeatPassword: ""
    })

    const [passwordMatch, setPasswordMatch] = useState(true)

    function register() {
        console.log("to register")
    }

    const verifyNumber = async () => {
        console.log("to verify");
    }

    useEffect(() => {
        if (registerInputs.password != "" && registerInputs.repeatPassword != "") {
            if (registerInputs.password != registerInputs.repeatPassword) {
                setPasswordMatch(false)
            } else {
                setPasswordMatch(true)
            }

        } else {
            setPasswordMatch(true)
        }
    }, [registerInputs])

    return (
        <>
            {!codeSent &&
                <>
                    <UsernameInput type="text" text="Username" name="username" handleChange={handleChange} setState={setRegisterInputs} />
                    <PhoneInput name="phoneNumber" handleChange={handleChange} setState={setRegisterInputs} />
                    <PasswordInput text="Password" name="password" handleChange={handleChange} setState={setRegisterInputs} />
                    <PasswordInput text="Repeat password" isInvalid={!passwordMatch} name="repeatPassword" handleChange={handleChange} setState={setRegisterInputs} />
                </>
            }

            {!passwordMatch &&
                <Alert status='error' style={{ top: 15 }}>
                    <AlertIcon />
                    <AlertTitle>Password fields do not match!</AlertTitle>
                </Alert>
            }

            <ButtonInput text={!codeSent ? 'Register' : 'Verify'} onClick={!codeSent ? register : verifyNumber} />
            <TextComponent text="Back to login" target="/login" />
        </>
    )
}
