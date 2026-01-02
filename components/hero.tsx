import { Box, Button, ButtonGroup, InputGroup, Span } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
export function Hero() {
  return (
    <Box>
      {" "}
      <Box mt={2} display="flex" justifyContent="space-between">
        <Text>
          Let&apos;s make your stay <br />
          <Span color="gray.500">unforgettable!</Span>
        </Text>
        <ButtonGroup
          display={{ base: "none", md: "block" }}
          size="sm"
          variant="outline"
        >
          <Button
            mr={{ md: "0.5", lg: "0.5", xl: "3" }}
            borderRadius="99px"
            borderColor="white"
            colorPalette="white"
            _hover={{ transform: "scale(1.05)" }}
          >
            Wellness
          </Button>
          <Button
            borderRadius="99px"
            mr={{ md: "0.5", lg: "0.5", xl: "3" }}
            borderColor="white"
            _hover={{ transform: "scale(1.05)" }}
            colorPalette="white"
          >
            Others
          </Button>
          <Button
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="99px"
            borderColor="white"
            colorPalette="white"
          >
            Dining
          </Button>
        </ButtonGroup>
      </Box>
      <br />
      <Box
        display={{ md: "block", lg: "flex" }}
        justifyContent="space-between"
        mt={{ base: "270px", lg: "350px" }}
        lineHeight="40px"
      >
        <Text
          w={{ base: "100%", lg: "50%", xl: "32%" }}
          fontFamily="Inter, sans-serif"
          color="gray.200"
          fontWeight="normal"
          fontSize="4xl"
          mb="20px"
        >
          Not just a hotel, but a place that feels like home
        </Text>
        <InputGroup
          w={{ base: "100%", lg: "35%" }}
          endElement={<LuSearch color="white" size="20px" />}
        >
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
