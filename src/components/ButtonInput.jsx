import React from "react";

import { useToast, Button } from "@chakra-ui/react";
function ButtonInput({ text, toastType }) {
  const toast = useToast();

  return (
    <Button
      size="md"
      mt="1.6rem"
      w="100%"
      bg="#e12b37"
      borderRadius="10"
      color="white"
      _hover={{
        bg: "#b3222b",
      }}
      onClick={() => {
        console.log(toastType);
        if (toastType === "account") {
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else if (toastType === "error") {
          toast({
            title: "Wrong code",
            description: "Try to resend the verification code",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }}
    >
      {text}
    </Button>
  );
}

export default ButtonInput;
