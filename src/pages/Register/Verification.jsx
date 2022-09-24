import React, { useState } from "react";
import CodeInput from "../../components/smsCodeInput";
import ButtonInput from "../../components/ButtonInput";
import MainLogo from "../../components/MainLogo";
import TextComponent from "../../components/TextComponent";
import { Button, VStack, useToast } from "@chakra-ui/react";

export default function Verification() {
  const [activation, setActivation] = useState("activated");
  const toast = useToast();

  const handleToast = (toastTitle, toastDesc, toastStatus) => {
    toast({
      title: toastTitle,
      description: toastDesc,
      status: toastStatus,
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <MainLogo />
      <CodeInput />
      <VStack>
        <Button
          color="white"
          size="md"
          mt="20px"
          bgColor="green.600"
          onClick={() => {
            handleToast("Code Send", "", "info");
          }}
          _hover={{ backgroundColor: "green.700" }}
        >
          Send again
        </Button>
      </VStack>

      <ButtonInput text="Verify" toastType={activation} />
      <TextComponent text="Back to register" target="/register" />
    </>
  );
}
