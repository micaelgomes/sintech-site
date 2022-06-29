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

const ButtonMidia: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState("");

  const {
    setProdutoSelecionado,
    produtoSelecionado,
    midias,
    assinaturas,
    setAssinaturas,
    resetCompra,
  } = useProduto();

  useEffect(() => {
    if (produtoSelecionado.validade) {
      const idMidiaSelecionada = produtoSelecionado.midia?.id;

      const midia = midias.find(
        (tmpMidia) => tmpMidia.id === idMidiaSelecionada
      );

      if (midia?.assinaturas?.length === 1) {
        const uniqueAssinatura = midia?.midias[0];
        const presetSelected = `${uniqueAssinatura.id}@${uniqueAssinatura.rotulo}`;

        setSelected(presetSelected);
      }

      setAssinaturas(midia?.assinaturas || []);
    }
  }, [produtoSelecionado]);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const selectMidia = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    if (selected) {
      const [id, descricao] = selected.split("@");

      setProdutoSelecionado({
        ...produtoSelecionado,
        assinatura: {
          id: Number(id),
          rotulo: descricao,
        },
      });
    }
  }, [selected]);

  useEffect(() => {
    if (resetCompra) {
      setAssinaturas([]);
      setSelected(null);
    }
  }, [resetCompra]);

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
          Assinaturas
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
            <RadioGroup onChange={selectMidia} value={selected}>
              <Stack>
                {assinaturas?.length > 0 ? (
                  assinaturas.map((assinatura) => (
                    <Radio
                      value={`${assinatura.id}@${assinatura.descricao}`}
                      borderColor="secondary"
                      _checked={{
                        backgroundColor: "primary",
                      }}
                    >
                      {assinatura.descricao}
                    </Radio>
                  ))
                ) : (
                  <Text mb="4" fontWeight="medium">
                    Escolha uma Mídia para o certificado
                  </Text>
                )}
              </Stack>
            </RadioGroup>

            {assinaturas?.length > 0 && (
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

export default memo(ButtonMidia);
