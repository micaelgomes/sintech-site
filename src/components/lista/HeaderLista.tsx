import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { memo, useState } from "react";

import Title from "../globals/Title";
import ListItemProduto from "../info/ListItemProduto.tsx/ListItemProduto";
import Switch from "react-input-switch";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ButtonValidade from "./ButtonValidade";
import ButtonSPlus from "./ButtonSPlus";

import { motion } from "framer-motion";

const HeaderInfo: React.FC = () => {
  const [currShowed, setCurrShowed] = useState<number>(0);
  const [toMe, setToMe] = useState(false);

  return (
    <Flex
      px="4"
      pb="24"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <HStack alignItems="flex-start" spacing={10}>
        <Box flex={1} zIndex={-5}>
          <Image
            src="/sample.webp"
            alt="Homem usando celular"
            width="600px"
            height="1000px"
          />
        </Box>

        <Stack flex={1} flexBasis={400}>
          <Stack alignItems="center">
            <Title variant="h3" fontSize="4xl">
              Pra quem é o Certificado?
            </Title>

            <HStack pt="4" pb="10">
              <Text fontWeight="bold" color="secondary">
                Para Mim
              </Text>
              {/* <Switch id="email-alerts" /> */}
              <Switch
                value={toMe}
                onChange={setToMe}
                styles={{
                  container: {
                    width: 36,
                    height: 19,
                  },
                  track: {
                    borderRadius: 10,
                    backgroundColor: "#194F69",
                  },
                  trackChecked: {
                    backgroundColor: "#194F69",
                  },
                  button: {
                    top: 3,
                    bottom: 3,
                    left: 3,
                    right: 19,
                    backgroundColor: "#F5F5F3",
                  },
                  buttonChecked: {
                    top: 3,
                    bottom: 3,
                    left: 19,
                    right: 3,
                    backgroundColor: "#F5F5F3",
                  },
                }}
              />
              <Text fontWeight="medium">Para minha Empresa</Text>
            </HStack>

            <HStack spacing="30px" alignItems="stretch">
              <Stack spacing="15px" flex={1}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <ListItemProduto
                      index={i}
                      curr={currShowed}
                      setCurr={setCurrShowed}
                    />
                  ))}
              </Stack>

              <Stack flex={1} minHeight={520}>
                <Stack
                  flexBasis="100%"
                  background="secondary"
                  px="6"
                  py="4"
                  borderRadius="2xl"
                >
                  <Text
                    color="white"
                    textAlign="center"
                    fontSize="3xl"
                    fontWeight="bold"
                  >
                    e-CPF A3 | Token
                  </Text>

                  <HStack flex={1} pb="14">
                    <Stack flex={1} alignItems="center">
                      <Text
                        color="white"
                        fontSize="3xl"
                        fontWeight="semibold"
                        mb="-3"
                      >
                        R$ 199,99
                      </Text>
                      <Text color="white" fontSize="xl" fontWeight="semibold">
                        6x de 33,34
                      </Text>
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

                  <Stack position="relative" pb="1">
                    <ButtonValidade qtdMonths={[12, 24, 36]} />
                    <ButtonSPlus description="" />
                  </Stack>

                  <Button
                    backgroundColor="primary"
                    color="white"
                    borderRadius="xl"
                    size="lg"
                    fontSize="2xl"
                    fontWeight="bold"
                    p="8"
                    disabled
                    _hover={{}}
                    _active={{}}
                  >
                    Comprar
                  </Button>
                </Stack>

                <Stack
                  display="none"
                  background="secondary"
                  px="6"
                  py="4"
                  borderRadius="2xl"
                >
                  <Text color="white" fontSize="xl" fontWeight="bold">
                    O que é o Token?
                  </Text>
                  <Text color="white" my="4">
                    Nunc id justo eget lacus pulvinar iaculis sit amet a felis.
                    Vivamus vitae bibendum nibh, ac tristique urna. Quisque ac
                    est vitae arcu interdum dapibus id nec justo.
                  </Text>
                </Stack>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default memo(HeaderInfo);
