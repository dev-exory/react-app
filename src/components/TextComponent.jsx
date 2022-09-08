import React from "react";
import { Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function TextComponent({ text, target }) {
  return (
    <Text mt="1rem" fontSize="sm" style={{ textAlign: "center" }}>
      <Link to={target}>{text}</Link>
    </Text>
  );
}
