import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Box, Heading, Text } from "@chakra-ui/react";
import { items } from "./items";
import Button from "../../globals/Button";

const CarouselFeat: React.FC = () => {
  const InfiniteCarousel = dynamic<any>(() => import("react-leaf-carousel"), {
    ssr: false,
  });

  return (
    <Box position="relative" zIndex={0} mb={["28rem", "96", "20", "20", "20"]}>
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
        <InfiniteCarousel
          arrows={false}
          dots
          slidesToScroll={1}
          slidesToShow={1}
        >
          {items.map((item, i) => (
            <div key={i}>
              <Heading
                color="secondary"
                fontSize={["4xl", "5xl", "7xl", "7xl", "7xl"]}
                textAlign={["left", "left", "right", "right", "right"]}
                pl="4"
                lineHeight={0.95}
              >
                {item.title}
              </Heading>
              <Text fontSize="2xl" fontWeight="thin" mt="6" pl="4">
                {item.content}
              </Text>
              <Button variant="primary" mt={4}>
                <a href={item.link} target={"_blank"}> {item.label}</a>
              </Button>
            </div>
          ))}
        </InfiniteCarousel>
      </Box>

      <Box
        display={["none", "none", "block", "block", "block"]}
        position="absolute"
        borderTopLeftRadius="3xl"
        borderBottomLeftRadius="3xl"
        top="calc(40% + 540px)"
        right={0}
        py="12"
        px="24"
        width={600}
        zIndex={1}
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
      />

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
