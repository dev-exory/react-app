import React, { useState } from "react";
import FormIcon from "./FormIcon";
import { Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";
import {
  EmailIcon,
  CheckCircleIcon,
  NotAllowedIcon,
  BellIcon,
} from "@chakra-ui/icons";

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
  isValid,
}) {
  const [icon, setIocn] = useState(false);

  return (
    <>
      <Flex>
        <FormControl mt="1rem">
          <FormLabel>Username or email</FormLabel>
          <InputGroup w="100%">
            <InputLeftElement
              pointerEvents="none"
              children={
                purpose === "register" ? (
                  <BellIcon />
                ) : (
                  <>
                    <EmailIcon />
                  </>
                )
              }
            />

            <Input
              onChange={(e) => {
                handleChange(e, setState);
              }}
              onBlur={() => setIocn(true)}
              type={type}
              placeholder={text}
              size="md"
              name={name}
            />
          </InputGroup>

          {purpose === "register" && (
            <FormHelperText>
              Your display name {icon && <FormIcon isValid={isValid} />}
            </FormHelperText>
          )}
        </FormControl>
      </Flex>
    </>
  );
}
