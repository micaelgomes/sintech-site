import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/globals/Navbar";
import Container from "../../components/globals/Container";

import "typeface-open-sans";
import HeaderLista from "../../components/lista/HeaderLista";
import ListaProvider from "../../components/lista/context";

const Index = () => (
  <ListaProvider>
    <Container position="relative" overflow="hidden" minHeight="100vh">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor="red"
        width="100%"
        bgGradient="linear(to-b, #A4D6ED, #BAE0F2)"
      >
        <Navbar />
        <HeaderLista />
      </Flex>
    </Container>
  </ListaProvider>
);

export default Index;
