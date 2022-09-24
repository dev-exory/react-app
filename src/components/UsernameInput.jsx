import React, { useState } from "react";
import FormIcon from "./FormIcon";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { EmailIcon, BellIcon } from "@chakra-ui/icons";

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
  const [inputColor, setInputColor] = useState();
  return (
    <>
      <Flex>
        <FormControl mt="1rem">
          <FormLabel>Username {purpose != "register" && "or email"}</FormLabel>
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
              borderColor={inputColor}
              onChange={(e) => {
                handleChange(e, setState);
              }}
              onBlur={() => {
                if (purpose === "register") {
                  {
                    isValid
                      ? setInputColor("green.500")
                      : setInputColor("red.400");
                  }
                }
              }}
              type={type}
              placeholder={text}
              size="md"
              name={name}
            />
          </InputGroup>

          {purpose === "register" && (
            <FormHelperText>
              <Flex>
                Your display name
                <Spacer />
                min 3 characters
              </Flex>
            </FormHelperText>
          )}
        </FormControl>
      </Flex>
    </>
  );
}
