import {
  Box,
  Center,
  Flex,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  Textarea,
  Button as ButtonChakra,
  FormErrorMessage,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import Button from "../../globals/Button";
import AccordionItem from "./AccordionItem";
import InputPartner from "./inputPartner";
import { questions } from "./questions";
import { FiChevronUp, FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import api from "../../../service/api";
import { useToast } from "../../../context/toast";

interface FormData {
  nome: string;
  sobrenome: string;
  telefone: string;
  email: string;
  mensagem: string;
}

const Accordion: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const { addToast } = useToast();

  async function onSubmit(values: FormData) {
    await api
      .post("/form-parceiro", values)
      .then(() => {
        addToast("success", "Mensagem Enviada!");
      })
      .catch(() => {
        addToast("error", "Problemas no envio do mensagem.");
      });
  }

  useEffect(() => {
    reset({
      email: "",
      mensagem: "",
      nome: "",
      sobrenome: "",
      telefone: "",
    });
  }, [isSubmitSuccessful]);

  return (
    <>
      <Box
        position="relative"
        backgroundColor="#447186"
        width="100%"
        px={["4", "4", "0"]}
        _before={{
          content: '""',
          position: "absolute",
          backgroundImage: "url('/waves/faq_top.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "top",
          width: "100%",
          height: 100,
          left: 0,
          right: 0,
          zIndex: 5,
          top: -100,
        }}
        _after={{
          content: '""',
          position: "absolute",
          backgroundImage: "url('/waves/faq_bottom.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "bottom",
          width: "100%",
          height: 100,
          left: 0,
          right: 0,
          zIndex: 5,
        }}
      >
        <Box
          position="absolute"
          width="100%"
          height="10px"
          backgroundColor="#447186"
          left={0}
          marginTop="-5px"
          zIndex={0}
        />

        <Center mb="20" mt="0">
          <ButtonChakra
            background={"transparent"}
            zIndex={1}
            width="75px"
            height="75px"
            _before={{
              content: '""',
              position: "absolute",
              backgroundColor: "#CEE4E2",
              width: 75,
              height: 75,
              zIndex: -1,
              borderRadius: "100%",
            }}
            _active={{}}
            _pressed={{}}
            _hover={{
              backgroundColor: "transparent",
            }}
          >
            <FiChevronUp size={48} />
          </ButtonChakra>
        </Center>

        <Stack alignItems="center" spacing={4}>
          {questions.map((question, i) => (
            <AccordionItem
              key={i}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </Stack>

        <Center flexDirection="column" mt="16" px={["2", "2", "0"]}>
          <Heading
            color="white"
            fontSize="5xl"
            fontWeight="semibold"
            textAlign={["left", "center", "center"]}
          >
            Ainda precisa de ajuda?
          </Heading>
          <Text
            color="white"
            mt="4"
            fontSize="2xl"
            fontWeight="semibold"
            textAlign={["left", "center", "center"]}
          >
            Entre em contato com a gente através dos nossos canais de
            atendimento.
          </Text>
          <Button variant="primary" mt="8" zIndex={10}>
            <a href="https://sintechsolucoes.net/faleconosco" target={"_blank"}>
              Ver todos os contatos
            </a>
          </Button>
        </Center>

        <Box
          position="absolute"
          width="100%"
          height="10px"
          backgroundColor="#447186"
          left={0}
          marginTop="-5px"
          zIndex={0}
        />
      </Box>

      {/* Formulário */}

      <Flex
        position="relative"
        zIndex={0}
        backgroundColor="secondary"
        width="100%"
        mt="4"
      >
        <Box
          mr="4"
          width="100%"
          height="100%"
          maxWidth={750}
          display={["none", "none", "none", "none", "block", "block"]}
        >
          <Image
            src="/partner_image_man.png"
            blurDataURL="/partner_image_man.png"
            alt="Homem empresário na foto"
            layout="responsive"
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
          mx="4"
          my={["36", "48", "48", "48", "16"]}
        >
          <Box maxWidth={700} mx="auto">
            <Heading
              color="white"
              fontSize={["3xl", "4xl", "5xl", "5xl"]}
              fontWeight="bold"
              mb="6"
            >
              Seja um parceiro Sintech, Entre em contato conosco.
            </Heading>

            <form onSubmit={handleSubmit(onSubmit)}>
              <HStack spacing="4">
                <InputPartner
                  id="nome"
                  name="nome"
                  placeholder="Nome:"
                  errors={errors}
                  register={register}
                />
                <InputPartner
                  id="sobrenome"
                  name="sobrenome"
                  placeholder="Sobrenome:"
                  errors={errors}
                  register={register}
                />
              </HStack>
              <HStack spacing="4">
                <InputPartner
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail:"
                  errors={errors}
                  register={register}
                />
                <InputPartner
                  id="telefone"
                  name="telefone"
                  placeholder="Telefone:"
                  errors={errors}
                  register={register}
                />
              </HStack>

              <Box my="2">
                <FormControl isInvalid={!!errors.mensagem}>
                  <Textarea
                    id="mensagem"
                    placeholder="Nos deixe uma mensagem: "
                    backgroundColor="white"
                    size="lg"
                    height={120}
                    _placeholder={{ fontWeight: 700, color: "gray.400" }}
                    {...register("mensagem", {
                      required: "Campo obrigatório",
                    })}
                  />
                  <FormErrorMessage>
                    {errors?.mensagem && errors?.mensagem.message}
                  </FormErrorMessage>
                </FormControl>
              </Box>

              <Box pt="1">
                <Button
                  type="submit"
                  variant="primary"
                  backgroundColor="primary"
                  color="white"
                  borderRadius="xl"
                  minWidth={200}
                  mt="2"
                  ml="auto"
                  isLoading={isSubmitting}
                  _active={{}}
                >
                  <Text mx="2">Enviar</Text>
                  <FiSend color="#FFF" size={30} />
                </Button>
              </Box>
            </form>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Accordion;
