import React from "react";

import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { EmailIcon, InfoIcon, RepeatIcon } from '@chakra-ui/icons'

function LoginInput(props) {
    return (
        <InputGroup mt="2rem" w="100%">
            <InputLeftElement h="100%"
                pointerEvents='none'
                children={props.type === "text" ? <InfoIcon /> : <EmailIcon />}
            />
            <Input type={props.type} placeholder={props.text} size="lg" />
        </InputGroup>
    )
}


export default LoginInput;