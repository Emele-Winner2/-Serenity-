import { Box, Heading, Span } from "@chakra-ui/react";
import { Accordion } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

const items2 = [
  {
    value: "a",
    title: "What time is check-in and check-out",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt repudiandae vel saepe numquam aliquam, facilis porro modi voluptas aut quibusdam officia illum facere nobis architecto debitis corrupti quisquam nisi.",
  },
  {
    value: "b",
    title: "Does Serenity offer airport transfers?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt repudiandae vel saepe numquam aliquam, facilis porro modi voluptas aut quibusdam officia illum facere nobis architecto debitis corrupti quisquam nisi.",
  },
  {
    value: "c",
    title: "Does the hotel have a spa and welllness center",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt repudiandae vel saepe numquam aliquam, facilis porro modi voluptas aut quibusdam officia illum facere nobis architecto debitis corrupti quisquam nisi.",
  },
  {
    value: "d",
    title: "How can I modify or cancel my reservation",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt repudiandae vel saepe numquam aliquam, facilis porro modi voluptas aut quibusdam officia illum facere nobis architecto debitis corrupti quisquam nisi.",
  },
  {
    value: "e",
    title: "Do you offer honeymoon or romantic packages",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt repudiandae vel saepe numquam aliquam, facilis porro modi voluptas aut quibusdam officia illum facere nobis architecto debitis corrupti quisquam nisi.",
  },
];

export function Accordion2() {
  return (
    <Box
      display={{ lg: "flex" }}
      justifyContent="space-between"
      mb="100px"
      p={{ base: "3", xl: "70px" }}
      textAlign="left"
      bgColor="#fafaf8"
    >
      <Box w={{ lg: "45%", xl: "40%" }}>
        <Heading
          fontFamily="Inter, sans-serif"
          fontWeight="normal"
          fontSize="3xl"
          w={{ xl: "78%" }}
          mb={1}
          lineHeight={1.2}
          color="black"
        >
          <Span
            fontFamily="Inter, sans-serif"
            mb={5}
            fontWeight="normal"
            fontSize="sm"
          >
            FAQ
          </Span>
          <br />
          <br />
          Got Questions? We&apos;ve got Answers!
        </Heading>
        <Accordion.Root
          mt="30px"
          variant="plain"
          size="lg"
          multiple
          defaultValue={["b"]}
        >
          {items2.map((item, index) => (
            <Accordion.Item
              fontSize={{ base: "base", md: "md", lg: "lg" }}
              key={index}
              value={item.value}
            >
              <Accordion.ItemTrigger>
                <Span color="#1A202C" flex="1">
                  {item.title}
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody
                  color="black"
                  fontSize={{ base: "base", md: "md", lg: "lg" }}
                >
                  {item.text}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Box>
      <Box mt={{ base: "20px", lg: "none" }} w={{ base: "full", lg: "45%" }}>
        {" "}
        <Image
          borderRadius="14px"
          src="/images/hot.avif"
          height="400px"
          w="full"
          alt="Hydroponics"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}
