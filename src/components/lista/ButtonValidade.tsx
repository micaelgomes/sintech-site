import {
  Box,
  Button,
  Flex,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { memo, useEffect, useRef, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { motion } from "framer-motion";
import { useProduto } from "./context/produto";

const ButtonValidade: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState("");

  const {
    produtos,
    setProdutoSelecionado,
    produtoSelecionado,
    validades,
    setValidades,
  } = useProduto();

  useEffect(() => {
    if (produtoSelecionado.variacaoProduto) {
      const idProdutoSelecionado = produtoSelecionado.variacaoProduto.id;

      const produto = produtos.find(
        (tmpProduto) => tmpProduto.id === idProdutoSelecionado
      );

      if (produto?.validades?.length === 1) {
        const uniqueValidade = produto?.validades[0];
        const presetSelected = `${uniqueValidade.id}@${uniqueValidade.rotulo}`;

        setSelected(presetSelected);
      }

      setValidades(produto?.validades || []);
    }
  }, [produtoSelecionado]);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const selectValidade = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    const [id, rotulo] = selected.split("@");

    setProdutoSelecionado({
      ...produtoSelecionado,
      validade: {
        id: Number(id),
        rotulo: rotulo,
      },
    });
  }, [selected]);

  return (
    <Stack
      w="100%"
      backgroundColor="white"
      borderRadius="2xl"
      px="2"
      py="3"
      cursor="pointer"
      transition="all .3s ease-out"
      shadow="base"
    >
      <HStack justifyContent="space-between" onClick={toggleOpen}>
        <Text color="secondary" fontWeight="bold" fontSize="lg" ml="2">
          Validade do Certificado
        </Text>
        <Button
          position="relative"
          backgroundColor="transparent"
          shadow="none"
          variant="primary"
          p="unset"
          zIndex={0}
          _hover={{
            background: "none",
          }}
          _after={{
            content: '""',
            position: "absolute",
            backgroundColor: opened ? "#276C7B" : "#CEE4E2",
            width: 30,
            height: 30,
            borderRadius: "100%",
            zIndex: -1,
          }}
        >
          {opened ? (
            <BiChevronUp color="#FDFFFC" size={24} />
          ) : (
            <BiChevronDown color="#194F69" size={24} />
          )}
        </Button>
      </HStack>

      <motion.div
        style={{ margin: 0, maxHeight: 300 }}
        animate={{
          height: opened ? "auto" : 0,
          opacity: opened ? 1 : 0,
          display: opened ? "block" : "none",
        }}
      >
        <Box px="2" mt="2" maxHeight={230} overflow="auto">
          <Stack>
            <RadioGroup onChange={selectValidade} value={selected}>
              <Stack>
                {validades?.length > 0 ? (
                  validades.map((validade) => (
                    <Radio
                      key={validade.id}
                      value={`${validade.id}@${validade.rotulo}`}
                      borderColor="secondary"
                      _checked={{
                        backgroundColor: "primary",
                      }}
                    >
                      {validade.rotulo}
                    </Radio>
                  ))
                ) : (
                  <Text mb="4" fontWeight="medium">
                    Escolha um Produto para continuar
                  </Text>
                )}
              </Stack>
            </RadioGroup>

            {validades?.length > 0 && (
              <Flex>
                <Button
                  backgroundColor="primary"
                  color="white"
                  borderRadius="xl"
                  mt="2"
                  ml="auto"
                  onClick={toggleOpen}
                  _hover={{}}
                  _active={{}}
                >
                  Selecionar
                </Button>
              </Flex>
            )}
          </Stack>
        </Box>
      </motion.div>
    </Stack>
  );
};

export default memo(ButtonValidade);
