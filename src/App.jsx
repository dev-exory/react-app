import React, { useState, useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import '../src/assets/styles.css'

// Chakra UI Dark Theme && css
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";

// Routes
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"


const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

export default function App() {
    const navigate = useNavigate()
    const location = useLocation()
    const theme = extendTheme(
        { config }
    );

    const [user, setUser] = useState()

    function handleChange(event, setterFunction) {
        const { name, value } = event.target

        setterFunction(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        console.log("token = " + token)
        if (token === null) {
            if (location.pathname != "/login") navigate("/login")
        } else {
            navigate("/")
        }

    }, [])



    return (
        <ChakraProvider theme={theme} >
            <NavbarComponent />
            <VStack>
                <Container width="400px" mt="50px" >
                    <Routes>
                        <Route path="/" element={<Home user={user} />} />
                        <Route path="/login" element={<Login handleChange={handleChange} setUser={setUser} />} />
                        <Route path="/register" element={<Register handleChange={handleChange} />} />
                    </Routes>
                </Container>
            </VStack>

        </ChakraProvider>
    )
}

