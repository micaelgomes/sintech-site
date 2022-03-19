import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
  Button as ButtonChakra,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "./Button";
import Navbar from "./Navbar";

const HeaderProduto: React.FC = () => {
  const [textContent, setTextContent] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque et purus et orci mattis feugiat. Nam quis scelerisquetortor. Mauris odio nulla, tempor sit amet laoreet at, eleifend idneque. Donec vel nisl eget nisi congue consequat quis non enim.Duis bibendum in risus a commodo. Sed vel interdum sem. Inscelerisque mauris efficitur, tristique mi at, auctor lorem. Sedrisus ligula, facilisis sed nibh sit amet, luctus tincidunt nulla.Cras venenatis odio a nulla congue, nec consequat purus vehicula.Fusce ornare id arcu in semper. Nullam placerat dignissimsuscipit. Ut et sapien gravida ante tempor efficitur. Maurisultricies mauris enim, sit amet pretium ante hendrerit at. Crastincidunt felis eu sapien lacinia, sit amet tempus nullafermentum."
  );

  return (
    <Flex
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgGradient="linear(to-b, #A4D6ED, #E5EDF0)"
    >
      <Navbar />
      <Flex
        position="relative"
        px="4"
        pb="36"
        flexDirection="column"
        justifyContent="center"
        width="100%"
        maxWidth={1200}
        minHeight="calc(100vh)"
        zIndex={0}
        _before={{
          content: '""',
          position: "absolute",
          height: 1000,
          width: "100%",
          left: -300,
          bottom: -150,
          zIndex: -5,
          opacity: 0.75,
          background: "url('/logo_sintech_body.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        _after={{
          content: '""',
          position: "absolute",
          height: 400,
          left: -750,
          right: -750,
          bottom: -250,
          zIndex: 0,
          backgroundColor: "#FFF",
          borderRadius: "100%",
        }}
      >
        <Box backgroundColor="white" p="4" borderRadius="xl" mb="6" shadow="lg">
          <Text fontSize="3xl" fontWeight="semibold" color="secondary">
            e-CPF
          </Text>
        </Box>

        <HStack alignItems="stretch" spacing={30}>
          <Stack flex={1} flexBasis={500}>
            <Flex mb="4" gap="15px">
              <ButtonChakra
                backgroundColor="secondary"
                borderRadius="xl"
                p="4"
                height="60px"
                width="100%"
                _hover={{
                  backgroundColor: "secondary",
                }}
                _pressed={{
                  backgroundColor: "secondary",
                }}
              >
                <Text color="white" fontWeight="semibold" whiteSpace="nowrap">
                  O que é?
                </Text>
              </ButtonChakra>

              <ButtonChakra
                borderRadius="xl"
                p="4"
                height="60px"
                width="100%"
                minWidth="unset"
                onClick={() =>
                  setTextContent(
                    "alisson.php é site com qualidade! (menos pro Gov)"
                  )
                }
              >
                <Text color="secondary" fontWeight="semibold">
                  Quais são as Etapas?
                </Text>
              </ButtonChakra>

              <ButtonChakra
                borderRadius="xl"
                p="4"
                height="60px"
                width="100%"
                minWidth="unset"
              >
                <Text
                  color="secondary"
                  fontWeight="semibold"
                  whiteSpace="nowrap"
                >
                  Documentos necessários
                </Text>
              </ButtonChakra>

              <ButtonChakra borderRadius="xl" p="4" height="60px" width="100%">
                <Text color="secondary" fontWeight="semibold">
                  Normas
                </Text>
              </ButtonChakra>
            </Flex>

            <Box
              backgroundColor="white"
              p="8"
              borderRadius="xl"
              fontWeight="medium"
              fontSize="xl"
              color="secondary"
            >
              {textContent}
            </Box>
          </Stack>

          <Flex
            flex={1}
            flexDirection="column"
            flexGrow={0}
            backgroundColor="secondary"
            borderRadius="xl"
            p="5"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text color="white" fontSize="4xl" fontWeight="bold">
              e-CPF
            </Text>

            <Image
              flex={1}
              src={`/assets/ecpf.svg`}
              alt="e-CPF icon"
              width="100%"
              height="100%"
              p="12"
            />

            <Button variant="primary" width="100%" mx="1">
              Comprar
            </Button>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default HeaderProduto;
