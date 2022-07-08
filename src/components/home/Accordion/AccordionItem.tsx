import { Box, Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const toogleOpen = () => setOpen(!open);

  return (
    <Box
      backgroundColor={open ? "#102840" : "#E1E8F0"}
      px="8"
      py="4"
      borderRadius="xl"
      cursor="pointer"
      maxWidth={900}
      width="100%"
      onClick={toogleOpen}
    >
      <Flex
        justifyContent="space-between"
        alignItems={["flex-start", "center"]}
        height="auto"
      >
        <Text
          color={open ? "#E1E8F0" : "secondary"}
          fontSize={["md", "lg", "2xl"]}
          fontWeight="semibold"
        >
          {question}
        </Text>
        <Button
          backgroundColor={"transparent"}
          zIndex={1}
          m="0"
          p="0"
          _before={{
            content: '""',
            position: "absolute",
            backgroundColor: "#194C68",
            width: 6,
            height: 6,
            zIndex: -1,
            borderRadius: "100%",
          }}
        >
          {open ? (
            <FiMinus size={18} color="#DEE5EF" />
          ) : (
            <FiPlus size={18} color="#DEE5EF" />
          )}
        </Button>
      </Flex>
      <Text
        display={open ? "block" : "none"}
        px="2"
        py="4"
        fontSize="lg"
        color="#A8D5EC"
      >
        {answer}
      </Text>
    </Box>
  );
};

export default AccordionItem;
