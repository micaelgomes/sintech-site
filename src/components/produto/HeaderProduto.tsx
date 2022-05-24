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
import Button from "../globals/Button";
import Navbar from "../globals/Navbar";

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

      <Box
        position="relative"
        width="100%"
        zIndex={0}
        _after={{
          content: '""',
          position: "absolute",
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
          background: "white",
          bottom: "0",
          left: -100,
          right: -100,
          zIndex: 1,
          height: 85,
        }}
        _before={{
          content: '""',
          position: "absolute",
          height: 1000,
          width: "100%",
          zIndex: -1,
          opacity: 0.75,
          background: "url('/logo_sintech_body.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Flex
          position="relative"
          px="4"
          pb="24"
          flexDirection="column"
          justifyContent="center"
          width="100%"
          height="100%"
          maxWidth={1200}
          m="auto"
          minHeight={[
            "calc(100vh + 400px)",
            "calc(100vh - 300px)",
            "calc(100vh - 196px)",
          ]}
        >
          <Box
            backgroundColor="white"
            p="4"
            borderRadius="xl"
            mb="6"
            shadow="lg"
          >
            <Text fontSize="3xl" fontWeight="semibold" color="secondary">
              e-CPF
            </Text>
          </Box>

          <HStack alignItems="stretch" spacing={30} flexWrap="wrap">
            <Stack flex={1} width="100%" flexBasis={500}>
              <Flex mb="4" gap="15px" overflowX="auto">
                <ButtonChakra
                  backgroundColor="secondary"
                  borderRadius="xl"
                  p="4"
                  height="60px"
                  width="100%"
                  minWidth="150px"
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

                <ButtonChakra
                  borderRadius="xl"
                  p="4"
                  height="60px"
                  width="100%"
                  minWidth="150px"
                >
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
                width="100%"
                minHeight={["100vh", "350px"]}
              >
                {textContent}
              </Box>
            </Stack>

            <Flex
              display={["none", "none", "flex"]}
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

          <Box display={["block", "block", "none"]} width="100%" pt="8">
            <Button variant="primary" width="100%" mx="1">
              Comprar
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HeaderProduto;
