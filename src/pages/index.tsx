import Navbar from "../components/globals/Navbar";
import Container from "../components/globals/Container";
import Header from "../components/home/Header";
import Footer from "../components/globals/Footer";
import ListService from "../components/home/ListServices";
import Faq from "../components/home/faq";
import Accordion from "../components/home/Accordion";

import Partners from "../components/home/Partners";
import CarouselFeat from "../components/home/CarouselFeat";
import { Flex } from "@chakra-ui/react";

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
