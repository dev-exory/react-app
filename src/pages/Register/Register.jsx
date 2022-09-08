import React, { useState, useEffect, useDisclosure } from "react";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import PhoneInput from "../../components/PhoneInput";
import ButtonInput from "../../components/ButtonInput";
import TextComponent from "../../components/TextComponent";

import {
  checkUsername,
  validateInputs,
} from "../../functions/registerValidation";

import images from "../../assets/flags/importImages.js";
import countries from "../../assets/flags/countries.json";

import logo from "../../assets/logo.svg";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function Register({ handleChange }) {
  const [registerInputs, setRegisterInputs] = useState({
    username: "",
    countryCode: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });

  const [inputsValidation, setInputsValidation] = useState({
    username: [true, false],
    countryCode: [true, false],
    isPhoneNumberValid: [true, false],
    phoneNumber: [true, false],
    password: [true, false],
    repeatPassword: [true, false],
  });

  const [codeSent, setCodeSent] = useState(false);
  const [countryCodeMatch, setCountryCodeMatch] = useState(false);
  const [logoPath, setLogoPath] = useState("");

  const register = async () => {
    console.log("to register");
  };

  const verifyNumber = async () => {
    console.log("to verify");
  };

  // inputs validation
  useEffect(() => {
    setInputsValidation({
      ...inputsValidation,
      ...validateInputs(registerInputs),
    });
    console.log(inputsValidation);
  }, [registerInputs]);

  // validate username
  useEffect(() => {
    const fetchData = async () => {
      setInputsValidation({
        ...inputsValidation,
        username: [await checkUsername(registerInputs.username), false],
      });
    };
    fetchData();
    console.log(inputsValidation);
  }, [registerInputs.username]);

  // country flag change
  useEffect(() => {
    countries.every((element) => {
      console.log("szuka");
      if (element.dial_code === registerInputs.countryCode) {
        console.log("znalazl");
        setLogoPath(images[`${element.code.toLowerCase()}.svg`]);
        setCountryCodeMatch(true);
        setInputsValidation({
          ...inputsValidation,
          countryCode: [countryCodeMatch, false],
        });
        return false;
      } else {
        setCountryCodeMatch(false);
        setInputsValidation({
          ...inputsValidation,
          countryCode: [countryCodeMatch, false],
        });
        return true;
      }
    });
  }, [registerInputs.countryCode]);

  return (
    <div>
      <img width="200px" height="200px" src={logo} className="logo" />
      <div>
        {!codeSent && (
          <>
            <UsernameInput
              type="text"
              text="Username"
              name="username"
              purpose="register"
              handleChange={handleChange}
              setState={setRegisterInputs}
            />
            <PhoneInput
              logoPath={logoPath}
              countryCodeMatch={countryCodeMatch}
              handleChange={handleChange}
              setState={setRegisterInputs}
            />
            <PasswordInput
              text="Password"
              name="password"
              purpose="register"
              handleChange={handleChange}
              setState={setRegisterInputs}
            />
            <PasswordInput
              text="Repeat password"
              name="repeatPassword"
              handleChange={handleChange}
              setState={setRegisterInputs}
            />
          </>
        )}
        {/* {!inputsValidation.password[0] && (
          <Alert status="error" style={{ top: 15 }}>
            <AlertIcon />
            <AlertTitle>Password fields do not match!</AlertTitle>
          </Alert>
        )} */}
        <ButtonInput
          // disabled={!inputsValidation.password[0] ? true : false}
          text={!codeSent ? "Register" : "Verify"}
          onClick={!codeSent ? register : verifyNumber}
        />
        <TextComponent text="Back to login" target="/login" />
      </div>
    </div>
  );
}
