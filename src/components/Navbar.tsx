import React from "react";
import { Flex, Text, useMediaQuery, Wrap } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isLargerThan990] = useMediaQuery("(min-width: 990px)");

  return (
    <Flex width="100%" px="4">
      <Flex
        width="100%"
        maxWidth={1200}
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src="/logo.svg" alt="Logo sintech" width="150" height="100%" />

        {isLargerThan990 ? (
          <Wrap>
            <Text fontWeight="semibold" pl="6" fontSize="xl">
              <Link href="/cart">Início</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="xl">
              <Link href="/cart">Produtos</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="xl">
              <Link href="/cart">Blog</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="xl">
              <Link href="/cart">Atendimento</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="xl">
              <Link href="/cart">Seja um parceiro</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="xl">
              <Link href="/cart">Fale conosco</Link>
            </Text>
          </Wrap>
        ) : (
          <button>menu</button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
