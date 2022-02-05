import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface SubtitleProps extends TextProps {}

const Subtitle: React.FC<SubtitleProps> = ({ children, ...props }) => {
  return (
    <Text fontSize="3xl" color="secondary" {...props}>
      {children}
    </Text>
  );
};

export default Subtitle;
