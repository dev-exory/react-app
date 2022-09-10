import React from "react";
import FormIcon from "./FormIcon";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { EmailIcon, CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons";

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
      <Flex>
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
            <FormIcon />
          </InputGroup>

          {purpose === "register" && (
            <FormHelperText>Your display name</FormHelperText>
          )}
        </FormControl>
      </Flex>
    </>
  );
}
