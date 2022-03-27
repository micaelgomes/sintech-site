import { Box, Flex, HStack, Stack, Switch, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { BiChevronDown } from "react-icons/bi";

import Title from "./Title";
import ListItemProduto from "./info/ListItemProduto.tsx/ListItemProduto";

const HeaderInfo: React.FC = () => {
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

            <HStack pt="4" pb="6">
              <Text fontWeight="medium">Para Mim</Text>
              <Switch id="email-alerts" />
              <Text fontWeight="medium">Para minha Empresa</Text>
            </HStack>

            <HStack spacing="30px" alignItems="stretch">
              <Stack spacing="20px" flex={1}>
                <ListItemProduto />
                <ListItemProduto />
                <ListItemProduto />
                <ListItemProduto />
                <ListItemProduto />
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

export default HeaderInfo;
