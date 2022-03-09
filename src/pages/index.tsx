import { Box, Flex, Center } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Header from "../components/Header";
import ListService from "../components/ListServices";
import Faq from "../components/faq";
import Accordion from "../components/Accordion";

import "typeface-open-sans";

const Index = () => (
  <Container
    position="relative"
    overflow="hidden"
    minHeight="100vh"
    bgGradient="linear(to-b, #A4D6ED, #FFFFFF)"
  >
    <Navbar />

    <Header />

    <Flex px="4" zIndex={0}>
      <Center flexDirection="column" my="28" maxWidth="container.lg">
        <Title variant="h1" textAlign="center" maxWidth={750} mb="8">
          O futuro é digital, simples assim.
        </Title>

        <Subtitle fontSize={["xl", "2xl", "3xl", "3xl"]} textAlign="center">
          Com mais de sete anos no mercado, a Sintech apresenta um menu de
          soluções de Certificação Digital de forma confiável no meio
          eletrônicos e soluções em Gestão Empresarial para empresas que atuam
          diretamente com a atividade de certificação.
        </Subtitle>
      </Center>

      <Box position="absolute" left={0} zIndex={-5} opacity={0.75}>
        <Image
          src="/logo_sintech_body.png"
          alt="Logo da Sintech"
          width={1000}
          height={1000}
        />
      </Box>
    </Flex>

    <ListService />

    <Faq />

    <Accordion />

    <Flex alignItems="center" justifyContent="center">
      <Image
        src="/receita.jpg"
        alt="Logo da Receita Federal"
        width={400}
        height={200}
      />

      <Image
        src="/gti.jpg"
        alt="Logo da Receita Federal"
        width={200}
        height={200}
      />

      <Image
        src="/soluti.jpg"
        alt="Logo da Receita Federal"
        width={350}
        height={200}
      />

      <Image
        src="/criativos.jpg"
        alt="Logo da Receita Federal"
        width={350}
        height={200}
      />

      <Image
        src="/iti.jpg"
        alt="Logo da Receita Federal"
        width={400}
        height={200}
      />
    </Flex>

    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
  </Container>
);

export default Index;
