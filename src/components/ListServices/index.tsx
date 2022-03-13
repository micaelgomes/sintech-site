import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Subtitle from "../Subtitle";
import Title from "../Title";

import { services } from "./services";

const ListService: React.FC = () => {
  return (
    <>
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
      <Flex
        px="4"
        alignItems="flex-start"
        justifyContent="space-between"
        width="100%"
        maxWidth={1200}
        mb="32"
        overflowX="auto"
        overflowY="hidden"
        zIndex={0}
      >
        {services.map((service, i) => (
          <Link key={i} href={`/produto/${service.link}`}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
              m="2"
            >
              <Box
                backgroundColor="secondary"
                borderRadius="2xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={100}
                height={100}
                p="4"
              >
                <Image
                  src={`/assets/${service.icon}`}
                  alt={service.name}
                  width="100%"
                  height="100%"
                />
              </Box>
              <Text
                mt="4"
                fontWeight="bold"
                fontSize="2xl"
                color="secondary"
                maxWidth={100}
                textAlign="center"
                lineHeight="shorter"
              >
                {service.name}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </>
  );
};

export default ListService;
