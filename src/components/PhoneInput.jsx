import React from 'react'
import { Input, InputGroup, InputLeftElement, InputLeftAddon, InputRightElement, } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

export default function PhoneInput({ handleChange, name, setState }) {
    return (
        <>
            <InputGroup mt="2rem" size='lg' >
                {/* <InputLeftElement h="100%"
                    pointerEvents='none'
                    children={<PhoneIcon />}
                /> */}
                <InputLeftAddon children="+" />
                <Input
                    type='num'
                    placeholder='phone number'
                    size='lg'
                    name={name}
                    onChange={(e) => handleChange(e, setState)}
                />
            </InputGroup>

        </>
    )
}
