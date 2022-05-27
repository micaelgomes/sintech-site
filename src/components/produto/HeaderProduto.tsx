import {
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
  Button as ButtonChakra,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { SubcategoriaType } from "../../service/useCases/getListaProdutos";
import { getSubcategoria } from "../../service/useCases/getSubcategoria";
import Button from "../globals/Button";
import Navbar from "../globals/Navbar";
import Lottie from "react-lottie";

import { faker } from "@faker-js/faker";
import Link from "next/link";

import animationLoad from "../../animation/load.json";

interface HeaderProdutoProps {
  id: string | string[];
}

const HeaderProduto: React.FC<HeaderProdutoProps> = ({ id }) => {
  const [subcategoria, setSubcategoria] = useState({} as SubcategoriaType);
  const [textContent, setTextContent] = useState("");
  const [currentTab, setCurrentTab] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationLoad,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const buscaSubcategoriaPorID = async () => {
      const parser = Number(id);
      const tmpSubcategoria = await getSubcategoria(parser);

      setSubcategoria(tmpSubcategoria);
      setTextContent(tmpSubcategoria.descricao || faker.lorem.paragraphs(6));
      setCurrentTab("descricao");
    };

    buscaSubcategoriaPorID();
  }, []);

  const toogleText = (slug: string) => {
    setCurrentTab(slug);
    setTextContent(subcategoria[slug] || faker.lorem.paragraphs(6));
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
        {!subcategoria.id ? (
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
            pb="24"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100%"
            maxWidth={1200}
            m="auto"
            minHeight={[
              "calc(100vh + 400px)",
              "calc(100vh - 300px)",
              "calc(100vh - 196px)",
            ]}
          >
            <Box
              backgroundColor="white"
              p="4"
              borderRadius="xl"
              mb="6"
              shadow="lg"
            >
              <Text fontSize="3xl" fontWeight="semibold" color="secondary">
                {subcategoria.rotulo}
              </Text>
            </Box>

            <HStack alignItems="stretch" spacing={30} flexWrap="wrap">
              <Stack flex={1} width="100%" flexBasis={500}>
                <Flex mb="4" gap="15px" overflowX="auto">
                  <ButtonChakra
                    backgroundColor={
                      currentTab === "descricao" ? "secondary" : "gray.100"
                    }
                    borderRadius="xl"
                    p="4"
                    height="60px"
                    width="100%"
                    minWidth="150px"
                    _hover={{
                      backgroundColor:
                        currentTab === "descricao" ? "secondary" : "gray.100",
                    }}
                    _pressed={{
                      backgroundColor:
                        currentTab === "descricao" ? "secondary" : "gray.100",
                    }}
                    onClick={() => toogleText("descricao")}
                  >
                    <Text
                      color={currentTab === "descricao" ? "white" : "secondary"}
                      fontWeight="semibold"
                      whiteSpace="nowrap"
                    >
                      O que é?
                    </Text>
                  </ButtonChakra>

                  <ButtonChakra
                    backgroundColor={
                      currentTab === "etapas" ? "secondary" : "gray.100"
                    }
                    borderRadius="xl"
                    p="4"
                    height="60px"
                    width="100%"
                    minWidth="unset"
                    _hover={{
                      backgroundColor:
                        currentTab === "etapas" ? "secondary" : "gray.100",
                    }}
                    _pressed={{
                      backgroundColor:
                        currentTab === "etapas" ? "secondary" : "gray.100",
                    }}
                    onClick={() => toogleText("etapas")}
                  >
                    <Text
                      color={currentTab === "etapas" ? "white" : "secondary"}
                      fontWeight="semibold"
                    >
                      Quais são as Etapas?
                    </Text>
                  </ButtonChakra>

                  <ButtonChakra
                    backgroundColor={
                      currentTab === "resumo" ? "secondary" : "gray.100"
                    }
                    borderRadius="xl"
                    p="4"
                    height="60px"
                    width="100%"
                    minWidth="unset"
                    _hover={{
                      backgroundColor:
                        currentTab === "resumo" ? "secondary" : "gray.100",
                    }}
                    _pressed={{
                      backgroundColor:
                        currentTab === "resumo" ? "secondary" : "gray.100",
                    }}
                    onClick={() => toogleText("resumo")}
                  >
                    <Text
                      color={currentTab === "resumo" ? "white" : "secondary"}
                      fontWeight="semibold"
                      whiteSpace="nowrap"
                    >
                      Documentos necessários
                    </Text>
                  </ButtonChakra>

                  <ButtonChakra
                    backgroundColor={
                      currentTab === "normas" ? "secondary" : "gray.100"
                    }
                    borderRadius="xl"
                    p="4"
                    height="60px"
                    width="100%"
                    minWidth="150px"
                    _hover={{
                      backgroundColor:
                        currentTab === "normas" ? "secondary" : "gray.100",
                    }}
                    _pressed={{
                      backgroundColor:
                        currentTab === "normas" ? "secondary" : "gray.100",
                    }}
                    onClick={() => toogleText("normas")}
                  >
                    <Text
                      color={currentTab === "normas" ? "white" : "secondary"}
                      fontWeight="semibold"
                    >
                      Normas
                    </Text>
                  </ButtonChakra>
                </Flex>

                <Box
                  backgroundColor="white"
                  p="8"
                  borderRadius="xl"
                  fontWeight="medium"
                  fontSize="xl"
                  color="secondary"
                  width="100%"
                  height={400}
                  overflowY="auto"
                >
                  {textContent}
                </Box>
              </Stack>

              <Flex
                display={["none", "none", "flex"]}
                flex={1}
                flexDirection="column"
                flexGrow={0}
                backgroundColor="secondary"
                borderRadius="xl"
                p="5"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text color="white" fontSize="4xl" fontWeight="bold">
                  {subcategoria.rotulo}
                </Text>

                <Image
                  flex={1}
                  src={`/assets/${subcategoria.rotulo?.toLowerCase()}.svg`}
                  alt={`${subcategoria.rotulo} icon`}
                  width="100%"
                  height="100%"
                  p="12"
                />

                <Link
                  href={`/comprar?rotulo=${subcategoria.rotulo}&id=${subcategoria.id}&cid=${subcategoria.categoria_id}`}
                >
                  <Button variant="primary" width="100%" mx="1">
                    Comprar
                  </Button>
                </Link>
              </Flex>
            </HStack>

            <Box display={["block", "block", "none"]} width="100%" pt="8">
              <Button variant="primary" width="100%" mx="1">
                Comprar
              </Button>
            </Box>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default HeaderProduto;
