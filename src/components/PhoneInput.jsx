import React, { useState, useEffect } from "react";
import { Input, InputGroup, InputLeftElement, Flex } from "@chakra-ui/react";
import { PhoneIcon, CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import FormIcon from "./FormIcon";
import images from "../assets/flags/importImages";
export default function PhoneInput({
  logoPath,
  countryCodeMatch,
  handleChange,
  setState,
}) {
  function handleFocus(event) {
    event.target.value = "+";
  }

  return (
    <>
      <Flex>
        <FormControl mt="1rem">
          <FormLabel>Phone number</FormLabel>
          <InputGroup>
            {logoPath != "" ? (
              <InputLeftElement
                pointerEvents="none"
                children={
                  <img
                    src={logoPath}
                    width="20px"
                    height="20px"
                    style={{
                      opacity: countryCodeMatch ? "1" : "0.5",
                      border: "1px solid black",
                    }}
                  />
                }
              />
            ) : (
              <InputLeftElement
                pointerEvents="none"
                children={
                  <img
                    src={images["pl.svg"]}
                    width="20px"
                    height="20px"
                    style={{ opacity: "0.5" }}
                  />
                }
              />
            )}

            <Input
              type="num"
              width="100px"
              placeholder="+48"
              name="countryCode"
              onFocus={handleFocus}
              onChange={(e) => handleChange(e, setState)}
            />
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<PhoneIcon />} />
              <Input
                type="number"
                placeholder="Phone number"
                size="md"
                name="phoneNumber"
                onChange={(e) => handleChange(e, setState)}
              />
              <FormIcon />
            </InputGroup>
          </InputGroup>
          <FormHelperText>Needed for account recovery</FormHelperText>
        </FormControl>
      </Flex>
    </>
  );
}
