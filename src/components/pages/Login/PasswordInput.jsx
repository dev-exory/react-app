import React, { useState } from "react"
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { LockIcon } from '@chakra-ui/icons'


function PasswordInput() {
    const [show, setShow] = useState(false)
    // const handleClick = () => setShow(!show)
    function handleClick() {
        setShow(!show)
    }

    return (
        <InputGroup className="showElement" mt="2rem">
            <InputLeftElement h="100%"
                pointerEvents='none'
                children={<LockIcon />}
            />
            <Input type={show ? 'text' : 'password'} placeholder='Password' size="lg" />
            <InputRightElement width='4.5rem' h="100%">
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}


export default PasswordInput;