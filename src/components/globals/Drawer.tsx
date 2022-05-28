import React from "react";
import DrawerModern from "react-modern-drawer";

import { useDrawer } from "../../context/drawer";
import { Box, Flex, HStack, Stack, Text, Wrap } from "@chakra-ui/react";

import "react-modern-drawer/dist/index.css";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import Image from "next/image";

const Drawer = () => {
  const { isOpen, toggleDrawer } = useDrawer();

  return (
    <DrawerModern
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      style={{ width: "auto", backgroundColor: "#F1F1F1" }}
    >
      <Wrap direction="column" width={["xs"]} px="8" py="2">
        <Box cursor="pointer">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo sintech"
              width="150px"
              height="100%"
            />
          </Link>
        </Box>

        <Text
          fontWeight="semibold"
          fontSize={["xl", "2xl"]}
          pb="4"
          pl="2"
          onClick={toggleDrawer}
        >
          <Link href="/">Início</Link>
        </Text>
        <Text
          fontWeight="semibold"
          fontSize={["xl", "2xl"]}
          pb="4"
          pl="2"
          onClick={toggleDrawer}
        >
          <Link href="/produto">Produtos</Link>
        </Text>
        <Text
          fontWeight="semibold"
          fontSize={["xl", "2xl"]}
          pb="4"
          pl="2"
          onClick={toggleDrawer}
        >
          <Link href="/">Blog</Link>
        </Text>
        <Text
          fontWeight="semibold"
          fontSize={["xl", "2xl"]}
          pb="4"
          pl="2"
          onClick={toggleDrawer}
        >
          <Link href="/">Atendimento</Link>
        </Text>
        <Text
          fontWeight="semibold"
          fontSize={["xl", "2xl"]}
          pb="4"
          pl="2"
          onClick={toggleDrawer}
        >
          <Link href="/">Seja um parceiro</Link>
        </Text>
        <Text
          fontWeight="semibold"
          fontSize={["xl", "2xl"]}
          pb="4"
          pl="2"
          onClick={toggleDrawer}
        >
          <Link href="/">Fale conosco</Link>
        </Text>

        <Stack spacing={6}>
          <Box cursor="pointer">
            <Link href="/">
              <HStack spacing="12px" pl="1" onClick={toggleDrawer}>
                <AiOutlineSearch size={32} />
                <Text fontWeight="semibold" fontSize={["xl", "2xl"]}>
                  Buscar
                </Text>
              </HStack>
            </Link>
          </Box>
          <Box cursor="pointer">
            <Link href="/">
              <HStack spacing="12px" pl="1" onClick={toggleDrawer}>
                <AiOutlineUser size={32} />
                <Text fontWeight="semibold" fontSize={["xl", "2xl"]}>
                  Sua conta
                </Text>
              </HStack>
            </Link>
          </Box>
          <Box cursor="pointer">
            <Link href="/checkout">
              <HStack spacing="12px" pl="1" onClick={toggleDrawer}>
                <AiOutlineShoppingCart size={32} />
                <Text fontWeight="semibold" fontSize={["xl", "2xl"]}>
                  Carrinho
                </Text>
              </HStack>
            </Link>
          </Box>
        </Stack>
      </Wrap>
    </DrawerModern>
  );
};

export default Drawer;
