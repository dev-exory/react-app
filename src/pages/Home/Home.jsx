import React, { useEffect, useState, useDisclosure } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Home({ user }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token === null) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <>
      <h1>{user && user.name}</h1>
      <Button onClick={logout}>Logout</Button>
    </>
  );
}
