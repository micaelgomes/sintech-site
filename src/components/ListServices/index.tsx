import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import React from "react";

import { services } from "./services";

const ListService: React.FC = () => {
  return (
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
      {services.map((service, i) => (
        <Flex
          key={i}
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
            width={100}
            height={100}
            p="4"
          >
            <Image
              src={`/assets/${service.icon}`}
              alt={service.name}
              width="100%"
              height="100%"
            />
          </Box>
          <Text
            mt="4"
            fontWeight="bold"
            fontSize="2xl"
            color="secondary"
            maxWidth={100}
            textAlign="center"
            lineHeight="shorter"
          >
            {service.name}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default ListService;
