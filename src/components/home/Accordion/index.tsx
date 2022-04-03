import {
  Box,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Button from "../../globals/Button";
import AccordionItem from "./AccordionItem";
import { questions } from "./questions";

const Accordion: React.FC = () => {
  return (
    <>
      <Box
        position="relative"
        backgroundColor="#447186"
        minHeight={500}
        p="24"
        width="100%"
        zIndex={5}
        _before={{
          content: '""',
          position: "absolute",
          height: 400,
          top: -50,
          left: -750,
          right: -750,
          zIndex: -5,
          backgroundColor: "#447186",
          borderRadius: "100%",
        }}
        _after={{
          content: '""',
          position: "absolute",
          height: 400,
          left: -750,
          right: -750,
          bottom: -50,
          zIndex: -5,
          backgroundColor: "#447186",
          borderRadius: "100%",
        }}
      >
        <Stack alignItems="center" spacing={4}>
          {questions.map((question, i) => (
            <AccordionItem
              key={i}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </Stack>

        <Center flexDirection="column" mt="16">
          <Heading color="white" fontSize="5xl" fontWeight="semibold">
            Ainda precisa de ajuda?
          </Heading>
          <Text color="white" mt="4" fontSize="2xl" fontWeight="semibold">
            Entre em contato com a gente através dos nossos canais de
            atendimento.
          </Text>
          <Button variant="primary" mt="8">
            Ver todos os contatos
          </Button>
        </Center>
      </Box>

      <Flex
        position="relative"
        zIndex={0}
        backgroundColor="secondary"
        width="100%"
        _after={{
          content: '""',
          position: "absolute",
          height: 400,
          left: -750,
          right: -750,
          bottom: -300,
          zIndex: 0,
          backgroundColor: "#FFF",
          borderRadius: "100%",
        }}
      >
        <Box mr="4">
          <Image
            src="/partner.png"
            alt="mulher olhando o celular"
            width={750}
            height={900}
          />
        </Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          maxWidth="container.lg"
          width="100%"
          m="4"
        >
          <Heading
            color="white"
            fontSize="5xl"
            fontWeight="bold"
            maxWidth={700}
          >
            Seja um parceiro Sintech, Entre em contato conosco.
          </Heading>

          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Flex>
      </Flex>
    </>
  );
};

export default Accordion;
