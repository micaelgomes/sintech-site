import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";

import Title from "../globals/Title";
import ListItemProduto from "../info/ListItemProduto.tsx/ListItemProduto";
import Switch from "react-input-switch";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import ButtonValidade from "./ButtonValidade";
import ButtonSPlus from "./ButtonSPlus";

import { motion } from "framer-motion";
import {
  getListaProdutosPF,
  getListaProdutosPJ,
  ProdutoType,
} from "../../service/useCases/getListaProdutos";
import ButtonTipoAtendimento from "./ButtonTipoAtendimento";
import ButtonMidia from "./ButtonMidia";

const HeaderLista: React.FC = () => {
  const [currShowed, setCurrShowed] = useState<number>(0);
  const [type, setType] = useState<"PF" | "PJ">("PF");
  const [valueSwitch, setValueSwitch] = useState(false);

  const [produtosPF, setProdutosPF] = useState<ProdutoType[]>([]);
  const [produtosPJ, setProdutosPJ] = useState<ProdutoType[]>([]);

  useEffect(() => {
    if (valueSwitch) {
      setType("PJ");
    } else {
      setType("PF");
    }
  }, [valueSwitch]);

  useEffect(() => {
    const tmpProdutosPF = getListaProdutosPF();
    const tmpProdutosPJ = getListaProdutosPJ();

    setProdutosPF(tmpProdutosPF);
    setProdutosPJ(tmpProdutosPJ);

    console.log(tmpProdutosPF);
    console.log(tmpProdutosPJ);
  }, []);

  return (
    <Flex
      pb="24"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <Stack flex={1} flexBasis={400}>
        <Stack alignItems="center">
          <Title variant="h3" fontSize={["2xl", "4xl", "4xl", "5xl"]}>
            Pra quem é o Certificado?
          </Title>

          <HStack pt="2" pb="10">
            <Text
              fontWeight={type === "PF" ? "bold" : "medium"}
              color={type === "PF" ? "secondary" : "inherit"}
            >
              Para Mim
            </Text>

            <Switch
              value={valueSwitch}
              onChange={setValueSwitch}
              styles={{
                container: {
                  width: 36,
                  height: 19,
                },
                track: {
                  borderRadius: 10,
                  backgroundColor: "#194F69",
                },
                trackChecked: {
                  backgroundColor: "#194F69",
                },
                button: {
                  top: 3,
                  bottom: 3,
                  left: 3,
                  right: 19,
                  backgroundColor: "#F5F5F3",
                },
                buttonChecked: {
                  top: 3,
                  bottom: 3,
                  left: 19,
                  right: 3,
                  backgroundColor: "#F5F5F3",
                },
              }}
            />
            <Text
              fontWeight={type === "PJ" ? "bold" : "medium"}
              color={type === "PJ" ? "secondary" : "inherit"}
            >
              Para minha Empresa
            </Text>
          </HStack>

          <HStack spacing="30px" alignItems="stretch" flexWrap="wrap">
            <Stack spacing="20px" flex={1}>
              {type === "PF" ? (
                <>
                  {produtosPF.map((produto, i) => (
                    <ListItemProduto
                      index={i}
                      curr={currShowed}
                      setCurr={setCurrShowed}
                      rotulo={produto.rotulo}
                    />
                  ))}
                </>
              ) : (
                <>
                  {produtosPJ.map((produto, i) => (
                    <ListItemProduto
                      index={i}
                      curr={currShowed}
                      setCurr={setCurrShowed}
                      rotulo={produto.rotulo}
                    />
                  ))}
                </>
              )}
            </Stack>

            <Stack width="100%" maxWidth={780}>
              <Stack
                height={528}
                justifyContent="space-between"
                background="secondary"
                p="6"
                borderRadius="2xl"
              >
                <Center>
                  <Text color="white" fontSize="3xl" fontWeight="bold">
                    e-CPF A3 | Token
                  </Text>
                </Center>

                <HStack>
                  <Stack width={600}>
                    <Box flex={1}>
                      <Image
                        src="/token.png"
                        alt="Logo da Sintech"
                        width={300}
                        height={250}
                      />
                    </Box>

                    <Center>
                      <Text color="white" fontSize="4xl" fontWeight="semibold">
                        R$ 199,99
                      </Text>
                    </Center>

                    <Button
                      backgroundColor="primary"
                      color="white"
                      width="100%"
                      borderRadius="xl"
                      size="lg"
                      fontSize="2xl"
                      fontWeight="bold"
                      p="8"
                      // disabled
                      _hover={{}}
                      _active={{}}
                    >
                      Comprar
                    </Button>
                  </Stack>

                  <Box width="100%" height="100%">
                    <Stack position="relative" spacing={6} pb="4">
                      <ButtonTipoAtendimento qtdMonths={[12, 24, 36]} />
                      <ButtonValidade qtdMonths={[12, 24, 36]} />
                      <ButtonMidia qtdMonths={[12, 24, 36]} />
                      <ButtonSPlus description="" />
                    </Stack>
                  </Box>
                </HStack>
              </Stack>

              <Stack
                display="none"
                background="secondary"
                px="6"
                py="4"
                borderRadius="2xl"
              >
                <Text color="white" fontSize="xl" fontWeight="bold">
                  O que é o Token?
                </Text>
                <Text color="white" my="4">
                  Nunc id justo eget lacus pulvinar iaculis sit amet a felis.
                  Vivamus vitae bibendum nibh, ac tristique urna. Quisque ac est
                  vitae arcu interdum dapibus id nec justo.
                </Text>
              </Stack>
            </Stack>
          </HStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default memo(HeaderLista);
