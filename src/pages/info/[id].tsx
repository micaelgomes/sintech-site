import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/globals/Navbar";
import Container from "../../components/globals/Container";

import HeaderInfo from "../../components/info/HeaderInfo";
import "typeface-open-sans";

const Index = () => (
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
      <HeaderInfo />
    </Flex>
  </Container>
);

export default Index;
