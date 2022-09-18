import React, { useState } from "react";
import FormIcon from "./FormIcon";
import {
  Button,
  Flex,
  Spacer,
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

export default function PasswordInput({
  handleChange,
  text,
  name,
  purpose,
  setState,
  isValid,
}) {
  const [show, setShow] = useState(false);
  const [icon, setIocn] = useState(false);
  // const handleClick = () => setShow(!show)
  function handleClick() {
    setShow(!show);
  }

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
              // isInvalid={!isValid}
              // errorBorderColor="red.300"
              onChange={(e) => handleChange(e, setState)}
              onBlur={() => setIocn(true)}
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
            <FormErrorMessage>Email is required.</FormErrorMessage>
          </InputGroup>

          {purpose === "register" && (
            <FormHelperText>
              {name === "password"
                ? "Must contain at least 8 characters"
                : "Repeat password"}{" "}
              {icon && <FormIcon isValid={isValid} />}
            </FormHelperText>
          )}
        </FormControl>
      </Flex>
    </>
  );
}
