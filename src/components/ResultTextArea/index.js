import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { HStack, Textarea, IconButton, Box } from "@chakra-ui/react";

const ResultTextArea = ({ result }) => {
  function downloadResult() {}

  function copyResult() {}

  return (
    <Box w="100%" position="relative">
      <HStack spacing={4} position="absolute" zIndex="2" right="0" top={2}>
        <IconButton
          aria-label="download as .txt"
          boxSize="1.5rem"
          as={DownloadIcon}
          colorScheme="primary"
          cursor="pointer"
          onClick={downloadResult}
          variant="link"
        />
        <IconButton
          aria-label="copy text"
          boxSize="1.5rem"
          as={CopyIcon}
          colorScheme="primary"
          cursor="pointer"
          onClick={copyResult}
          variant="link"
        />
      </HStack>
      <Textarea
        resize="none"
        colorScheme="primary"
        variant="filled"
        value={result}
        borderColor={result ? "primary.400" : "transparent"}
        isReadOnly
      />
    </Box>
  );
};

export default ResultTextArea;
