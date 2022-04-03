import React from "react";
import { Box, Flex, HStack, Text, useMediaQuery, Wrap } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

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

        {isLargerThan990 ? (
          <Wrap>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/">Início</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/produto">Produtos</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/">Blog</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/">Atendimento</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/">Seja um parceiro</Link>
            </Text>
            <Text fontWeight="semibold" pl="6" fontSize="lg">
              <Link href="/">Fale conosco</Link>
            </Text>

            <HStack spacing={6}>
              <Box cursor="pointer" ml="4">
                <Link href="/">
                  <AiOutlineSearch size={32} />
                </Link>
              </Box>
              <Box cursor="pointer">
                <Link href="/">
                  <AiOutlineUser size={32} />
                </Link>
              </Box>
              <Box cursor="pointer">
                <Link href="/checkout">
                  <AiOutlineShoppingCart size={32} />
                </Link>
              </Box>
            </HStack>
          </Wrap>
        ) : (
          <button>menu</button>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
