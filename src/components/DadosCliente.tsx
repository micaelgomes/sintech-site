import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Title from "./Title";

const DadosCliente: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Flex
      px="4"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <HStack spacing={150} alignItems="flex-start">
        <Stack flex={1} maxWidth={500}>
          <Title variant="h3" fontSize="5xl">
            Últimos Cliques
          </Title>

          {!isLogged ? <SignIn /> : <SignUp />}
        </Stack>

        <Stack flex={1}>
          <Title variant="h3" fontSize="4xl">
            Resumo do Pedido
          </Title>

          <HStack>
            <Stack flex={1}>
              <Box mb="4">
                <Title variant="h3" fontSize="2xl" mb="2">
                  e-CPF A3 | Token
                </Title>
                <Text color="gray.600" fontSize="lg">
                  Descrição sobre o produto e-CPF A3, com dispositivo token.
                </Text>
              </Box>

              <Title variant="h3" fontSize="xl">
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

          <HStack alignItems="flex-end" py="4">
            <FormControl>
              <FormLabel
                htmlFor="codigo-desconto"
                color="gray.800"
                fontWeight="medium"
                ml="2"
              >
                Código de Desconto
              </FormLabel>

              <Input
                id="codigo-desconto"
                type="text"
                backgroundColor="whiteAlpha.500"
                border="2px solid"
                borderColor="primary"
                borderRadius="2xl"
                height="64px"
              />

              <FormHelperText
                display="none"
                color="red.700"
                fontSize="xl"
                fontWeight="bold"
                ml="4"
                mb="6"
              >
                Códido não pode ser aplicado
              </FormHelperText>
            </FormControl>
            <Button variant="primary" height="10px">
              Aplicar
            </Button>
          </HStack>

          <Stack pt="6">
            <Flex py="2">
              <Text color="gray.800" fontWeight="medium">
                Sub total
              </Text>
              <Spacer />
              <Text color="gray.800" fontWeight="medium">
                R$ 199,99
              </Text>
            </Flex>

            <Flex py="2">
              <Text color="gray.800" fontWeight="medium">
                Adicional S.Plus
              </Text>
              <Spacer />
              <Text color="gray.800" fontWeight="medium">
                R$ 50,99
              </Text>
            </Flex>

            <Flex py="2">
              <Text color="gray.800" fontWeight="medium">
                Descontos
              </Text>
              <Spacer />
              <Text color="gray.800" fontWeight="medium">
                R$ 00,00
              </Text>
            </Flex>

            <Flex py="2" pb="8">
              <Text color="gray.800" fontWeight="bold">
                Total
              </Text>
              <Spacer />
              <Text color="gray.800" fontWeight="bold">
                R$ 249,99
              </Text>
            </Flex>

            <Button variant="primary">
              <Text>Efetuar Pagamento</Text>
            </Button>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default DadosCliente;
