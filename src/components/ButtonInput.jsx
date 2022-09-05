import React from "react";
import { Button } from "@chakra-ui/react"

function ButtonInput(props) {

    return (
        <Button
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
            {props.text}
        </Button>
    )
}



export default ButtonInput;