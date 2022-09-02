import React from "react";
import { Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";
function TextComponent() {
    return (
        <Text mt="1rem" className="showElement">
            <Link to="register">
                asda
            </Link>
        </Text>
    )
}

export default TextComponent;