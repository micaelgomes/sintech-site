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
    <>
      <Box position="relative">
        <Box
          position="absolute"
          backgroundColor="white"
          opacity={0.75}
          borderRightRadius="3xl"
          top="40%"
          py="28"
          px="24"
          width="container.md"
          textAlign="right"
        >
          <Heading
            color="secondary"
            fontSize="7xl"
            textAlign="right"
            pl="4"
            lineHeight={0.95}
          >
            Video Chamada
          </Heading>
          <Text fontSize="2xl" fontWeight="thin" mt="6">
            Pensando nisso, a Sintech oferece serviços para trazer comodidade,
            agilidade, segurança e garantia nas atividades de seus clientes pelo
            meio digital.
          </Text>
        </Box>

        <Box
          position="absolute"
          borderTopLeftRadius="3xl"
          borderBottomLeftRadius="3xl"
          top="calc(40% + 550px)"
          right={0}
          py="12"
          px="24"
          width={600}
          zIndex={0}
          textAlign="right"
          _before={{
            content: '""',
            backgroundColor: "white",
            opacity: 0.75,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            zIndex: -1,
            borderLeftRadius: "1.5rem",
          }}
        >
          <HStack>
            {Array(3)
              .fill(0)
              .map(() => (
                <Box
                  backgroundColor="secondary"
                  width={100}
                  height={2}
                  borderRadius="lg"
                  cursor="pointer"
                />
              ))}
          </HStack>
        </Box>

        <Image
          src="/woman.png"
          alt="mulher olhando o celular"
          width="1920px"
          height="100%"
        />
      </Box>
      <Flex
        px="4"
        alignItems="flex-start"
        flexDirection="column"
        width="100%"
        maxWidth={1200}
        my="24"
      >
        <Title variant="h1" maxWidth={500} mb="28">
          Perguntas Frequentes
        </Title>

        <HStack spacing={8} width="100%">
          {Array(3)
            .fill(0)
            .map(() => (
              <Stack spacing={4} justifyContent="center" alignItems="center">
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
    </>
  );
};

export default Faq;
