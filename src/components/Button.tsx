import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  return (
    <ChakraButton
      backgroundColor={variant}
      color="white"
      size="lg"
      p="8"
      borderRadius="2xl"
      fontSize="xl"
      shadow="sm"
      _hover={{ backgroundColor: variant, transform: "translateY(-5px)" }}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
