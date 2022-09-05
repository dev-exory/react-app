import React, { useState } from "react"
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { LockIcon, RepeatIcon } from '@chakra-ui/icons'


function PasswordInput(props) {
    const [show, setShow] = useState(false)
    // const handleClick = () => setShow(!show)
    function handleClick() {
        setShow(!show)
    }

    return (
        <InputGroup mt="2rem">
            <InputLeftElement h="100%"
                pointerEvents='none'
                children={props.text === "Password" ? <LockIcon /> : <RepeatIcon />}
            />
            <Input type={show ? 'text' : 'password'} placeholder={props.text} size="lg" />
            <InputRightElement width='4.5rem' h="100%">
                <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}


export default PasswordInput;