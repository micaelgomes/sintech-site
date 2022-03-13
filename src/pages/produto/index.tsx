import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListService from "../../components/ListServices";
import Faq from "../../components/faq";
import Accordion from "../../components/Accordion";

import "typeface-open-sans";
import Partners from "../../components/Partners";
import CarouselFeat from "../../components/CarouselFeat";

const Produto = () => (
  <Container
    position="relative"
    overflow="hidden"
    minHeight="100vh"
    bgGradient="linear(to-b, #A4D6ED, #FFFFFF)"
  >
    <Navbar />
    <Header />

    <ListService />
    <CarouselFeat />
    <Faq />

    <Accordion />
    <Partners />

    <Footer />
  </Container>
);

export default Produto;
