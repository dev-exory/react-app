import React from "react";
import { Icon, Spacer, Center } from "@chakra-ui/react";
import { CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons";
export default function FormIcon() {
  return (
    <>
      <Spacer />
      <Center>
        <Icon
          as={CheckCircleIcon}
          width="20px"
          height="20px"
          color="green"
          ml="5px"
        ></Icon>
      </Center>
    </>
  );
}
