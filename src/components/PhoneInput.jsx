import React from 'react'
import { Input, InputGroup, InputLeftElement, InputLeftAddon, InputRightElement, Stack, Button, Image, Flex, Box, Spacer, Text } from '@chakra-ui/react'
import { VStack, Container } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import xd from '../assets/flags/1x1/pl.svg'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

import countries from "../assets/flags/countries.json"

import images from "../assets/flags/importImages"

console.log(images['pl.svg'])
export default function () {
    return (
        <>
            <InputGroup mt="2rem" size='lg' >
                {/* <InputLeftElement h="100%"
                    pointerEvents='none'
                    children={<PhoneIcon />}
                /> */}
                <InputLeftAddon children="+" />
                <Input type='num' placeholder='phone number' size='lg' />
            </InputGroup>

        </>
    )
}
