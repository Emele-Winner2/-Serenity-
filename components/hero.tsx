import { Box, InputGroup, Span } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
export function Hero() {
  return (
    <Box>
      {" "}
      <Box>
        <Text mt={2}>
          Let&apos;s make your stay <br />
          <Span color="gray.500">unforgettable!</Span>
        </Text>
      </Box>
      <br />
      <Box mt="270px" lineHeight="40px">
        <Text
          fontFamily="Inter, sans-serif"
          color="gray.200"
          fontWeight="normal"
          fontSize="4xl"
          mb="20px"
        >
          Not just a hotel, but a place that feels like home
        </Text>
        <InputGroup endElement={<LuSearch size="20px" />}>
          <Input
            css={{ "--focus-color": "white" }}
            type="text"
            borderRadius="999px"
            color="white"
            borderColor="gray.200"
            placeholder="Search Destination"
            fontWeight="normal"
            fontSize="md"
            p={5}
            bg="transparent"
            variant="outline"
          />
        </InputGroup>
      </Box>
    </Box>
  );
}
