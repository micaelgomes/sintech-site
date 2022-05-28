import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <Box
      position="relative"
      width="100%"
      py={["4", "6", "16"]}
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
      <Box overflowX="auto">
        <Flex
          position="relative"
          alignItems="center"
          justifyContent="center"
          minWidth={1000}
          maxWidth={1200}
          mx="auto"
          pb="4"
          zIndex={5}
        >
          <Image
            src="/receita.jpg"
            blurDataURL="/receita.jpg"
            alt="Logo da Receita Federal"
            width={450}
            height={200}
          />

          <Image
            src="/gti.jpg"
            blurDataURL="/gti.jpg"
            alt="Logo da Receita Federal"
            width={200}
            height={175}
          />

          <Image
            src="/soluti.jpg"
            blurDataURL="/soluti.jpg"
            alt="Logo da Receita Federal"
            width={350}
            height={175}
          />

          <Image
            src="/criativos.jpg"
            blurDataURL="/criativos.jpg"
            alt="Logo da Receita Federal"
            width={400}
            height={200}
          />

          <Image
            src="/iti.jpg"
            blurDataURL="/iti.jpg"
            alt="Logo da Receita Federal"
            width={400}
            height={175}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Partners;
