import React from "react";

import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

function LoginInput() {
    return (
        <InputGroup className="showElement" mt="2rem" w="100%">
            <InputLeftElement h="100%"
                pointerEvents='none'
                children={<EmailIcon />}
            />
            <Input type='text' placeholder='Email or username' size="lg" />
        </InputGroup>
    )
}


export default LoginInput;