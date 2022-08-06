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
import { ProdutoInfoMontado, useProduto } from "./context/produto";
import Popup from "reactjs-popup";
import { FiHelpCircle } from "react-icons/fi";

const ButtonMidia: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<ProdutoInfoMontado["midia"]>(
    {} as ProdutoInfoMontado["midia"]
  );

  const {
    setProdutoSelecionado,
    produtoSelecionado,
    validades,
    midias,
    setMidias,
    resetCompra,
  } = useProduto();

  useEffect(() => {
    if (produtoSelecionado.validade) {
      const idValidadeSelecionado = produtoSelecionado.validade.id;

      const validade = validades.find(
        (tmpValidade) => tmpValidade.id === idValidadeSelecionado
      );

      if (validade?.midias?.length === 1) {
        const uniqueMidia = validade?.midias[0];
        setSelected(uniqueMidia);
      }

      setMidias(validade?.midias || []);
    }
  }, [produtoSelecionado]);

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const selectMidia = (value: string) => {
    console.log(value);
    const midia = midias.filter((m) => m.id === Number(value));
    setSelected(midia[0]);
  };

  useEffect(() => {
    if (selected) {
      setProdutoSelecionado({
        ...produtoSelecionado,
        midia: selected,
      });
    }
  }, [selected]);

  useEffect(() => {
    if (resetCompra) {
      setMidias([]);
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
          Mídia
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
            <RadioGroup onChange={selectMidia} value={selected.id}>
              <Stack>
                {midias?.length > 0 ? (
                  midias.map((midia) => (
                    <HStack key={midia.id}>
                      <Radio
                        key={midia.id}
                        value={midia.id}
                        borderColor="secondary"
                        _checked={{
                          backgroundColor: "primary",
                        }}
                      >
                        {midia.rotulo}
                      </Radio>
                      {midia.info_midia && (
                        <Popup
                          trigger={() => (
                            <Button
                              background="none"
                              _hover={{ background: "none" }}
                              _active={{ background: "none" }}
                              p="0"
                              mr="-2"
                              height={"auto"}
                            >
                              <FiHelpCircle color="#194F69" size={22} />
                            </Button>
                          )}
                          on={["hover", "focus"]}
                          position="top center"
                          closeOnDocumentClick
                          offsetY={-3}
                          offsetX={10}
                          arrowStyle={{
                            color: "#E1E8F0",
                          }}
                        >
                          <Stack
                            background="#E1E8F0"
                            px="6"
                            py="4"
                            borderRadius="2xl"
                            shadow="2xl"
                            maxWidth={400}
                          >
                            <Text color="secondary" my="4">
                              {midia.info_midia}
                            </Text>
                          </Stack>
                        </Popup>
                      )}
                    </HStack>
                  ))
                ) : (
                  <Text mb="4" fontWeight="medium">
                    Escolha uma Validade para o certificado
                  </Text>
                )}
              </Stack>
            </RadioGroup>

            {midias?.length > 0 && (
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
