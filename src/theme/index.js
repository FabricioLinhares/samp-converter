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
};

const theme = extendTheme({ colors });

export default theme;
