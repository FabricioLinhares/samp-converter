import { useState } from "react";
import { RepeatIcon } from "@chakra-ui/icons";
import {
  HStack,
  VStack,
  IconButton,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

import { getCommandParams } from "../../../utils/getCommandParams";
import ResultTextarea from "../../ResultTextarea";
import TextareaWithTitle from "../../TextareaWithTitle";

const SaveVehicleToArrayConverter = () => {
  // const [allowedParams, setAllowedParams] = useState([]);
  const [saveText, setSaveText] = useState("");
  const [convertText, setConvertText] = useState("");

  function handleChangeSaveText(event) {
    const text = event.target.value;

    setSaveText(text);
  }

  function convertSave([command, comment], indexLine, array) {
    const commandParams = getCommandParams(command);

    // const params = commandParams.filter((_, index) => allowedParams[index]);
    const params = commandParams;

    const arrayLine = `{${params.join(",")}}${
      indexLine != array.length - 1 ? "," : ""
    } // ${comment}`;

    return arrayLine;
  }

  function handleClickConvert() {
    const lines = saveText.split("\n").filter((elem) => elem != "");
    const saves = lines.map((line) => line.split(" // "));

    console.log(saves);

    const convertedLines = saves.map(convertSave);

    setConvertText(convertedLines.join("\n"));
  }

  return (
    <VStack>
      <VStack w="100%" spacing={0} borderRadius="0.375rem" overflow="hidden">
        <HStack
          w="100%"
          bgColor="primary.400"
          py={1}
          px={3}
          spacing={4}
          justifyContent="center"
        >
          <FormControl w="auto" display="flex" alignItems="center">
            <FormLabel mb="0" color="white">
              modelid
            </FormLabel>
            <Switch colorScheme="secondary" />
          </FormControl>

          <FormControl w="auto" display="flex" alignItems="center">
            <FormLabel mb="0" color="white">
              spawn_X
            </FormLabel>
            <Switch colorScheme="secondary" />
          </FormControl>

          <FormControl w="auto" display="flex" alignItems="center">
            <FormLabel mb="0" color="white">
              spawn_Y
            </FormLabel>
            <Switch colorScheme="secondary" />
          </FormControl>

          <FormControl w="auto" display="flex" alignItems="center">
            <FormLabel mb="0" color="white">
              z_angle
            </FormLabel>
            <Switch colorScheme="secondary" />
          </FormControl>

          <FormControl w="auto" display="flex" alignItems="center">
            <FormLabel mb="0" color="white">
              color1
            </FormLabel>
            <Switch colorScheme="secondary" />
          </FormControl>

          <FormControl w="auto" display="flex" alignItems="center">
            <FormLabel mb="0" color="white">
              color2
            </FormLabel>
            <Switch colorScheme="secondary" />
          </FormControl>
        </HStack>
        <TextareaWithTitle
          title="AddStaticVehicle"
          onChange={handleChangeSaveText}
          resize="none"
          colorScheme="primary"
          variant="filled"
          borderTopRadius="0"
        />
      </VStack>
      <IconButton
        aria-label="convert save to array"
        boxSize="2.5rem"
        as={RepeatIcon}
        colorScheme="primary"
        cursor="pointer"
        onClick={handleClickConvert}
        variant="link"
      />
      <ResultTextarea result={convertText} />
    </VStack>
  );
};

export default SaveVehicleToArrayConverter;
