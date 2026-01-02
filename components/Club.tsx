import { Box, Button, Flex, Heading, Span } from "@chakra-ui/react";
import { AbsoluteCenter } from "@chakra-ui/react";
export function Club() {
  return (
    <Box
      className="about"
      mb="10px"
      p={{ base: "3", xl: "70px" }}
      textAlign="left"
      bgColor="#fafaf8"
    >
      <Heading
        mb={30}
        fontFamily="Inter, sans-serif"
        fontSize="md"
        color="gray.600"
      >
        Join Waitlist
      </Heading>
      <Box
        display="flex"
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "space-between" }}
      >
        <Box w={{ base: "full", lg: "50%" }}>
          <Heading
            fontFamily="Inter, sans-serif"
            fontWeight="normal"
            fontSize="3xl"
            mb={1}
            color="black"
          >
            Join the Serenity Insider&apos;s Club
          </Heading>
        </Box>
        <Span w={{ base: "full", lg: "45%" }} className="text-gray-600">
          Sign up for our newsletter and receive exclusive discounts and
          personalized recommendations straight to your inbox
        </Span>
      </Box>

      <br />
      <Box
        borderRadius="14px"
        bgImage="url(./images/visualsofdana-T5pL6ciEn-I-unsplash.jpg)"
        position="relative"
        bgSize="cover"
        bgPos={{ base: "right", lg: "center" }}
        bgRepeat="no-repeat"
        height={{ base: "300px", md: "350px", lg: "400px", xl: "500px" }}
        objectFit="contain"
      >
        {" "}
        <AbsoluteCenter>
          <Button
            _hover={{
              transform: "scale(1.05) ",
              borderColor: "black",
              color: "white",
              bgColor: "black",
            }}
            borderRadius="30px"
          >
            Join our Waitlist
          </Button>
        </AbsoluteCenter>
      </Box>
    </Box>
  );
}
