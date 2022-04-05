import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <Box
      position="relative"
      width="100%"
      py="16"
      backgroundColor="white"
      _before={{
        content: '""',
        position: "absolute",
        borderTopLeftRadius: "50% 100%",
        borderTopRightRadius: "50% 100%",
        background: "white",
        top: "-60px",
        left: -100,
        right: -100,
        zIndex: 1,
        height: 85,
      }}
    >
      <Flex
        position="relative"
        alignItems="center"
        justifyContent="center"
        maxWidth={1200}
        mx="auto"
        zIndex={5}
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
    </Box>
  );
};

export default Partners;
