import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Button from "../../globals/Button";
import Title from "../../globals/Title";
import { questions } from "./questions";

const Faq: React.FC = () => {
  return (
    <Flex
      position="relative"
      width="100%"
      bgGradient="linear(to-b, #FFFFFF, #A7D5ED)"
    >
      <Flex
        px="4"
        alignItems="flex-start"
        flexDirection="column"
        width="100%"
        maxWidth={1200}
        mb="48"
        mx="auto"
      >
        <Title variant="h1" maxWidth={500} mb="28">
          Perguntas Frequentes
        </Title>

        <HStack spacing={8} width="100%">
          {questions.map((question, i) => (
            <Stack
              key={i}
              spacing={10}
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={`/assets/${question.icon}`}
                alt="ecnpj"
                width="150px"
                height="150px"
                filter="grayscale(50%)"
              />
              <Text
                align="center"
                fontSize="xl"
                fontWeight="bold"
                color="secondary"
              >
                {question.question}
              </Text>
              <Button variant="secondary">Ver perguntas frequentes</Button>
            </Stack>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Faq;
