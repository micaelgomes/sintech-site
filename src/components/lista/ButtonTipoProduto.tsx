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
import React, { memo, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { motion } from "framer-motion";
import { useProduto } from "./context/produto";
import Popup from "reactjs-popup";
import { FiHelpCircle } from "react-icons/fi";

const ButtonTipoProduto: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { produtos, setProdutoSelecionado, produtoSelecionado } = useProduto();

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const selectProduto = (value: string) => {
    const [id, nome] = value.split("@");

    setProdutoSelecionado({
      ...produtoSelecionado,
      variacaoProduto: {
        id: Number(id),
        nome,
      },
    });
  };

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
          Produto
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
            <RadioGroup onChange={selectProduto}>
              <Stack>
                {produtos?.map((product) => (
                  <HStack>
                    <Radio
                      key={product.id}
                      value={`${product.id}@${product.nome}`}
                      borderColor="secondary"
                      _checked={{
                        backgroundColor: "primary",
                      }}
                    >{`Versão ${product.nome}`}</Radio>

                    {product.info_produto && (
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
                            {product.info_produto}
                          </Text>
                        </Stack>
                      </Popup>
                    )}
                  </HStack>
                ))}
              </Stack>
            </RadioGroup>

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
          </Stack>
        </Box>
      </motion.div>
    </Stack>
  );
};

export default memo(ButtonTipoProduto);
