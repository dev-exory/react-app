import React, { useState, useEffect, useDisclosure } from "react";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import PhoneInput from "../../components/PhoneInput";
import ButtonInput from "../../components/ButtonInput";
import TextComponent from "../../components/TextComponent";

import {
  validateUsername,
  validateCountryCode,
  validatePhoneNumber,
  validatePasswords,
} from "../../functions/registerValidation";

import {
  Icon,
  VStack,
  Container,
  Grid,
  GridItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import images from "../../assets/flags/importImages.js";
import countries from "../../assets/flags/countries.json";

import logo from "../../assets/logo.svg";

export default function Register({ handleChange }) {
  const [registerInputs, setRegisterInputs] = useState({
    username: "",
    countryCode: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });

  const [inputsValidation, setInputsValidation] = useState({
    usernameValidation: false,
    countryCodeValidation: false,
    phoneNumberValidation: false,
    passwordValidation: false,
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

  const fetchData = async () => {
    setInputsValidation({
      ...inputsValidation,
      usernameValidation: [await validateUsername(registerInputs.username)],
    });
  };

  // username validate debug
  useEffect(() => {
    console.log("Username validation: " + inputsValidation.usernameValidation);
  }, [inputsValidation.usernameValidation]);

  // validate username
  useEffect(() => {
    fetchData();
  }, [registerInputs.username]);

  // country code validate debug
  useEffect(() => {
    console.log(
      "Country code validation: " + inputsValidation.countryCodeValidation
    );
  }, [inputsValidation.countryCodeValidation]);

  // validate country flag
  useEffect(() => {
    const [value, path] = validateCountryCode(registerInputs.countryCode);

    if (value) {
      setCountryCodeMatch(true);
      setLogoPath(path);
      setInputsValidation((prevValue) => {
        return {
          ...prevValue,
          countryCodeValidation: true,
        };
      });
    } else {
      setCountryCodeMatch(false);
      setInputsValidation((prevValue) => {
        return {
          ...prevValue,
          countryCodeValidation: false,
        };
      });
    }
  }, [registerInputs.countryCode]);

  //  phone number validate debug
  useEffect(() => {
    console.log(
      "Phone number validation: " + inputsValidation.phoneNumberValidation
    );
  }, [inputsValidation.phoneNumberValidation]);

  // validate phone number
  useEffect(() => {
    setInputsValidation((prevValue) => {
      return {
        ...prevValue,
        phoneNumberValidation: [
          validatePhoneNumber(registerInputs.phoneNumber),
        ],
      };
    });
  }, [registerInputs.phoneNumber]);

  // password validate debug
  useEffect(() => {
    console.log("Passwords validaton: " + inputsValidation.passwordValidation);
  }, [inputsValidation.passwordValidation]);

  // validate passwords
  useEffect(() => {
    setInputsValidation((prevValue) => {
      return {
        ...prevValue,
        passwordValidation: [
          validatePasswords(
            registerInputs.password,
            registerInputs.repeatPassword
          ),
        ],
      };
    });
  }, [registerInputs.password, registerInputs.repeatPassword]);

  return (
    <div>
      <img width="200px" height="200px" src={logo} className="logo" />
      <div>
        {!codeSent && (
          <>
            {/* <Flex
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UsernameInput
                type="text"
                text="Username"
                name="username"
                purpose="register"
                handleChange={handleChange}
                setState={setRegisterInputs}
              />
              <Spacer />
              <Icon
                as={CheckCircleIcon}
                width="20px"
                height="20px"
                color="green"
              ></Icon>
            </Flex> */}
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
