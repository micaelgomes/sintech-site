import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import Button from "../globals/Button";
import { BiChevronDown } from "react-icons/bi";

import Title from "../globals/Title";
import ListItemProduto from "./ListItemProduto.tsx/ListItemProduto";
import Switch from "react-input-switch";
import { getListaSubcategoriaPF } from "../../service/useCases/getListaProdutos";

const HeaderInfo: React.FC = () => {
  const [currShowed, setCurrShowed] = useState<number>(0);
  const [toMe, setToMe] = useState(false);

  useEffect(() => {
    const produtos = getListaSubcategoriaPF();
    console.log(produtos);
  }, []);

  return (
    <Flex
      px="4"
      pb="24"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <HStack alignItems="flex-start" spacing={10}>
        <Box flex={1} zIndex={-5}>
          <Image
            src="/sample.webp"
            alt="Homem usando celular"
            width="600px"
            height="1000px"
          />
        </Box>

        <Stack flex={1} flexBasis={400}>
          <Stack alignItems="center">
            <Title variant="h3" fontSize="4xl">
              Pra quem é o Certificado?
            </Title>

            <HStack pt="4" pb="10">
              <Text fontWeight="bold" color="secondary">
                Para Mim
              </Text>
              {/* <Switch id="email-alerts" /> */}
              <Switch
                value={toMe}
                onChange={setToMe}
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
              <Text fontWeight="medium">Para minha Empresa</Text>
            </HStack>

            <HStack spacing="30px" alignItems="stretch">
              <Stack spacing="15px" flex={1}>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <ListItemProduto
                      index={i}
                      curr={currShowed}
                      setCurr={setCurrShowed}
                      rotulo={"ROTULO"}
                      onClick={() => undefined}
                    />
                  ))}
              </Stack>

              <Stack flex={1} minHeight={520}>
                <Stack
                  flexBasis="100%"
                  background="secondary"
                  px="6"
                  py="4"
                  borderRadius="2xl"
                >
                  <Text color="white" fontSize="xl" fontWeight="bold">
                    Sobre o e-CPF
                  </Text>
                  <Text color="white" my="4">
                    Nunc id justo eget lacus pulvinar iaculis sit amet a felis.
                    Vivamus vitae bibendum nibh, ac tristique urna. Quisque ac
                    est vitae arcu interdum dapibus id nec justo. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Suspendisse a velit quis magna fermentum
                    finibus eget eget lectus.
                  </Text>
                </Stack>

                <Stack background="secondary" px="6" py="4" borderRadius="2xl">
                  <Text color="white" fontSize="xl" fontWeight="bold">
                    O que é o Token?
                  </Text>
                  <Text color="white" my="4">
                    Nunc id justo eget lacus pulvinar iaculis sit amet a felis.
                    Vivamus vitae bibendum nibh, ac tristique urna. Quisque ac
                    est vitae arcu interdum dapibus id nec justo.
                  </Text>
                </Stack>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default memo(HeaderInfo);
