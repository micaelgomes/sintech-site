import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

import Title from "./Title";

const HeaderInfo: React.FC = () => {
  return (
    <Flex
      px="4"
      alignItems="center"
      width="100%"
      maxWidth={1200}
      minHeight="calc(100vh - 82px)"
      zIndex={0}
    >
      <HStack spacing={150} alignItems="flex-start">
        <Box flex={1} zIndex={-5}>
          <Image
            src="/infos.png"
            alt="Homem usando celular"
            width="600px"
            height="1000px"
          />
        </Box>

        <Stack flex={1}>
          <Stack alignItems="center">
            <Title variant="h3" fontSize="4xl">
              Pra quem é o Certificado?
            </Title>

            <HStack py="4">
              <Text>Para Mim</Text>
              <Switch id="email-alerts" />
              <Text>Para minha Empresa</Text>
            </HStack>
          </Stack>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default HeaderInfo;
