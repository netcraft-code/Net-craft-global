import React from "react";
import { Button, Title, Text } from "@mantine/core";
// import { useAuth } from "../contexts/AuthContext";

export default function Home() {
//   const { user, loginDemo } = useAuth();

  return (
    <div>
      <Title order={2}>Home</Title>
      
        <Text mt="md">Welcome</Text>
     
    </div>
  );
}
