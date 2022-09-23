import React, { useState, useEffect } from "react";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import ButtonInput from "../../components/ButtonInput";
import TextComponent from "../../components/TextComponent";
import MainLogo from "../../components/MainLogo";
import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useToast } from "@chakra-ui/react";

export default function Login({ handleChange, setUser }) {
  const navigate = useNavigate();
  const toast = useToast();
  const [loginInputs, setLoginInputs] = useState({
    username: "",
    password: "",
  });

  const handleToast = (toastTitle, toastDesc, toastStatus) => {
    toast({
      title: toastTitle,
      description: toastDesc,
      status: toastStatus,
      duration: 4000,
      isClosable: true,
    });
    return;
  };

  const fetchUser = async () => {
    const token = localStorage.getItem("authToken");

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

  async function handleClick() {
    const headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " +
        Buffer.from(loginInputs.username + ":" + loginInputs.password).toString(
          "base64"
        )
    );

    const requestOptions = {
      method: "POST",
      headers: headers,
    };

    fetch("https://api-v2.exory.dev/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          handleToast("Invalid credentials", "", "error");
          throw new Error("Username or password is incorrect.");
        }
        return response.json();
      })
      .then(async (response) => {
        localStorage.setItem("authToken", response.token);
        await fetchUser();
        handleToast("Logged in!", "", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <MainLogo />
      <UsernameInput
        type="text"
        text="Username or email"
        name="username"
        purpose="login"
        handleChange={handleChange}
        setState={setLoginInputs}
      />
      <PasswordInput
        text="Password"
        name="password"
        purpose="login"
        handleChange={handleChange}
        setState={setLoginInputs}
      />
      <div onClick={handleClick}>
        <ButtonInput text="Login" />
      </div>
      <TextComponent text="Create an account" target="/register" />
      <h1>{loginInputs.username}</h1>
      <h1>{loginInputs.password}</h1>
    </>
  );
} //e12b37
