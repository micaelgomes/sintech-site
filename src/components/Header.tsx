import { Flex, HStack, Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import React from "react";
import Button from "./Button";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Header: React.FC = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      px="4"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 200px)"
    >
      <Stack width="100%" maxWidth="container.md" spacing={8}>
        <Title variant="h1">Sua segurança digital na ponta dos dedos</Title>

        <Subtitle>Já sabe o tipo de certificado que procura?</Subtitle>

        <Stack spacing={4} direction={["column", "row"]}>
          <Button variant="secondary">Já sei o que preciso</Button>
          <Button variant="primary">Me ajude a descobrir o que preciso</Button>
        </Stack>
      </Stack>

      {/* <Box position="absolute" right={0} top={100} zIndex={-5}>
      <Image
        src="/header.png"
        alt="Homem usando celular"
        width="600"
        height="1000"
      />
    </Box> */}
    </Flex>
  );
};

export default Header;
