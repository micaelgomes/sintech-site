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
import { FiHelpCircle } from "react-icons/fi";
import Popup from "reactjs-popup";

const ButtonTipoAtendimento: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(null);
  const { produtos, setProdutoSelecionado, produtoSelecionado } = useProduto();

  const tiposAtendimento = [
    {
      id: produtoSelecionado.variacaoProduto?.id,
      slug: "link_presencial",
      nome: "Presencial",
      info: produtoSelecionado.midia?.splus[0].info_presencial
    },
    {
      id: produtoSelecionado.variacaoProduto?.id,
      slug: "link_videoconferencia",
      nome: "Videoconferência",
      info: produtoSelecionado.midia?.splus[0].info_videoconferencia
    },
    {
      id: produtoSelecionado.variacaoProduto?.id,
      slug: "link_renovacao_online",
      nome: "Renovação Online",
      info: produtoSelecionado.midia?.splus[0].info_renovacao_online
    },
  ];

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const selectAtendimento = (value: string) => {
    const [id, slug] = value.split("@");

    console.log(value);

    setSelected(value);
    setProdutoSelecionado({
      ...produtoSelecionado,
      tipoAtendimento: {
        id: Number(id),
        slug,
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
          Tipo de Atendimento
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
            <RadioGroup value={selected} onChange={selectAtendimento}>
              <Stack>
                {produtos?.length > 0 ? (
                  tiposAtendimento.map((tipo) => (
                    <HStack>
                      <Radio
                        key={tipo.slug}
                        value={`${tipo.id}@${tipo.slug}`}
                        borderColor="secondary"
                        _checked={{
                          backgroundColor: "primary",
                        }}
                      >
                        {tipo.nome}
                      </Radio>
                      <Popup
                        trigger={() => (
                          <Button
                            background="none"
                            _hover={{ background: "none" }}
                            _active={{ background: "none" }}
                            p="0"
                            mr="-2"
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
                            {tipo.info}
                          </Text>
                        </Stack>
                      </Popup>
                    </HStack>

                  ))
                ) : (
                  <Text mb="4" fontWeight="medium">
                    Escolha uma Validade para o certificado
                  </Text>
                )}
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

export default memo(ButtonTipoAtendimento);
