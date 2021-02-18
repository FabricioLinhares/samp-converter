import { CopyIcon, DownloadIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Box, useClipboard } from "@chakra-ui/react";

import TextareaWithTitle from "../TextareaWithTitle";

const ResultTextarea = ({ result }) => {
  const { hasCopied, onCopy } = useClipboard(result);

  function downloadResult() {}

  return (
    <Box w="100%" position="relative">
      <HStack spacing={4} position="absolute" zIndex="2" right={3} top={2}>
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
          onClick={onCopy}
          variant="link"
        />
      </HStack>
      <TextareaWithTitle
        title={result ? `${hasCopied ? "Result Copied" : "Result"}` : ""}
        value={result}
        resize="none"
        colorScheme="primary"
        variant="filled"
        isReadOnly
        borderColor={
          result
            ? `${hasCopied ? "secondary.400" : "primary.400"}`
            : "transparent"
        }
        onDoubleClick={onCopy}
      />
    </Box>
  );
};

export default ResultTextarea;
