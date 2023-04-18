import { Box, Flex, FormControl, HStack, Input, Stack, Image } from "@chakra-ui/react";
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
import { useState, useEffect } from "react";
import { SubcategoriaType, getListaSubcategoriaPF, getListaSubcategoriaPJ } from "../../service/useCases/getListaProdutos";
import Link from "next/link";

const Footer = () => {
  const buttonToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const [subcategorias, setSubcategorias] = useState<SubcategoriaType[]>([]);

  useEffect(() => {
    const getProdutosPorCategorias = async () => {
      const tmpSubcategoriaPF = await getListaSubcategoriaPF();
      const tmpSubcategoriaPJ = await getListaSubcategoriaPJ();

      setSubcategorias([...tmpSubcategoriaPF, ...tmpSubcategoriaPJ]);
    };

    getProdutosPorCategorias();
  }, []);


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
                  Av. Colares Moreira, 444, Monumental Shopping - Sobre
                  Loja 105A Jardim Renascenca, São Luís - MA
                </Subtitle>
              </Box>

              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  Telefone
                </Title>
                <Subtitle fontSize="md">
                  <a href="tel:+559832274147" target={"_blank"}>+55 98 3227-4147</a>
                </Subtitle>
              </Box>

              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  E-mail
                </Title>
                <Subtitle fontSize="md">
                  <a href="mailto:contato@sintechsolucoes.com.br" target={'_blank'}>contato@sintechsolucoes.com.br</a>
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
                  <a href="https://sintechsolucoes.net/atendimento" target="_blank" rel="atendimento">Agente seu atendimento</a>
                </Subtitle>
                <Subtitle fontSize="md" mb="1">
                  <a href="https://sintechsolucoes.net/sejaumparceiro" target="_blank" rel="seja nosso parceiro">Seja nosso parceiro</a>
                </Subtitle>
                <Subtitle fontSize="md" mb="1">
                  <a href="https://sintechsolucoes.net/faleconosco" target="_blank" rel="trabalhe conosco">Trabalhe conosco</a>
                </Subtitle>
              </Box>

              <Box>
                <Title variant="h3" fontSize="xl" mb="2">
                  Central do Cliente
                </Title>
                <Subtitle fontSize="md" mb="1">
                  <a href="https://sintechsolucoes.net/faleconosco" target="_blank" rel="fale conosco">Fale conosco</a>
                </Subtitle>
                <Subtitle fontSize="md" mb="1">
                  <a href="https://sintechsolucoes.net/faq/" target="_blank" rel="faq juridico">Perguntas frequentes</a>
                </Subtitle>

                <HStack mt="8">
                  <Box backgroundColor="secondary" p="2" borderRadius="md">
                    <a href="https://www.instagram.com/sintechcertificadodigital/" target={"_blank"}>
                      <FaInstagram color="#38B3D2" size={24} />
                    </a>
                  </Box>
                  <Box backgroundColor="secondary" p="2" borderRadius="md">
                    <a href="https://www.facebook.com/certificadodigitalma" target={"_blank"}>
                      <FaFacebookF color="#38B3D2" size={24} />
                    </a>
                  </Box>
                  <Box backgroundColor="secondary" p="2" borderRadius="md">
                    <a href="https://www.youtube.com/channel/UCU2RTfl5jBRD8DgqyGHzJYw" target={"_blank"}>
                      <FaYoutube color="#38B3D2" size={24} />
                    </a>
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
                  {subcategorias.map((service, i) => (
                    <Link
                      key={i}
                      href={`/produto/${service.id}?rotulo=${service.rotulo}`}
                    >
                      <Subtitle fontSize="md" fontWeight="semibold" _hover={{
                        transform: "scale(1.03)",
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                      }}>
                        {service.rotulo}
                      </Subtitle>
                    </Link>
                  )
                  )};
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
      </Flex >
    </Flex >
  );
};

export default Footer;
