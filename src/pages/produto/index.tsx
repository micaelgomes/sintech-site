import { Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListService from "../../components/ListServices";
import Faq from "../../components/faq";
import Accordion from "../../components/Accordion";
import Partners from "../../components/Partners";
import CarouselFeat from "../../components/CarouselFeat";

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
      <Navbar />
      <Header />

      <ListService />
      <CarouselFeat />
    </Flex>
    <Faq />

    <Accordion />
    <Partners />

    <Footer />
  </Container>
);

export default Index;
