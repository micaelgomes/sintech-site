import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  getListaSubcategoriaPF,
  getListaSubcategoriaPJ,
  SubcategoriaType,
} from "../../../service/useCases/getListaProdutos";
import Subtitle from "../../globals/Subtitle";
import Title from "../../globals/Title";

const ListService: React.FC = () => {
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
    <>
      <Flex px="4" zIndex={0}>
        <Center flexDirection="column" my="28" maxWidth="container.lg">
          <Title variant="h1" textAlign="center" maxWidth={750} mb="8">
            O futuro é digital, simples assim.
          </Title>

          <Subtitle fontSize={["xl", "2xl", "3xl", "3xl"]} textAlign="center">
            Com mais de sete anos no mercado, a Sintech apresenta um menu de
            soluções de Certificação Digital de forma confiável no meio
            eletrônicos e soluções em Gestão Empresarial para empresas que atuam
            diretamente com a atividade de certificação.
          </Subtitle>
        </Center>

        <Box position="absolute" left={0} zIndex={-5} opacity={0.75}>
          <Image
            src="/logo_sintech_body.png"
            alt="Logo da Sintech"
            width={1000}
            height={1000}
          />
        </Box>
      </Flex>
      <Flex
        px="4"
        alignItems="flex-start"
        justifyContent="space-between"
        width="100%"
        maxWidth={1200}
        mb="32"
        overflowX="auto"
        overflowY="hidden"
        zIndex={0}
      >
        {subcategorias.map((service, i) => (
          <Link
            key={i}
            href={`/produto/${service.id}?rotulo=${service.rotulo}`}
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              _hover={{
                transform: "scale(1.1)",
                cursor: "pointer",
                transition: "all 0.2s ease-in-out",
              }}
              m="2"
            >
              <Box
                backgroundColor="secondary"
                borderRadius="2xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={[75, 100, 100, 100, 100]}
                height={[75, 100, 100, 100, 100]}
                p="4"
              >
                <Image
                  src={`/assets/${service.rotulo.toLowerCase()}.svg`}
                  alt={service.rotulo}
                  width="100%"
                  height="100%"
                />
              </Box>
              <Text
                mt="4"
                fontWeight="bold"
                fontSize={["lg", "xl", "2xl", "2xl"]}
                color="secondary"
                maxWidth={100}
                textAlign="center"
                lineHeight="shorter"
              >
                {service.rotulo}
              </Text>
            </Flex>
          </Link>
        ))}
      </Flex>
    </>
  );
};

export default ListService;
