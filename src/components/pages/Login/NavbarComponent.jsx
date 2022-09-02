import React from "react";
import logo192 from "../../../assets/logo192.png";
import { Flex, Spacer, Button, Box, Heading } from '@chakra-ui/react'
import { MoonIcon } from "@chakra-ui/icons"
import { useColorMode } from '@chakra-ui/react'


function NavbarComponent() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex minWidth='max-content' alignItems='center' className="showElement">
            {/* <Box >
                <Heading size="md" m='20px' fontSize="3rem">Exory</Heading>
            </Box> */}
            {/* <img src={logo192} width='100px' height='100px' /> */}
            <Spacer />
            <Button
                size='md'
                m='25px'
                w='90px'
                onClick={toggleColorMode}
                borderRadius='12px'
            >
                <MoonIcon />
            </Button>
        </Flex>
    )
}


export default NavbarComponent;