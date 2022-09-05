import React from "react";
import { Text } from '@chakra-ui/react'

import { Link } from 'react-router-dom'


function TextComponent({ text, target }) {
    return (
        <Text mt="1rem" >
            <Link to={target}>
                {text}
            </Link>
        </Text>
    )
}

export default TextComponent;