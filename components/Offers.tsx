import {
  Badge,
  Box,
  Button,
  Carousel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Span,
  Stack,
} from "@chakra-ui/react";

import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { Image } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
const items = Array.from({ length: 5 });

export function Offers() {
  return (
    <Box
      mb={{ base: "100px", xl: "200px" }}
      p={{ base: "3", xl: "70px" }}
      textAlign="left"
      bgColor="#fafaf8"
    >
      <Box display={{ lg: "flex" }} justifyContent="space-between">
        <Box>
          <Heading
            fontFamily="Inter, sans-serif"
            fontSize="md"
            color="gray.600"
          >
            Special Offer
          </Heading>
          <Heading
            mt={{ base: "5", lg: "none" }}
            fontFamily="Inter, sans-serif"
            fontWeight="normal"
            fontSize="3xl"
            lineHeight={1.2}
            color="black"
          >
            Limited-Time Offers You Can&apos;t Miss!
          </Heading>
        </Box>

        <Box mt={{ base: "5", lg: "none" }}>
          <p className="text-gray-600">
            Enjoy unbeatable rates, complementary perks and extra rights on us.
            Your perfect getaway just got even better!
          </p>
          <Button
            mb={5}
            mt={5}
            borderRadius="20px"
            backgroundColor="black"
            _hover={{
              transform: "scale(1.05) ",
              borderColor: "black",
              color: "black",
              bgColor: "white",
            }}
            color="white"
          >
            See all Special Offers
          </Button>
        </Box>
      </Box>
      <br />

      <Carousel.Root
        display={{ lg: "none" }}
        orientation="vertical"
        slideCount={items.length}
        mx="auto"
        height="400px"
        maxW="xl"
      >
        <Carousel.ItemGroup p={2}>
          {properties.map((property, index) => (
            <Carousel.Item
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              key={property.id}
              index={index}
            >
              <PropertyCard data={property} />
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
        <Carousel.Control h="100%" justifyContent="space-between" gap="4">
          <Carousel.PrevTrigger asChild>
            <IconButton size="xs" variant="ghost">
              <LuChevronUp color="black" />
            </IconButton>
          </Carousel.PrevTrigger>

          <Carousel.NextTrigger asChild>
            <IconButton size="xs" variant="ghost">
              <LuChevronDown color="black" />
            </IconButton>
          </Carousel.NextTrigger>
        </Carousel.Control>
        <Carousel.IndicatorGroup>
          {properties.map((property, index) => (
            <Carousel.Indicator
              key={index}
              index={index}
              unstyled
              _current={{
                outline: "2px solid currentColor",
                outlineOffset: "2px",
              }}
            >
              <Image
                w="20"
                aspectRatio="16/9"
                src={property.image}
                alt={property.title}
                objectFit="cover"
              />
            </Carousel.Indicator>
          ))}
        </Carousel.IndicatorGroup>
      </Carousel.Root>
      <Box display={{ base: "none", md: "none", lg: "block" }}>
        <Grid
          transition="transform 0.3s ease-in-out"
          bg="white"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          borderRadius="14px"
          gap={{ base: "2", md: "3" }}
          border="none"
          mt={10}
          color="black"
        >
          {properties.map((property, index) => (
            <GridItem
              cursor="pointer"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
              key={property.id}
            >
              <PropertyCard data={property} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

interface PropertyCardProps {
  data: Property;
}

const PropertyCard = ({ data }: PropertyCardProps) => (
  <Stack gap="3">
    <Box position="relative">
      <Image
        src={data.image}
        alt={data.title}
        rounded="l2"
        w="full"
        h="300px"
        objectFit="cover"
        loading="lazy"
        draggable={false}
      />
      {data.favorite && (
        <Badge pos="absolute" top="2" insetStart="2" size="sm">
          10% discount
        </Badge>
      )}
    </Box>
    <Stack gap="1">
      <Span color="black" fontWeight="semibold" textStyle="sm">
        {data.title}
      </Span>
      <HStack color="black" textStyle="xs">
        <Span>
          ${data.price} for {data.nights} nights
        </Span>
        <HStack gap="1">
          <Icon color="orange.solid">
            <FaStar />
          </Icon>
          <Span fontWeight="medium">{data.rating}</Span>
        </HStack>
      </HStack>
    </Stack>
  </Stack>
);

interface Property {
  id: number;
  title: string;
  price: number;
  nights: number;
  rating: number;
  image: string;
  favorite?: boolean;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Loft Apartment in City Bowl",
    price: 152,
    nights: 2,
    rating: 4.92,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    favorite: true,
  },
  {
    id: 2,
    title: "Modern Studio, Camps Bay Beachfront",
    price: 296,
    nights: 2,
    rating: 4.99,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    favorite: true,
  },
  {
    id: 3,
    title: "Retreat in Hout Bay with Views",
    price: 257,
    nights: 2,
    rating: 4.94,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  },
  {
    id: 4,
    title: "Sunny Flat in Sea Point",
    price: 132,
    nights: 2,
    rating: 4.87,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 5,
    title: "V&A Waterfront City Studio",
    price: 200,
    nights: 2,
    rating: 4.83,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    favorite: true,
  },
  {
    id: 6,
    title: "Luxury Pad, Bantry Bay",
    price: 247,
    nights: 2,
    rating: 4.96,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    id: 7,
    title: "Cozy Nest in Green Point",
    price: 135,
    nights: 2,
    rating: 4.81,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
    favorite: true,
  },
  {
    id: 8,
    title: "Elegant Villa in Constantia",
    price: 450,
    nights: 2,
    rating: 4.98,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
];
