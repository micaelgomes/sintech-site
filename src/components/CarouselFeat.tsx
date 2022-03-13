import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CarouselFeat: React.FC = () => {
  return (
    <Box
      position="relative"
      zIndex={0}
      _after={{
        content: '""',
        position: "absolute",
        height: 500,
        left: -750,
        right: -750,
        bottom: -420,
        zIndex: 0,
        backgroundColor: "#FFF",
        borderRadius: "100%",
        transform: "rotateZ(-3deg)",
      }}
    >
      <Box
        position="absolute"
        backgroundColor="white"
        opacity={0.75}
        borderRightRadius="3xl"
        top="40%"
        py="28"
        px="24"
        width="container.md"
        textAlign="right"
        zIndex={5}
      >
        <Heading
          color="secondary"
          fontSize="7xl"
          textAlign="right"
          pl="4"
          lineHeight={0.95}
        >
          Video Chamada
        </Heading>
        <Text fontSize="2xl" fontWeight="thin" mt="6">
          Pensando nisso, a Sintech oferece serviços para trazer comodidade,
          agilidade, segurança e garantia nas atividades de seus clientes pelo
          meio digital.
        </Text>
      </Box>

      <Box
        position="absolute"
        borderTopLeftRadius="3xl"
        borderBottomLeftRadius="3xl"
        top="calc(40% + 550px)"
        right={0}
        py="12"
        px="24"
        width={600}
        zIndex={5}
        textAlign="right"
        _before={{
          content: '""',
          backgroundColor: "white",
          opacity: 0.75,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "absolute",
          zIndex: -1,
          borderLeftRadius: "1.5rem",
        }}
      >
        <HStack>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Box
                key={i}
                backgroundColor="secondary"
                width={100}
                height={2}
                borderRadius="lg"
                cursor="pointer"
              />
            ))}
        </HStack>
      </Box>

      <Image
        src="/woman.png"
        alt="mulher olhando o celular"
        width={1920}
        height={1560}
      />
    </Box>
  );
};

export default CarouselFeat;
