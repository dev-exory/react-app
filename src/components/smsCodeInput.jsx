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
          Verification code
        </FormLabel>

        <PinInput type="alphanumeric" size="lg" width="30px">
          <PinInputField margin="10px 10px 10px 0px" />
          <PinInputField margin="10px" />
          <PinInputField margin="10px" />
          <PinInputField margin="10px" />
          <PinInputField margin="10px" />
        </PinInput>

        <FormHelperText>
          Verification code sent at provided phone number.
        </FormHelperText>
        {/* <Button borderRadius="md" color="white" size="md">
          Resend
        </Button> */}
      </FormControl>
    </Container>
  );
}
