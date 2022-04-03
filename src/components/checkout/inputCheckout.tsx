import {
  Box,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
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
    <Box>
      <FormLabel
        htmlFor={type}
        color="secondary"
        fontWeight="semibold"
        ml="2"
        pt="4"
      >
        {label}
      </FormLabel>

      <Input
        id={type}
        type={type}
        backgroundColor="whiteAlpha.500"
        border="2px solid"
        borderColor="secondary"
        height="14"
        borderRadius="2xl"
        {...props}
      />

      {error && (
        <FormHelperText color="red.700" fontWeight="semibold" ml="2">
          {error}
        </FormHelperText>
      )}
    </Box>
  );
};

export default InputCheckout;
