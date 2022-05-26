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

const ButtonTipoAtendimento: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const { produtos, setProdutoSelecionado, produtoSelecionado } = useProduto();

  const tiposAtendimento = [
    {
      slug: "link_presencial",
      nome: "Presencial",
    },
    {
      slug: "link_videoconferencia",
      nome: "Vídeo Conferência",
    },
    {
      slug: "link_renovacao_online",
      nome: "Renovação Online",
    },
  ];

  const toggleOpen = () => {
    setOpened(!opened);
  };

  const selectAtendimento = (value: string) => {
    const [slug, nome] = value.split("@");

    setProdutoSelecionado({
      ...produtoSelecionado,
      tipoAtendimento: {
        slug,
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
            <RadioGroup onChange={selectAtendimento}>
              <Stack>
                {produtos.length > 0 ? (
                  tiposAtendimento.map((tipo) => (
                    <Radio
                      key={tipo.slug}
                      value={`${tipo.slug}@${tipo.nome}`}
                      borderColor="secondary"
                      _checked={{
                        backgroundColor: "primary",
                      }}
                    >
                      {tipo.nome}
                    </Radio>
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
