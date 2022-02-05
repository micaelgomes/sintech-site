import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface TitleProps extends HeadingProps {
  variant: "h1" | "h2" | "h3";
}

const Title: React.FC<TitleProps> = ({
  variant = "h1",
  children,
  ...props
}) => {
  return (
    <Heading
      as={variant}
      fontSize={["5xl", "5xl", "6xl", "7xl"]}
      fontWeight="bold"
      color="secondary"
      lineHeight="shorter"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Title;
