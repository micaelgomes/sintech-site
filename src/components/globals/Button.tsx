import React from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
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
      _active={{}}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
