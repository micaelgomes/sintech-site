import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
  Button as ButtonChakra,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getListaSubcategoriaPF,
  getListaSubcategoriaPJ,
  SubcategoriaType,
} from "../../service/useCases/getListaProdutos";
import { getSubcategoria } from "../../service/useCases/getSubcategoria";
import Button from "../globals/Button";
import Navbar from "../globals/Navbar";
import Lottie from "react-lottie";

import { faker } from "@faker-js/faker";
import Link from "next/link";

import animationLoad from "../../animation/load.json";

const HeaderAllProdutos: React.FC = () => {
  const [subcategorias, setSubcategorias] = useState<SubcategoriaType[]>([]);

  useEffect(() => {
    const getProdutosPorCategorias = async () => {
      const tmpSubcategoriaPF = await getListaSubcategoriaPF();
      const tmpSubcategoriaPJ = await getListaSubcategoriaPJ();

      setSubcategorias([...tmpSubcategoriaPF, ...tmpSubcategoriaPJ]);
    };

    getProdutosPorCategorias();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoad,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Flex
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgGradient="linear(to-b, #A4D6ED, #E5EDF0)"
    >
      <Navbar />

      <Box
        position="relative"
        width="100%"
        zIndex={0}
        _after={{
          content: '""',
          position: "absolute",
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
          background: "white",
          bottom: "0",
          left: -100,
          right: -100,
          zIndex: 1,
          height: 85,
        }}
        _before={{
          content: '""',
          position: "absolute",
          height: 1000,
          width: "100%",
          zIndex: -1,
          opacity: 0.75,
          background: "url('/logo_sintech_body.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {subcategorias.length === 0 ? (
          <Flex
            minHeight={[
              "calc(100vh + 400px)",
              "calc(100vh - 300px)",
              "calc(100vh - 196px)",
            ]}
          >
            <Lottie
              options={defaultOptions}
              height={200}
              width={200}
              style={{ margin: "auto" }}
            />
          </Flex>
        ) : (
          <Flex
            position="relative"
            px="4"
            pb="36"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100%"
            maxWidth={1200}
            m="auto"
            minHeight={[
              "calc(100vh)",
              "calc(100vh - 300px)",
              "calc(100vh - 196px)",
            ]}
          >
            <Center mb="10">
              <Text fontSize="5xl" fontWeight="bold" color="secondary">
                Lista de Produtos
              </Text>
            </Center>

            <Flex mx="auto" width="100%" maxWidth="600px" flexWrap="wrap">
              {subcategorias.map((service, i) => (
                <Link
                  key={i}
                  href={`/produto/${service.id}?rotulo=${service.rotulo}`}
                >
                  <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    _hover={{
                      transform: "scale(1.1)",
                      cursor: "pointer",
                      transition: "all 0.2s ease-in-out",
                    }}
                    mx="auto"
                    my="4"
                  >
                    <Box p="4">
                      <Box
                        backgroundColor="secondary"
                        borderRadius="2xl"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width={[75, 100, 100, 100, 100]}
                        height={[75, 100, 100, 100, 100]}
                        p="4"
                      >
                        <Image
                          src={`/assets/${service.rotulo.toLowerCase()}.svg`}
                          alt={service.rotulo}
                          width="100%"
                          height="100%"
                        />
                      </Box>
                      <Text
                        mt="4"
                        fontWeight="bold"
                        fontSize={["lg", "xl", "2xl", "2xl"]}
                        color="secondary"
                        maxWidth={100}
                        textAlign="center"
                        lineHeight="shorter"
                      >
                        {service.rotulo}
                      </Text>
                    </Box>
                  </Flex>
                </Link>
              ))}
            </Flex>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default HeaderAllProdutos;
