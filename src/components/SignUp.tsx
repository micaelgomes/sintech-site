import { FormControl, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import InputCheckout from "./inputCheckout";

const SignUp: React.FC = () => {
  return (
    <FormControl>
      <InputCheckout type="cpf" label="Informe seu CPF:" />

      <HStack spacing={30}>
        <InputCheckout type="date" label="Data de Nascimento" />
        <InputCheckout type="tel" label="Telefone" />
      </HStack>

      <InputCheckout type="--" label="Nome completo:" />
      <InputCheckout type="--" label="E-mail:" />
      <InputCheckout type="--" label="Criar Senha:" />

      <HStack justifyContent="flex-end" my="8">
        <Button variant="secondary">Salvar</Button>
      </HStack>
    </FormControl>
  );
};

export default SignUp;
