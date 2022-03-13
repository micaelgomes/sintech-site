import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <Flex width="100%" mb="16">
      <Flex
        alignItems="center"
        justifyContent="center"
        maxWidth={1200}
        mx="auto"
      >
        <Image
          src="/receita.jpg"
          alt="Logo da Receita Federal"
          width={450}
          height={200}
        />

        <Image
          src="/gti.jpg"
          alt="Logo da Receita Federal"
          width={200}
          height={175}
        />

        <Image
          src="/soluti.jpg"
          alt="Logo da Receita Federal"
          width={350}
          height={175}
        />

        <Image
          src="/criativos.jpg"
          alt="Logo da Receita Federal"
          width={400}
          height={200}
        />

        <Image
          src="/iti.jpg"
          alt="Logo da Receita Federal"
          width={400}
          height={175}
        />
      </Flex>
    </Flex>
  );
};

export default Partners;
