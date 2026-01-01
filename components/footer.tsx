"use client";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { Grid } from "@chakra-ui/react";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Thanks! We'll send updates to ${newsletterEmail || "your email"}.`);
    setNewsletterEmail("");
  };

  return (
    <Box as="footer" bg="black " borderColor="gray.200" px={6} py={10}>
      <Grid
        templateColumns={["1fr", "repeat(2, 1.5fr)"]}
        gap={6}
        maxW="1200px"
        mx="auto"
      >
        <Box>
          <Heading color="#F7FAFC" size="md" mb={3}>
            Serenity
          </Heading>
          <Box fontSize="sm" color="#F7FAFC" mb={3}>
            At Serenity, we believe every stay should be extraordinary. From
            luxurious accomodations to curateed experiences. we ensure that
            every moment is unforgettable.
          </Box>
          <br />
          <Button
            mb={5}
            mt={5}
            borderRadius="20px"
            _hover={{ transform: "scale(1.05) " }}
            backgroundColor="white"
            color="black"
          >
            See all Special Offers
          </Button>
        </Box>
        <Box>
          <Heading color="#F7FAFC" size="sm" mb={3}>
            Newsletter
          </Heading>
          <Box fontSize="sm" color="#F7FAFC" mb={3}>
            Get monthly tips, events among others.
          </Box>
          <HStack>
            <Input
              aria-label="Email address"
              placeholder="you@email.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              size="sm"
            />
            <Button
              _hover={{ bg: "#F6E05E", transform: "scale(1.05)" }}
              bgColor="#F7FAFC"
              size="sm"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </HStack>
          <Text fontSize="xs" color="gray.400" mt={3}>
            We respect your privacy — unsubscribe anytime.
          </Text>
        </Box>
      </Grid>
      <Box
        maxW="1200px"
        mx="auto"
        mt={8}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <Text fontSize="sm" color="gray.400">
          © {new Date().getFullYear()} Serenity. All rights reserved.
        </Text>
        <HStack gap={4}>
          <Link
            _hover={{ transform: "scale(1.05) " }}
            href="..."
            color="gray.400"
            fontSize="sm"
          >
            Privacy
          </Link>
          <Link
            _hover={{ transform: "scale(1.05) " }}
            href="..."
            color="gray.400"
            fontSize="sm"
          >
            Terms
          </Link>
          <Link
            href="mailto:hello@greenroots.example"
            color="gray.400"
            fontSize="sm"
            _hover={{ transform: "scale(1.05) " }}
          >
            Contact
          </Link>
        </HStack>
      </Box>{" "}
    </Box>
  );
}
