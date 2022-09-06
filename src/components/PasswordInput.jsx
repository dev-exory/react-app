import React, { useState } from "react"
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { LockIcon, RepeatIcon } from '@chakra-ui/icons'


export default function PasswordInput({ handleChange, text, name, setState, isInvalid }) {
    const [show, setShow] = useState(false)
    // const handleClick = () => setShow(!show)
    function handleClick() {
        setShow(!show)
    }

    return (
        <InputGroup mt="1.6rem">
            <InputLeftElement
                h="100%"
                pointerEvents='none'
                children={text === "Password" ? <LockIcon /> : <RepeatIcon />}
            />
            <Input
                isInvalid={isInvalid}
                errorBorderColor='red.300'
                onChange={(e) => handleChange(e, setState)}
                type={show ? 'text' : 'password'}
                placeholder={text}
                size="md"
                name={name}
            />
            <InputRightElement width='4.5rem' h="100%">
                <Button
                    h='1.75rem'
                    size='sm'
                    onClick={handleClick}
                >
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

