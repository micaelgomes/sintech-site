import { Box, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Header: React.FC = () => {
  return (
    <Flex
      px="4"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <Stack width="100%" maxWidth="container.md" spacing={8}>
        <Title variant="h1">Sua segurança digital na ponta dos dedos</Title>

        <Subtitle>Já sabe o tipo de certificado que procura?</Subtitle>

        <Stack spacing={4} direction={["column", "row"]}>
          <Button variant="secondary">já sei o que preciso</Button>
          <Button variant="primary">me ajude a descobrir o que preciso</Button>
        </Stack>
      </Stack>

      <Box
        position="absolute"
        right={0}
        top={100}
        zIndex={-5}
        display={["none", "none", "none", "none", "none", "block"]}
      ></Box>
    </Flex>
  );
};

export default Header;
