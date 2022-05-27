import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/globals/Navbar";
import Container from "../../components/globals/Container";
import Footer from "../../components/globals/Footer";
import Faq from "../../components/home/faq";
import Accordion from "../../components/home/Accordion";
import Partners from "../../components/home/Partners";
import HeaderAllProdutos from "../../components/produto/HeaderAllProdutos";

import "typeface-open-sans";

const Index = () => (
  <Container position="relative" overflow="hidden" minHeight="100vh">
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      backgroundColor="red"
      width="100%"
      bgGradient="linear(to-b, #A4D6ED, #FFFFFF)"
    >
      <HeaderAllProdutos />
    </Flex>
    <Faq />

    <Accordion />
    <Partners />

    <Footer />
  </Container>
);

export default Index;
