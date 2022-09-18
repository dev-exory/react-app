import React from "react";
import {
  HStack,
  PinInput,
  PinInputField,
  FormControl,
  Container,
  FormHelperText,
  FormLabel,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";

export default function CodeInput() {
  return (
    <Container mt="50px" textAlign="center">
      <FormControl>
        <FormLabel width="100%" textAlign="center">
          Verification code{" "}
        </FormLabel>

        <PinInput type="alphanumeric" size="lg" width="30px">
          <PinInputField margin="10px 10px 10px 0px" />
          <PinInputField margin="10px" />
          <PinInputField margin="10px" />
          <PinInputField margin="10px" />
          <PinInputField margin="10px" />
        </PinInput>

        <FormHelperText>Please input the sms code here.</FormHelperText>
        <Button
          color="white"
          size="md"
          mt="20px"
          bgColor="green.600"
          _hover={{ backgroundColor: "green.700" }}
        >
          Send again
        </Button>
      </FormControl>
    </Container>
  );
}
