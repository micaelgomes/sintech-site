import React, { memo, useEffect, useState } from "react";
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

import Title from "../globals/Title";
import ListItemProduto from "../info/ListItemProduto.tsx/ListItemProduto";
import Switch from "react-input-switch";
import ButtonValidade from "./ButtonValidade";
import ButtonSPlus from "./ButtonSPlus";

import {
  getListaSubcategoriaPF,
  getListaSubcategoriaPJ,
  SubcategoriaType,
} from "../../service/useCases/getListaProdutos";

import ButtonTipoAtendimento from "./ButtonTipoAtendimento";
import ButtonMidia from "./ButtonMidia";
import ButtonTipoProduto from "./ButtonTipoProduto";

import { useProduto } from "./context/produto";
import { currencyMask } from "../../utils/currencyMask";

enum CategoriaType {
  PF = 0,
  PJ = 1,
}

const HeaderLista: React.FC = () => {
  const [currShowed, setCurrShowed] = useState<number>(0);
  const [valueSwitch, setValueSwitch] = useState(0);

  const [subcategoriaPF, setSubcategoriaPF] = useState<SubcategoriaType[]>([]);
  const [subcategoriaPJ, setSubcategoriaPJ] = useState<SubcategoriaType[]>([]);

  const {
    label,
    preco,
    getInfosProduto,
    statusPodeComprar,
    getLinkParaComprar,
  } = useProduto();

  useEffect(() => {
    setCurrShowed(0);
    console.log("set currShowed");
  }, [valueSwitch]);

  useEffect(() => {
    const getProdutosPorCategorias = async () => {
      const tmpSubcategoriaPF = await getListaSubcategoriaPF();
      const tmpSubcategoriaPJ = await getListaSubcategoriaPJ();

      setSubcategoriaPF(tmpSubcategoriaPF);
      setSubcategoriaPJ(tmpSubcategoriaPJ);
    };

    getProdutosPorCategorias();
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
              fontWeight={valueSwitch === CategoriaType.PF ? "bold" : "medium"}
              color={valueSwitch === CategoriaType.PF ? "secondary" : "inherit"}
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
              fontWeight={valueSwitch === CategoriaType.PJ ? "bold" : "medium"}
              color={valueSwitch === CategoriaType.PJ ? "secondary" : "inherit"}
            >
              Para minha Empresa
            </Text>
          </HStack>

          <HStack spacing="30px" alignItems="stretch">
            <Stack spacing="20px" flex={1} height="100%">
              {valueSwitch === CategoriaType.PF ? (
                <>
                  {subcategoriaPF.map((subcategoria, i) => (
                    <ListItemProduto
                      key={i}
                      index={i}
                      curr={currShowed}
                      setCurr={setCurrShowed}
                      rotulo={subcategoria.rotulo}
                      onClick={() => getInfosProduto(subcategoria)}
                    />
                  ))}
                </>
              ) : (
                <>
                  {subcategoriaPJ.map((subcategoria, i) => (
                    <ListItemProduto
                      key={i}
                      index={i}
                      curr={currShowed}
                      setCurr={setCurrShowed}
                      rotulo={subcategoria.rotulo}
                      onClick={() => getInfosProduto(subcategoria)}
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
                px="6"
                borderRadius="2xl"
              >
                <Center mt="4">
                  <Text color="white" fontSize="2xl" fontWeight="semibold">
                    {`Faça a montagem para poder comprar ${label}`}
                  </Text>
                </Center>

                <HStack height="100%">
                  <Stack width={600}>
                    <Box flex={1}>
                      <Image
                        src="/token.png"
                        alt="Logo da Sintech"
                        width={300}
                        height={250}
                      />
                    </Box>

                    <Center pb="4" flexDirection="column">
                      <Text color="white" fontSize="4xl" fontWeight="semibold">
                        {currencyMask(preco)}
                      </Text>
                      <Text color="white" fontSize="sm" fontWeight="semibold">
                        Preço é ajustado de acordo com as opções
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
                      disabled={!statusPodeComprar}
                      onClick={getLinkParaComprar}
                      _hover={{}}
                      _active={{}}
                    >
                      Comprar
                    </Button>
                  </Stack>

                  <Box width="100%" pt="4" pl="8" overflowY="auto">
                    <Stack
                      height={452}
                      position="relative"
                      spacing={3}
                      pb="4"
                      pr="2"
                    >
                      <ButtonTipoProduto />
                      <ButtonTipoAtendimento />
                      <ButtonValidade />
                      <ButtonMidia />
                      <ButtonSPlus description="" />
                      <Box py="4" />
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
