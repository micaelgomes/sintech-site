import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Button from "../Button";
import Title from "../Title";

const Faq: React.FC = () => {
  return (
    <Flex
      position="relative"
      width="100%"
      bgGradient="linear(to-b, #FFFFFF, #A7D5ED)"
    >
      <Flex
        px="4"
        alignItems="flex-start"
        flexDirection="column"
        width="100%"
        maxWidth={1200}
        mt="24"
        mb="48"
        mx="auto"
      >
        <Title variant="h1" maxWidth={500} mb="28">
          Perguntas Frequentes
        </Title>

        <HStack spacing={8} width="100%">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Stack
                key={i}
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={`/assets/ecnpj.svg`}
                  alt="ecnpj"
                  width="150px"
                  height="150px"
                />
                <Text
                  align="center"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="secondary"
                >
                  Perguntas frequentes sobre certificados para Pessoa Jurídica
                </Text>
                <Button variant="secondary">Ver perguntas frequentes</Button>
              </Stack>
            ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Faq;
