import { Box, Heading } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
export function About() {
  return (
    <Box
      className="about"
      display="flex"
      flexDir="column"
      alignItems="center"
      mb={{ base: "100px", xl: "200px" }}
      p={3}
      textAlign="center"
      bgColor="#fafaf8"
    >
      <Box w={{ base: "100%", md: "70%", lg: "55%", xl: "50%" }}>
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
          designed to make every guest feel at home. Disover the perfect blend
          of nature, elegance and warmth.
        </p>
        <Grid
          bg="white"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          borderRadius="14px"
          gap={{ base: "2", md: "3" }}
          border="none"
          mt={10}
          color="black"
        >
          <GridItem
            cursor="pointer"
            boxShadow="md"
            borderRadius="14px"
            border="none"
            height={{ base: "150px", xl: "200px" }}
          >
            <Image
              loading="lazy"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="14px"
              src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80"
              height="full"
              width="full"
              alt="Hydroponics"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            cursor="pointer"
            boxShadow="md"
            borderRadius="14px"
            border="none"
          >
            {" "}
            <Image
              loading="lazy"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="14px"
              width="full"
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              height="full"
              alt="Hydroponics"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            cursor="pointer"
            boxShadow="md"
            borderRadius="14px"
            border="none"
          >
            {" "}
            <Image
              loading="lazy"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="14px"
              width="full"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
              height="full"
              alt="Hydroponics"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            cursor="pointer"
            boxShadow="md"
            borderRadius="14px"
            border="none"
          >
            {" "}
            <Image
              loading="lazy"
              width="full"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="14px"
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
              height="full"
              alt="Hydroponics"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            cursor="pointer"
            boxShadow="md"
            borderRadius="14px"
            border="none"
          >
            {" "}
            <Image
              loading="lazy"
              width="full"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="14px"
              src="/images/lux5.webp"
              height="full"
              alt="Hydroponics"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            cursor="pointer"
            boxShadow="md"
            borderRadius="14px"
            border="none"
          >
            {" "}
            <Image
              loading="lazy"
              width="full"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              borderRadius="14px"
              src="/images/lux6.webp"
              height="full"
              alt="Hydroponics"
              objectFit="cover"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
