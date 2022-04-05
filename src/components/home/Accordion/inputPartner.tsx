import { Box, FormHelperText, Input, InputProps } from "@chakra-ui/react";
import React from "react";

type InputPartnerProps = {
  id: string;
  textSupport?: string;
} & InputProps;

const InputPartner: React.FC<InputPartnerProps> = ({
  id,
  textSupport,
  ...props
}) => {
  return (
    <Box my="2" flex={1}>
      <Input
        id={id}
        type="email"
        backgroundColor="white"
        size="lg"
        _placeholder={{ fontWeight: 700, color: "gray.400" }}
        {...props}
      />
      {textSupport && (
        <FormHelperText>We'll never share your email.</FormHelperText>
      )}
    </Box>
  );
};

export default InputPartner;
