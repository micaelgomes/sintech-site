import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import { motion } from "framer-motion";
import { useProduto } from "../../lista/context/produto";

type ListItemProdutoProps = {
  index: number;
  rotulo: string;
  onClick: () => void;
};

const ListItemProduto: React.FC<ListItemProdutoProps> = ({
  index,
  rotulo,
  onClick,
}) => {
  const { currShowed, setCurrShowed } = useProduto();
  const [opened, setOpened] = useState(currShowed === index);

  const toggleOpen = () => {
    if (currShowed !== index) {
      setOpened(!opened);
      setCurrShowed(index);
    }
  };

  useEffect(() => {
    if (currShowed === index) {
      setOpened(true);
    } else {
      setOpened(false);
    }
  }, [currShowed]);

  return (
    <Stack
      backgroundColor={opened ? "#205067" : "white"}
      borderRadius="2xl"
      px="2"
      py="3"
      cursor="pointer"
      onClick={toggleOpen}
      transition="all .3s ease-out"
      _hover={{
        transform: "translateY(-3px)",
      }}
      onClickCapture={onClick}
    >
      <HStack justifyContent="space-between">
        <Text
          color={opened ? "white" : "secondary"}
          fontWeight="bold"
          fontSize="xl"
          ml="2"
        >
          {rotulo}
        </Text>
        <Button
          position="relative"
          backgroundColor="transparent"
          shadow="none"
          variant="primary"
          p="unset"
          zIndex={0}
          _hover={{
            background: "none",
          }}
          _after={{
            content: '""',
            position: "absolute",
            backgroundColor: opened ? "#276C7B" : "#CEE4E2",
            width: 30,
            height: 30,
            borderRadius: "100%",
            zIndex: -1,
          }}
        >
          {opened ? (
            <BiChevronUp color="#FDFFFC" size={24} />
          ) : (
            <BiChevronDown color="#194F69" size={24} />
          )}
        </Button>
      </HStack>

      <motion.div
        style={{ margin: 0 }}
        animate={{
          height: opened ? "auto" : 0,
          display: opened ? "block" : "none",
          visibility: opened ? "visible" : "hidden",
        }}
        transition={{ ease: "linear" }}
      >
        <Box px="2">
          <motion.div
            animate={{
              opacity: opened ? 1 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <Stack>
              <Text fontSize="md" mb="2" color={opened ? "white" : "secondary"}>
                Aenean scelerisque mi massa, eget tempor magna congue sed.
                Integer tristique varius quam, eu varius orci rhoncus ac. Sed
                elit tortor, convallis in mauris nec, sollicitudin consectetur
                nisi.
              </Text>

              <Flex display={["flex", "flex", "none"]}>
                <Button
                  backgroundColor="primary"
                  color="white"
                  borderRadius="xl"
                  ml="auto"
                  _hover={{}}
                  _active={{}}
                >
                  Selecionar
                </Button>
              </Flex>
            </Stack>
          </motion.div>
        </Box>
      </motion.div>
    </Stack>
  );
};

export default memo(ListItemProduto);
