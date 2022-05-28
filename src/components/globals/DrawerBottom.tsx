import React from "react";
import DrawerModern from "react-modern-drawer";

import {
  Box,
  Button,
  Center,
  HStack,
  Stack,
  Text,
  useMediaQuery,
  Wrap,
} from "@chakra-ui/react";
import { useDrawerBottom } from "../../context/drawerBottom";

import "react-modern-drawer/dist/index.css";
import Image from "next/image";
import ButtonTipoProduto from "../lista/ButtonTipoProduto";
import ButtonTipoAtendimento from "../lista/ButtonTipoAtendimento";
import ButtonValidade from "../lista/ButtonValidade";
import ButtonMidia from "../lista/ButtonMidia";
import ButtonSPlus from "../lista/ButtonSPlus";
import { currencyMask } from "../../utils/currencyMask";
import { useProduto } from "../lista/context/produto";
import { FiX } from "react-icons/fi";

const DrawerBottom = () => {
  const [isLargerThan40em] = useMediaQuery("(min-width: 712px)");
  const { isOpen, toggleDrawerBottom } = useDrawerBottom();

  const { label, preco, statusPodeComprar, getLinkParaComprar } = useProduto();

  return (
    <DrawerModern
      open={isOpen}
      onClose={toggleDrawerBottom}
      direction="bottom"
      style={{
        height: "auto",
        backgroundColor: "#194F69",
        overflowY: "auto",
      }}
    >
      <Stack width="100%" height={["100vh", "auto"]} p="4">
        <Stack
          height={["100%", "528px"]}
          justifyContent="space-between"
          background="secondary"
          px="6"
          borderRadius="2xl"
        >
          <Center mt="3" display={["none", "block"]}>
            <Text color="white" fontSize="2xl" fontWeight="semibold">
              {`Escolha suas configurações para ${label}`}
            </Text>
          </Center>

          <HStack height="100%">
            <Stack width={600} display={["none", "flex"]}>
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

            <Box width="100%" pt={["16", "4"]} pl={["0", "8"]} overflowY="auto">
              <Box display={["block", "none"]} pt="32">
                <Button
                  backgroundColor="transparent"
                  float="right"
                  mb="10"
                  _hover={{}}
                  _active={{}}
                  onClick={toggleDrawerBottom}
                >
                  <FiX size={48} color="#FFF" />
                </Button>
                <Text color="white" fontSize="2xl" py="8" fontWeight="semibold">
                  {`Escolha suas configurações para ${label}`}
                </Text>
              </Box>

              <Stack
                height={["100%", "455px"]}
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
              </Stack>

              <Center pb="4" flexDirection="column" display={["flex", "none"]}>
                <Text color="white" fontSize="4xl" fontWeight="semibold">
                  {currencyMask(preco)}
                </Text>
                <Text color="white" fontSize="sm" fontWeight="semibold">
                  Preço é ajustado de acordo com as opções
                </Text>

                <Button
                  backgroundColor="primary"
                  color="white"
                  width="100%"
                  borderRadius="xl"
                  size="lg"
                  fontSize="2xl"
                  fontWeight="bold"
                  p="8"
                  my="4"
                  disabled={!statusPodeComprar}
                  onClick={getLinkParaComprar}
                  _hover={{}}
                  _active={{}}
                >
                  Comprar
                </Button>
              </Center>
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
            Nunc id justo eget lacus pulvinar iaculis sit amet a felis. Vivamus
            vitae bibendum nibh, ac tristique urna. Quisque ac est vitae arcu
            interdum dapibus id nec justo.
          </Text>
        </Stack>
      </Stack>
    </DrawerModern>
  );
};

export default DrawerBottom;
