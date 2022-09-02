import React from "react";
import logo from "../../../assets/logo.svg";
import Navbar from "./NavbarComponent"
import NavbarComponent from "./NavbarComponent";
import PasswordInput from "./PasswordInput";
import LoginInput from "./LoginInput";
import ButtonInput from "./ButtonInput"
import TextComponent from "./TextComponent";
import { Center } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";



function Login() {
    return (<>
        <NavbarComponent />
        <div className="container">
            <img width="280px" height="280px" src={logo} alt="gowno" />
            <VStack>
                <Container minW="400px" mt="60px">
                    <LoginInput />
                    <PasswordInput />
                    <ButtonInput />
                    <TextComponent />
                </Container>
            </VStack>
        </div>
    </>

    );
} //e12b37

export default Login;
