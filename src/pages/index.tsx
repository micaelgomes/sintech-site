import { Box, Flex, Center } from "@chakra-ui/react";

import "typeface-open-sans";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Header from "../components/Header";

const Index = () => (
  <Container minHeight="100vh" bgGradient="linear(to-b, #A4D6ED, #FFFFFF)">
    <Navbar />

    <Header />

    <Flex px="4">
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
    </Flex>

    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
  </Container>
);

export default Index;
