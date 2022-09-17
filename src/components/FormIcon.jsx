import React from "react";
import { Icon, Spacer, Center } from "@chakra-ui/react";
import { CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons";
export default function FormIcon({ isValid }) {
  return (
    <>
      <Icon
        as={isValid === true ? CheckCircleIcon : NotAllowedIcon}
        width="20px"
        height="20px"
        color={isValid === true ? "green" : "#e12b37"}
        ml="5px"
      ></Icon>
    </>
  );
}
