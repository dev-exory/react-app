import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import logo from "./assets/logo.svg";
import '../src/assets/styles.css'

// Chakra UI Dark Theme && css
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";

// Routes
import { Routes, Route } from "react-router-dom"

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

function App() {
    const theme = extendTheme(
        { config }
    );

    return (
        <ChakraProvider theme={theme}>
            <NavbarComponent />
            <div className="container">
                <img width="280px" height="280px" src={logo} alt="gowno" />
                <VStack>
                    <Container minW="400px" mt="60px" className="showElement">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </Container>
                </VStack>
            </div>

        </ChakraProvider>
    )
}

export default App;