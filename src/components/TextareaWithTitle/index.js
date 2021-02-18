import {
  Textarea,
  Heading,
  Center,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const TextareaWithTitle = ({ title, onChange, value, ...props }) => {
  return (
    <FormControl position="relative" w="100%">
      <Center position="absolute" w="100%" h="100%">
        <Heading
          as={FormLabel}
          color="primary.700"
          position="absolute"
          align="center"
          opacity="0.2"
          zIndex="2"
          sx={{
            WebkitTouchCallout: "none",
            WebkitUserSelect: "none",
            KhtmlUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none",
          }}
        >
          {title}
        </Heading>
      </Center>
      <Textarea onChange={onChange} value={value} {...props} />
    </FormControl>
  );
};

export default TextareaWithTitle;
