import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Partners: React.FC = () => {
  return (
    <Box
      position="relative"
      width="100%"
      py={["4", "6", "10"]}
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
          gap="25px"
        >
          <Image
            src="/global.jpg"
            blurDataURL="/global.jpg"
            alt="Logo da Global Sign"
            width={400}
            height={125}
          />

          <Image
            src="/fiema.jpg"
            blurDataURL="/fiema.jpg"
            alt="Logo da FIEMA"
            width={320}
            height={110}
          />

          <Image
            src="/soluti.jpg"
            blurDataURL="/soluti.jpg"
            alt="Logo da Soluti"
            width={300}
            height={250}
          />

          <Image
            src="/acm.jpg"
            blurDataURL="/acm.jpg"
            alt="Logo da Associação Comercial do Maranhão"
            width={400}
            height={200}
          />

          <Image
            src="/iti.jpg"
            blurDataURL="/iti.jpg"
            alt="Logo do Instituto Nacional de Tecnologia da Informação"
            width={400}
            height={150}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Partners;
