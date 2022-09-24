import React, { useState } from "react";
import FormIcon from "./FormIcon";
import {
  Button,
  Flex,
  Spacer,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  LockIcon,
  RepeatIcon,
  CheckCircleIcon,
  NotAllowedIcon,
} from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { passwordStrength } from "check-password-strength";
export default function PasswordInput({
  handleChange,
  text,
  name,
  purpose,
  setState,
  isValid,
  bgColor,
  strength,
}) {
  const [show, setShow] = useState(false);
  const [inputColor, setInputColor] = useState(false);
  const [passwordInputStrength, setPasswordInputStrength] = useState(0);
  const [passwordStrengthName, setPasswordStrengthName] = useState("Weak");
  const [passwordStrengthColor, setPasswordStrengthColor] = useState();
  const handleClick = () => {
    setShow(!show);
  };

  const customStrengthOptions = [
    {
      id: 0,
      value: "Too weak",
      minDiversity: 0,
      minLength: 0,
    },
    {
      id: 1,
      value: "Weak",
      minDiversity: 2,
      minLength: 6,
    },
    {
      id: 2,
      value: "Good",
      minDiversity: 3,
      minLength: 8,
    },
    {
      id: 3,
      value: "Strong",
      minDiversity: 4,
      minLength: 12,
    },
  ];

  const handlePasswordStrength = (event) => {
    const pass = passwordStrength(event.target.value, customStrengthOptions);
    switch (pass.id) {
      case 0: {
        setPasswordInputStrength(0);
        setPasswordStrengthName(pass.value);
        break;
      }
      case 1: {
        setPasswordInputStrength(33);
        setPasswordStrengthName(pass.value);
        break;
      }
      case 2: {
        setPasswordInputStrength(66);
        setPasswordStrengthName(pass.value);
        break;
      }
      case 3: {
        setPasswordInputStrength(100);
        setPasswordStrengthName(pass.value);
        break;
      }
    }
    console.log(passwordInputStrength);
  };

  return (
    <>
      <Flex>
        <FormControl mt="1rem">
          <FormLabel>Password</FormLabel>
          <InputGroup width="100%">
            <InputLeftElement
              pointerEvents="none"
              children={text === "Password" ? <LockIcon /> : <RepeatIcon />}
            />
            <Input
              borderColor={inputColor ? bgColor : null}
              onChange={(e) => {
                handleChange(e, setState);
                setInputColor(true);
                handlePasswordStrength(e);
              }}
              onBlur={(e) => {
                handlePasswordStrength(e);
              }}
              type={show ? "text" : "password"}
              placeholder={text}
              size="md"
              name={name}
            />
            <InputRightElement width="4.5rem" h="100%" style={{}}>
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          {purpose === "register" && (
            <FormHelperText>
              {/* {name === "password" && "Must contain at least 8 characters"} */}
              {name === "password" && (
                <>
                  <Progress
                    value={passwordInputStrength}
                    size="xs"
                    colorScheme="green"
                    width="100%"
                    borderRadius="50px"
                    bgColor="gray.500"
                  />

                  <Flex>
                    <Text>{passwordStrengthName}</Text>
                    <Spacer />
                    <Text>min 6 characters</Text>
                  </Flex>
                </>
              )}
            </FormHelperText>
          )}
        </FormControl>
      </Flex>
    </>
  );
}
