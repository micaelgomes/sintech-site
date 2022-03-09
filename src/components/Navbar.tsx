import React from "react";
import { Flex, Text, useMediaQuery, Wrap } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
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
        py="4"
      >
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Logo sintech"
            width="150px"
            height="100%"
          />
        </Link>

        {isLargerThan990 ? (
          <Wrap>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/cart">Início</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/cart">Produtos</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/cart">Blog</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/cart">Atendimento</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/cart">Seja um parceiro</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
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
