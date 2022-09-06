import React from "react";

import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { EmailIcon, InfoIcon, RepeatIcon } from '@chakra-ui/icons'

export default function UsernameInput({ handleChange, type, name, text, setState }) {
    return (
        <InputGroup mt="2rem" w="100%">
            <InputLeftElement
                h="100%"
                pointerEvents='none'
                children={type === "text" ? <InfoIcon /> : <EmailIcon />}
            />
            <Input
                onChange={(e) => handleChange(e, setState)}
                type={type}
                placeholder={text}
                size="lg"
                name={name} />
        </InputGroup>
    )
}

