import React, { useState, useEffect } from "react";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Verification from "./pages/Register/Verification";
import "../src/assets/styles.css";

// Chakra UI Dark Theme && css
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Container, VStack } from "@chakra-ui/react";

// Routes
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = extendTheme({ config });

  const [user, setUser] = useState();

  function handleChange(event, setterFunction) {
    const { name, value } = event.target;

    setterFunction((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const fetchUser = async (token) => {
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    await fetch("https://api-v2.exory.dev/user", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error");
        }
        return response.json();
      })
      .then((response) => setUser(response));
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    // console.log("token = " + token)
    if (token === null) {
      if (location.pathname != "/login") navigate("/login");
    } else {
      fetchUser(token);
      navigate("/");
    }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <NavbarComponent />
      <VStack>
        <Container maxWidth="400px" className="container">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route
              path="/login"
              element={<Login handleChange={handleChange} setUser={setUser} />}
            />
            <Route
              path="/register"
              element={<Register handleChange={handleChange} />}
            />
            <Route path="/verify" element={<Verification />} />
          </Routes>
        </Container>
      </VStack>
    </ChakraProvider>
  );
}
