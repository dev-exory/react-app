import React, { useState, useEffect, useDisclosure } from "react";
import PasswordInput from "../../components/PasswordInput";
import UsernameInput from "../../components/UsernameInput";
import PhoneInput from "../../components/PhoneInput";
import ButtonInput from "../../components/ButtonInput";
import TextComponent from "../../components/TextComponent";
import Verification from "./Verification";
import { Link } from "react-router-dom";

import {
  validateUsername,
  validateCountryCode,
  validatePhoneNumber,
  validatePasswords,
} from "../../functions/registerValidation";

import MainLogo from "../../components/MainLogo";

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

  const [countryCodeMatch, setCountryCodeMatch] = useState(false);
  const [logoPath, setLogoPath] = useState("");
  const [validate, setValidate] = useState(false);

  const fetchData = async () => {
    setInputsValidation({
      ...inputsValidation,
      usernameValidation: await validateUsername(registerInputs.username),
    });
  };

  const validateInputs = () => {
    if (
      inputsValidation.usernameValidation === true &&
      inputsValidation.countryCodeValidation === true &&
      inputsValidation.phoneNumberValidation === true &&
      inputsValidation.passwordValidation === true
    ) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  useEffect(() => {
    validateInputs();
  }, [inputsValidation]);

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
    console.log(inputsValidation.phoneNumberValidation);
  }, [inputsValidation.phoneNumberValidation]);

  // validate phone number
  useEffect(() => {
    setInputsValidation((prevValue) => {
      return {
        ...prevValue,
        phoneNumberValidation: validatePhoneNumber(registerInputs.phoneNumber),
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
        passwordValidation: validatePasswords(
          registerInputs.password,
          registerInputs.repeatPassword
        ),
      };
    });
  }, [registerInputs.password, registerInputs.repeatPassword]);

  return (
    <>
      <MainLogo />
      <UsernameInput
        type="text"
        text="Username"
        name="username"
        purpose="register"
        handleChange={handleChange}
        setState={setRegisterInputs}
        isValid={inputsValidation.usernameValidation}
      />
      <PhoneInput
        logoPath={logoPath}
        countryCodeMatch={countryCodeMatch}
        handleChange={handleChange}
        setState={setRegisterInputs}
        isValid={inputsValidation.phoneNumberValidation}
      />
      <PasswordInput
        text="Password"
        name="password"
        purpose="register"
        handleChange={handleChange}
        setState={setRegisterInputs}
        isValid={inputsValidation.passwordValidation}
      />
      <PasswordInput
        text="Repeat password"
        name="repeatPassword"
        purpose="register"
        handleChange={handleChange}
        setState={setRegisterInputs}
        isValid={inputsValidation.passwordValidation}
      />

      <ButtonInput
        text="Register"
        toastType={validate ? "validRegister" : "invalidRegister"}
      />

      <TextComponent text="Back to login" target="/login" />
    </>
  );
}
