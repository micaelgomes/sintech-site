import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CarouselFeat: React.FC = () => {
  return (
    <Box position="relative" zIndex={0} mb={["96", "96", "20", "20", "20"]}>
      <Box
        position="absolute"
        backgroundColor={[
          "transparent",
          "transparent",
          "white",
          "white",
          "white",
        ]}
        opacity={[1, 1, 0.75, 0.75, 0.75]}
        borderRightRadius="3xl"
        top={["80%", "95%", "40%", "40%", "40%"]}
        py={["28", "28", "28", "28", "28"]}
        px={["0", "0", "24", "24", "24"]}
        width={["100%", "100%", "container.md", "container.md", "container.md"]}
        textAlign={["left", "left", "right", "right", "right"]}
        zIndex={5}
      >
        <Heading
          color="secondary"
          fontSize={["4xl", "5xl", "7xl", "7xl", "7xl"]}
          textAlign={["left", "left", "right", "right", "right"]}
          pl="4"
          lineHeight={0.95}
        >
          Video Chamada
        </Heading>
        <Text fontSize="2xl" fontWeight="thin" mt="6" pl="4">
          Pensando nisso, a Sintech oferece serviços para trazer comodidade,
          agilidade, segurança e garantia nas atividades de seus clientes pelo
          meio digital.
        </Text>
      </Box>

      <Box
        display={["none", "none", "block", "block", "block"]}
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
        blurDataURL="/woman.png"
        alt="mulher olhando o celular"
        width={1920}
        height={1560}
      />
    </Box>
  );
};

export default CarouselFeat;
