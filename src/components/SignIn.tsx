import { FormControl, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import InputCheckout from "./inputCheckout";

const SignIn: React.FC = () => {
  return (
    <FormControl>
      <InputCheckout type="cpf" label="Informe seu CPF:" />
      <InputCheckout type="email" label="Informe ser E-mail:" />
      <InputCheckout type="password" label="Senha:" />

      <HStack justifyContent="space-between" my="8">
        <Link href="/">
          <Text
            position="relative"
            color="gray.700"
            fontSize="lg"
            _after={{
              content: '""',
              position: "absolute",
              height: "1px",
              width: "100%",
              left: 0,
              backgroundColor: "gray.700",
              bottom: 0,
            }}
            cursor="pointer"
          >
            Esqueci minha senha
          </Text>
        </Link>

        <Button variant="secondary">Entrar</Button>
      </HStack>
    </FormControl>
  );
};

export default SignIn;
