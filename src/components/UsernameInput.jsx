import React from "react";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { EmailIcon, InfoIcon } from "@chakra-ui/icons";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function UsernameInput({
  handleChange,
  type,
  name,
  text,
  purpose,
  setState,
}) {
  return (
    <>
      <FormControl mt="1rem">
        <FormLabel>Username</FormLabel>
        <InputGroup w="100%">
          <InputLeftElement
            pointerEvents="none"
            children={purpose === "text" ? "" : <EmailIcon />}
          />
          <Input
            onChange={(e) => handleChange(e, setState)}
            type={type}
            placeholder={text}
            size="md"
            name={name}
          />
        </InputGroup>
        {purpose === "register" && (
          <FormHelperText>Your display name</FormHelperText>
        )}
      </FormControl>
    </>
  );
}
