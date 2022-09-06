import React, { useState, useEffect } from "react";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import ButtonInput from "../../components/ButtonInput"
import TextComponent from "../../components/TextComponent";
import { Buffer } from "buffer"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg";

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'


export default function Login({ handleChange, setUser }) {
    const navigate = useNavigate()
    const [loginInputs, setLoginInputs] = useState({
        username: "",
        password: "",
    })

    const [errorMessage, setErrorMessage] = useState()


    useEffect(() => {
        if (loginInputs.username === "" || loginInputs.password === "") {
            setErrorMessage()
        }
    }, [loginInputs])


    const fetchUser = async () => {
        const token = localStorage.getItem('authToken')

        const headers = new Headers()
        headers.append('Authorization', 'Bearer ' + token)

        const requestOptions = {
            method: "GET",
            headers: headers
        }

        fetch("https://api-v2.exory.dev/user", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        'HTTP error'
                    )
                }
                return response.json()
            })
            .then((response) => setUser(response))
    }


    async function handleClick() {

        const headers = new Headers()
        headers.append('Authorization', 'Basic ' + Buffer.from(loginInputs.username + ":" + loginInputs.password).toString('base64'))

        const requestOptions = {
            method: "POST",
            headers: headers
        }

        fetch("https://api-v2.exory.dev/login", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Username or password is incorrect.')
                }
                return response.json()
            })
            .then(async (response) => {
                localStorage.setItem('authToken', response.token);
                await fetchUser()
                navigate("/")
            })
            .catch(err => {
                setErrorMessage(err.message)
                console.log(err.message)
            })

    }



    return (
        <>
            <div>
                <UsernameInput type="text" text="Email or username" handleChange={handleChange} setState={setLoginInputs} name="username" />
                <PasswordInput text="Password" handleChange={handleChange} setState={setLoginInputs} name="password" />
                {errorMessage &&
                    <Alert status='error' style={{ top: 15 }}>
                        <AlertIcon />
                        <AlertTitle>{errorMessage}</AlertTitle>
                    </Alert>
                }
                <ButtonInput text="Login" onClick={handleClick} />
                <TextComponent text="Create an account" target="/register" />
            </div>
            <h1>{loginInputs.username}</h1>
            <h1>{loginInputs.password}</h1>

        </>
    )
}//e12b37
