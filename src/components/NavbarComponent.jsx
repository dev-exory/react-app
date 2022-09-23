import React from "react";
import { Flex, Spacer, Button, Box, Heading } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
function NavbarComponent() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex minWidth="max-content" alignItems="center" className="showElement">
      <img width="200px" height="200px" src={logo} className="nav-logo" />
      <Spacer />
      <Button
        size="md"
        m="20px"
        w="70px"
        onClick={toggleColorMode}
        borderRadius="12px"
      >
        <MoonIcon />
      </Button>
    </Flex>
  );
}

export default NavbarComponent;
