import { useRef } from "react";

import {
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  VStack,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

import { SettingsIcon } from "@chakra-ui/icons";

const ArgumentsConfigurator = ({
  allowedOptions,
  setAllowedOptions,
  options,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  function changeAllowOption(event) {
    const index = Number(event.target.parentNode.dataset.index);
    const isChecked = event.target.checked;

    const beforeOption = allowedOptions.slice(0, index);
    const afterOption = allowedOptions.slice(index + 1);

    setAllowedOptions([...beforeOption, isChecked, ...afterOption]);
  }

  function buildOptions() {
    return options.map((option, index) => {
      return (
        <FormControl w="auto" display="flex" alignItems="center" key={index}>
          <FormLabel
            mb="0"
            color={allowedOptions[index] ? "secondary.400" : "primary.400"}
          >
            {option}
          </FormLabel>
          <Switch
            colorScheme="primary"
            defaultChecked={allowedOptions[index]}
            data-index={index}
            onChange={changeAllowOption}
          />
        </FormControl>
      );
    });
  }

  return (
    <>
      <IconButton
        aria-label="abrir configurações"
        icon={<SettingsIcon />}
        colorScheme="whiteAlpha"
        size="lg"
        variant="link"
        ref={btnRef}
        onClick={onOpen}
        {...props}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color="primary.900">Arguments Config</DrawerHeader>

            <DrawerBody>
              <VStack align="flex-start" spacing={4}>
                {buildOptions()}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default ArgumentsConfigurator;
