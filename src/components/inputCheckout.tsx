import { FormHelperText, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React from "react";

type InputCheckoutProps = {
  type: string;
  label: string;
  error?: string;
} & InputProps;

const InputCheckout: React.FC<InputCheckoutProps> = ({
  type,
  label,
  error,
  ...props
}) => {
  return (
    <>
      <FormLabel
        htmlFor={type}
        color="secondary"
        fontWeight="bold"
        ml="3"
        pt="4"
      >
        {label}
      </FormLabel>

      <Input
        id={type}
        type={type}
        backgroundColor="whiteAlpha.600"
        border="2px solid"
        borderColor="secondary"
        size="lg"
        borderRadius="2xl"
        {...props}
      />

      {error && (
        <FormHelperText
          color="red.700"
          fontSize="xl"
          fontWeight="bold"
          ml="4"
          mb="6"
        >
          {error}
        </FormHelperText>
      )}
    </>
  );
};

export default InputCheckout;
