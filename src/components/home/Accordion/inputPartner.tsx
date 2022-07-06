import {
  FormControl,
  FormErrorMessage,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type InputPartnerProps = {
  id: string;
  errors?: any;
  register: UseFormRegister<FieldValues>;
} & InputProps;

const InputPartner: React.FC<InputPartnerProps> = ({
  id,
  errors,
  name,
  register,
  ...props
}) => {
  return (
    <FormControl my="2" flex={1} isInvalid={errors?.[name]}>
      <Input
        id={id}
        name={name}
        backgroundColor="white"
        size="lg"
        _placeholder={{ fontWeight: 700, color: "gray.400" }}
        {...props}
        {...register(name, {
          required: "Campo Obrigatório",
        })}
      />
      {errors?.[name] && (
        <FormErrorMessage>{errors?.[name].message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputPartner;
