import { Box, Flex, FormControl, HStack, Input, Stack } from "@chakra-ui/react";
import Button from "./Button";
import { Button as ButtonChakra } from "@chakra-ui/react";
import Subtitle from "./Subtitle";
import Title from "./Title";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const buttonToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex width="100%" zIndex={5} bgGradient="linear(to-b, #E6EEF1, #A4D6ED)">
      <Flex
        as="footer"
        py={["14", "14", "24"]}
        maxWidth={1200}
        width="100%"
        mx="auto"
        px={["4", "8", "0"]}
      >
        <Stack direction={["column", "column", "row"]} spacing="50px">
          <Flex gap="50px" direction={["column", "row"]} maxWidth="700px">
            <Box flex={1}>
              <Title variant="h3" fontSize="4xl" fontWeight="bold" mb="4">
                Se interesou em segurança digital?
              </Title>
              <Subtitle fontSize="xl">
                Receba em seu e-mail nossas publicações do Blog em primeira mão.
              </Subtitle>

              <Box
                mt="12"
                p="1"
                border="2px solid"
                borderColor="secondary"
                borderRadius="1rem"
              >
                <FormControl
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    border="none"
                    _placeholder={{
                      color: "secondary",
                      fontSize: "lg",
                    }}
                  />

                  <Button
                    variant="secondary"
                    fontSize="md"
                    _hover={{
                      transform: "none",
                    }}
                  >
                    Cadastrar
                  </Button>
                </FormControl>
              </Box>
            </Box>

            <Flex
              flex={1}
              maxWidth="250px"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  Nossa sede
                </Title>
                <Subtitle fontSize="md">
                  Av. Colares Moreira, 3197-3444, Monumental Shopping - Sobre
                  Loja 105A Jardim Renascenca, São Luís - MA
                </Subtitle>
              </Box>

              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  Telefone
                </Title>
                <Subtitle fontSize="md">+55 98 3227-4147</Subtitle>
              </Box>

              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  E-mail
                </Title>
                <Subtitle fontSize="md">
                  contato@sintechsolucoes.com.br
                </Subtitle>
              </Box>
            </Flex>
          </Flex>

          <Flex flex={1} gap="50px" direction={["column", "row"]}>
            <Flex
              flex={1}
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  Sobre nós
                </Title>
                <Subtitle fontSize="md" mb="1">
                  Agente seu atendimento
                </Subtitle>
                <Subtitle fontSize="md" mb="1">
                  Seja nosso parceiro
                </Subtitle>
                <Subtitle fontSize="md" mb="1">
                  Trabalhe conosco
                </Subtitle>
              </Box>

              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  Central do Cliente
                </Title>
                <Subtitle fontSize="md" mb="1">
                  Fale conosco
                </Subtitle>
                <Subtitle fontSize="md" mb="1">
                  Perguntas frequentes
                </Subtitle>

                <HStack mt="8">
                  <Box backgroundColor="secondary" p="2" borderRadius="md">
                    <FaTwitter color="#38B3D2" size={24} />
                  </Box>
                  <Box backgroundColor="secondary" p="2" borderRadius="md">
                    <FaInstagram color="#38B3D2" size={24} />
                  </Box>
                  <Box backgroundColor="secondary" p="2" borderRadius="md">
                    <FaFacebookF color="#38B3D2" size={24} />
                  </Box>
                  <Box backgroundColor="secondary" p="2" borderRadius="md">
                    <FaYoutube color="#38B3D2" size={24} />
                  </Box>
                </HStack>
              </Box>
            </Flex>

            <Flex flex={1} flexDirection="column">
              <Title variant="h3" fontSize="xl" mb="2">
                Produtos
              </Title>

              <Flex flex={1} justifyContent="space-between" gap="30px">
                <Stack>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    e-CPF
                  </Subtitle>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    e-CNPJ
                  </Subtitle>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    OAB
                  </Subtitle>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    CRM
                  </Subtitle>
                </Stack>
                <Stack>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    Bird ID
                  </Subtitle>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    Nota Fiscal
                  </Subtitle>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    SSL
                  </Subtitle>
                  <Subtitle fontSize="md" fontWeight="semibold">
                    Teste Online
                  </Subtitle>
                </Stack>
              </Flex>

              <Flex flex={1}>
                <ButtonChakra
                  background="none"
                  border="2px solid"
                  borderColor="secondary"
                  width={100}
                  height={100}
                  borderRadius="100%"
                  m="auto"
                  mb={0}
                  mt={["16", "auto"]}
                  onClick={buttonToTop}
                >
                  <Subtitle fontSize="xl">Subir</Subtitle>
                  <FaArrowUp color="#194F69" size={24} />
                </ButtonChakra>
              </Flex>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Footer;
