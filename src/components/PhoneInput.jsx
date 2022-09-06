import React from 'react'
import { Input, InputGroup, InputLeftElement, InputLeftAddon, InputRightElement, } from '@chakra-ui/react'
import { PhoneIcon, SmallAddIcon } from '@chakra-ui/icons'

export default function PhoneInput({ handleChange, name, setState }) {
    return (
        <>
            <InputGroup mt="1.6rem">
                {/* <InputLeftElement h="100%"
                    pointerEvents='none'
                    children={<PhoneIcon />}
                /> */}
                <InputLeftElement
                    pointerEvents='none'
                    // bgColor="gray"
                    children={<SmallAddIcon />}
                />
                <Input
                    type='num'
                    placeholder='Phone number'
                    size='md'
                    name={name}
                    onChange={(e) => handleChange(e, setState)}
                />
            </InputGroup>

        </>
    )
}
