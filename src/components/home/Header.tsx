import { Box, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../globals/Button";
import Subtitle from "../globals/Subtitle";
import Title from "../globals/Title";

const Header: React.FC = () => {
  return (
    <Flex
      px="4"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight={["calc(100vh - 200px)", "calc(100vh - 82px)"]}
      zIndex={0}
    >
      <Stack
        position="relative"
        width="100%"
        maxWidth="container.md"
        spacing={8}
        _before={{
          content: '""',
          backgroundColor: [
            "transparent",
            "white",
            "white",
            "white",
            "white",
            "transparent",
          ],
          opacity: 0.85,
          width: "calc(100% + 128px)",
          height: "calc(100% + 256px)",
          marginLeft: "-64px",
          marginTop: "-128px",
          position: "absolute",
          zIndex: -1,
          borderRadius: "2rem",
        }}
      >
        <Title variant="h1">Sua segurança digital na ponta dos dedos</Title>

        <Subtitle fontSize={["xl", "4xl", "3xl", "3xl", "3xl"]}>
          Já sabe o tipo de certificado que procura?
        </Subtitle>

        <Stack spacing={4} direction={["column", "row"]}>
          <Link href="/comprar">
            <Button variant="secondary">já sei o que preciso</Button>
          </Link>
          <Link href="/produto">
            <Button variant="primary">
              me ajude a descobrir o que preciso
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Box
        position="absolute"
        right={0}
        top={100}
        zIndex={-5}
        display={["none", "block"]}
      >
        <Image
          src="/header.png"
          blurDataURL="/header.png"
          alt="Homem usando celular"
          placeholder="blur"
          width={600}
          height={1000}
        />
      </Box>
    </Flex>
  );
};

export default Header;
