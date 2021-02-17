import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: "#e9f3fd",
    100: "#cdd7e5",
    200: "#afbdcf",
    300: "#91a3bb",
    400: "#7288a7",
    500: "#586f8d",
    600: "#44566e",
    700: "#303d50",
    800: "#1b2532",
    900: "#060c17",
  },
  secondary: {
    50: "#ffefe5",
    100: "#f2d3bf",
    200: "#e8b796",
    300: "#e09a6d",
    400: "#d67d44",
    500: "#be642b",
    600: "#934e21",
    700: "#6a3817",
    800: "#40210d",
    900: "#190a00",
  },
};

const theme = extendTheme({ colors });

export default theme;
