import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import InputCheckout from "./inputCheckout";
import Subtitle from "./Subtitle";
import Title from "./Title";

const DadosCliente: React.FC = () => {
  return (
    <Flex
      px="4"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <HStack spacing={100}>
        <Stack flex={1}>
          <Title variant="h3" fontSize="6xl" mb="8">
            Últimos Cliques
          </Title>

          <FormControl>
            <InputCheckout
              type="cpf"
              label="Informe seu CPF:"
              error="Esse CPF já possui cadastro nos nossos sistemas"
            />
            <InputCheckout type="email" label="Informe ser E-mail:" />
            <InputCheckout type="password" label="Senha:" />

            <HStack spacing="15px" justifyContent="flex-end" my="8">
              <Button
                variant="secondary"
                backgroundColor="transparent"
                color="gray.600"
                shadow="none"
                _hover={{}}
              >
                Esqueci minha senha
              </Button>

              <Button variant="secondary">Entrar</Button>
            </HStack>
          </FormControl>
        </Stack>

        <Stack flex={1}>
          <Title variant="h3" fontSize="5xl" mb="8">
            Resumo do Pedido
          </Title>

          <HStack>
            <Stack flex={1}>
              <Box mb="4">
                <Title variant="h3" fontSize="3xl" mb="2">
                  e-CPF A3 | Token
                </Title>
                <Text color="gray.600">
                  Descrição sobre o produto e-CPF A3, com dispositivo token.
                </Text>
              </Box>

              <Title variant="h3" fontSize="2xl">
                Válido por 12 meses
              </Title>
            </Stack>

            <Box flex={1}>
              <Image
                src="/token.png"
                alt="Logo da Sintech"
                width={250}
                height={200}
              />
            </Box>
          </HStack>

          <HStack alignItems="flex-end">
            <FormControl>
              <InputCheckout type="code" label="Código de Desconto" />
            </FormControl>
            <Button variant="primary" height="10px">
              Aplicar
            </Button>
          </HStack>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default DadosCliente;
