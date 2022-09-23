import React from "react";

import { useToast, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ButtonInput({ text, toastType }) {
  const toast = useToast();

  const navigate = useNavigate();

  const handleToast = (toastTitle, toastDesc, toastStatus) => {
    toast({
      title: toastTitle,
      description: toastDesc,
      status: toastStatus,
      duration: 5000,
      isClosable: true,
    });
    return;
  };

  return (
    <>
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
          if (toastType === "validRegister") {
            handleToast(
              "Account created",
              "Sms code sent at your phone number",
              "success"
            );
            navigate("/verify");
          } else if (toastType === "invalidRegister") {
            handleToast(
              "Invalid inputs",
              "Make sure every input is valid and try again",
              "error"
            );
          } else if (toastType === "activated") {
            handleToast(
              "Account verified",
              "You can login to your account",
              "success"
            );
            navigate("/login");
          } else if (toastType === "noActivated") {
            handleToast("Invalid code", "Try to resend the code", "error");
          }
        }}
      >
        {text}
      </Button>
    </>
  );
}

export default ButtonInput;
