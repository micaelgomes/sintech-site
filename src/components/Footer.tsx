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

const Footer = () => (
  <Flex width="100%" zIndex={5} bgGradient="linear(to-b, #E6EEF1, #A4D6ED)">
    <Flex as="footer" py="24" maxWidth={1200} mx="auto">
      <Stack direction={["column", "row"]} spacing={50}>
        <Box flex={1} flexBasis={150}>
          <Title variant="h3" fontSize="4xl" fontWeight="bold" mb="4">
            Se interesou em segurança digital?
          </Title>
          <Subtitle fontSize="1.35rem">
            Receba em seu e-mail nossas publicações do Blog em primeira mão.
          </Subtitle>

          <Box
            mt="12"
            p="1"
            border="2px solid"
            borderColor="secondary"
            borderRadius="1rem"
          >
            <FormControl display="flex" flexDirection="row" alignItems="center">
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

        <Flex flex={1} flexDirection="column" justifyContent="space-between">
          <Box>
            <Title variant="h3" fontSize="xl" mb="2">
              Nossa sede
            </Title>
            <Subtitle fontSize="lg">
              Av. Colares Moreira, 3197-3441, Monumental Shopping - Sobre Loja
              105A Jardim Renascenca, São Luís - MA
            </Subtitle>
          </Box>

          <Box>
            <Title variant="h3" fontSize="xl" mb="2">
              Telefone
            </Title>
            <Subtitle fontSize="lg">+55 98 3227-4147</Subtitle>
          </Box>

          <Box>
            <Title variant="h3" fontSize="xl" mb="2">
              E-mail
            </Title>
            <Subtitle fontSize="lg">contato@sintechsolucoes.com.br</Subtitle>
          </Box>
        </Flex>

        <Flex flex={1} flexDirection="column" justifyContent="space-between">
          <Box>
            <Title variant="h3" fontSize="xl" mb="2">
              Sobre nós
            </Title>
            <Subtitle fontSize="lg" mb="1">
              Agente seu atendimento
            </Subtitle>
            <Subtitle fontSize="lg" mb="1">
              Seja nosso parceiro
            </Subtitle>
            <Subtitle fontSize="lg" mb="1">
              Trabalhe conosco
            </Subtitle>
          </Box>

          <Box>
            <Title variant="h3" fontSize="xl" mb="2">
              Central do Cliente
            </Title>
            <Subtitle fontSize="lg" mb="1">
              Fale conosco
            </Subtitle>
            <Subtitle fontSize="lg" mb="1">
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

          <Flex justifyContent="space-between">
            <Stack>
              <Subtitle fontSize="lg" fontWeight="semibold">
                e-CPF
              </Subtitle>
              <Subtitle fontSize="lg" fontWeight="semibold">
                e-CNPJ
              </Subtitle>
              <Subtitle fontSize="lg" fontWeight="semibold">
                OAB
              </Subtitle>
              <Subtitle fontSize="lg" fontWeight="semibold">
                CRM
              </Subtitle>
            </Stack>
            <Stack>
              <Subtitle fontSize="lg" fontWeight="semibold">
                Bird ID
              </Subtitle>
              <Subtitle fontSize="lg" fontWeight="semibold">
                Nota Fiscal
              </Subtitle>
              <Subtitle fontSize="lg" fontWeight="semibold">
                SSL
              </Subtitle>
              <Subtitle fontSize="lg" fontWeight="semibold">
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
            >
              <Subtitle fontSize="xl">Subir</Subtitle>
              <FaArrowUp color="#194F69" size={24} />
            </ButtonChakra>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  </Flex>
);

export default Footer;
