import React from "react";
import Login from "./pages/Login/LoginPage"
import "../assets/styles.css"

// Chakra UI Dark Theme
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";




const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

function App({ children }) {
    const theme = extendTheme(
        { config }
    );
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}

export default App;