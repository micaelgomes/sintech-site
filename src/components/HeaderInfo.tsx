import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { memo, useState } from "react";
import Button from "./Button";
import { BiChevronDown } from "react-icons/bi";

import Title from "./Title";
import ListItemProduto from "./info/ListItemProduto.tsx/ListItemProduto";
import Switch from "react-input-switch";

const HeaderInfo: React.FC = () => {
  const [currShowed, setCurrShowed] = useState<number>();
  const [toMe, setToMe] = useState(false);

  return (
    <Flex
      px="4"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <HStack alignItems="flex-start" spacing={10}>
        <Box flex={1} zIndex={-5}>
          <Image
            src="/infos.png"
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
                    height: 20,
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
                    right: 18,
                    backgroundColor: "#F5F5F3",
                  },
                  buttonChecked: {
                    top: 3,
                    bottom: 3,
                    left: 18,
                    right: 3,
                    backgroundColor: "#F5F5F3",
                  },
                }}
              />
              ;<Text fontWeight="medium">Para minha Empresa</Text>
            </HStack>

            <HStack spacing="30px" alignItems="stretch">
              <Stack spacing="20px" flex={1}>
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

              <Stack
                flex={1}
                background="secondary"
                px="6"
                py="4"
                borderRadius="2xl"
              >
                <Text color="white" fontSize="xl" fontWeight="bold">
                  Sobre o e-CPF
                </Text>
                <Text color="white" my="4">
                  Nunc id justo eget lacus pulvinar iaculis sit amet a felis.
                  Vivamus vitae bibendum nibh, ac tristique urna. Quisque ac est
                  vitae arcu interdum dapibus id nec justo. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Suspendisse a velit quis magna fermentum finibus eget
                  eget lectus.
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default memo(HeaderInfo);
