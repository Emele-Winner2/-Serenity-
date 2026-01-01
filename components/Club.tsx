import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { AbsoluteCenter } from "@chakra-ui/react";
export function Club() {
  return (
    <Box className="about" mb="100px" p={3} textAlign="left" bgColor="#fafaf8">
      <Heading
        mb={30}
        fontFamily="Inter, sans-serif"
        fontSize="md"
        color="gray.600"
      >
        Join Waitlist
      </Heading>
      <Flex flexDir="column">
        <Heading
          fontFamily="Inter, sans-serif"
          fontWeight="normal"
          fontSize="3xl"
          mb={1}
          color="black"
        >
          Join the Serenity Insider&apos;s Club
        </Heading>
        <p className="text-gray-600">
          Sign up for our newsletter and receive exclusive discounts and
          personalized recommendations straight to your inbox
        </p>
      </Flex>
      <br />
      <Box
        h="300px"
        borderRadius="14px"
        bgImage="url(./images/visualsofdana-T5pL6ciEn-I-unsplash.jpg)"
        position="relative"
        bgSize="cover"
        bgPos="right"
        bgRepeat="no-repeat"
        height="300px"
        objectFit="contain"
      >
        {" "}
        <AbsoluteCenter>
          <Button borderRadius="30px">Join our Waitlist</Button>
        </AbsoluteCenter>
      </Box>
    </Box>
  );
}
