import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading: "Open Sans",
  body: "Open Sans",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: {
      button: {
        _hover: {
          backgroundColor: "primary",
          opacity: 0.9,
        },
        _active: {
          backgroundColor: "primary",
        },
      },
    },
  },
  colors: {
    black: "#020001",
    primary: "#47C192",
    secondary: "#194F69",
  },
  fonts,
  breakpoints,
  config: {
    cssVarPrefix: "sin",
  },
});

export default theme;
