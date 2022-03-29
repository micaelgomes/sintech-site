import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type ListItemProdutoProps = {
  index: number;
  curr: number;
  setCurr: (index: number) => void;
};

const ListItemProduto: React.FC<ListItemProdutoProps> = ({
  curr,
  setCurr,
  index,
}) => {
  const [opened, setOpened] = useState(false);

  const toggleOpen = () => {
    setOpened(!opened);
    setCurr(index);
  };

  useEffect(() => {
    if (curr !== index) {
      setOpened(false);
    }
  }, [curr]);

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
        transform: "translateY(-5px)",
      }}
    >
      <HStack justifyContent="space-between">
        <Text
          color={opened ? "white" : "secondary"}
          fontWeight="bold"
          fontSize="lg"
          ml="2"
        >
          e-CPF A1 | Arquivo
        </Text>
        <Button
          position="relative"
          backgroundColor="transparent"
          shadow="none"
          variant="primary"
          p="unset"
          zIndex={0}
          _hover={{}}
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
      {opened && (
        <Box px="2">
          <Text fontSize="14px" color={opened ? "white" : "secondary"}>
            Aenean scelerisque mi massa, eget tempor magna congue sed. Integer
            tristique varius quam, eu varius orci rhoncus ac. Sed elit tortor,
            convallis in mauris nec, sollicitudin consectetur nisi.
          </Text>
        </Box>
      )}
    </Stack>
  );
};

export default memo(ListItemProduto);
