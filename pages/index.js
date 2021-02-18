import "../src/components/converters/SaveVehicleToArrayConverter";
import SaveVehicleToArrayConverter from "../src/components/converters/SaveVehicleToArrayConverter";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box spacing={4} px={4} mt={2}>
      <SaveVehicleToArrayConverter />
    </Box>
  );
};

export default Home;
