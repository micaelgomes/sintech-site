import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  return (
    <Box
      backgroundColor="gray.100"
      px="8"
      py="4"
      borderRadius="xl"
      cursor="pointer"
      maxWidth={900}
      width="100%"
    >
      <Text color="secondary" fontSize="2xl" fontWeight="semibold">
        {question}
      </Text>
      <Text display="none" px="2" py="4" fontSize="lg">
        {answer}
      </Text>
    </Box>
  );
};

export default AccordionItem;
