import { Box, Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
export function About() {
  return (
    <Box
      className="about"
      mb="100px"
      p={3}
      textAlign="center"
      bgColor="#fafaf8"
    >
      <Heading
        mb={30}
        fontFamily="Inter, sans-serif"
        fontSize="md"
        color="black"
      >
        About Us
      </Heading>
      <Heading
        fontFamily="Inter, sans-serif"
        fontWeight="normal"
        fontSize="3xl"
        mb={1}
        color="black"
      >
        Welcome to Serenity
      </Heading>
      <p className="text-gray-600">
        {" "}
        <br />
        From luxurious suites to personalized experiences. Serenity Hotel is
        designed to make every guest feel at home. Disover the perfect blend of
        nature, elegance and warmth.
      </p>
      <Grid
        transition="transform 0.3s ease-in-out"
        _hover={{ transform: "scale(1.05)" }}
        bg="white"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        boxShadow="md"
        borderRadius="14px"
        gap={1}
        border="none"
        mt={10}
        color="black"
      >
        <GridItem height="150px">
          <Image
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="14px"
            src="/images/lux1.webp"
            height="150px"
            width="200px"
            alt="Hydroponics"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          {" "}
          <Image
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="14px"
            src="/images/lux2.webp"
            height="150px"
            width="200px"
            alt="Hydroponics"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          {" "}
          <Image
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="14px"
            src="/images/lux3.webp"
            height="150px"
            width="200px"
            alt="Hydroponics"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          {" "}
          <Image
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="14px"
            src="/images/lux4.webp"
            height="150px"
            width="200px"
            alt="Hydroponics"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          {" "}
          <Image
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="14px"
            src="/images/lux5.webp"
            height="150px"
            width="200px"
            alt="Hydroponics"
            objectFit="cover"
          />
        </GridItem>
        <GridItem>
          {" "}
          <Image
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
            borderRadius="14px"
            src="/images/lux6.webp"
            height="150px"
            width="200px"
            alt="Hydroponics"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
