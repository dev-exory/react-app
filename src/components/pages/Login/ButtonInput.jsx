import React from "react";
import { Button } from "@chakra-ui/react"

function ButtonInput() {

    return (
        <Button
            className="showElement"
            size="lg"
            mt="2rem"
            w="100%"
            bg="#e12b37"
            borderRadius="10"
            color="white"
            _hover={{
                bg: "#b3222b",
            }}
        >
            Login
        </Button>
    )
}



export default ButtonInput;