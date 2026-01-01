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
    title: "Do you offer honetmoon or romantic packages",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt repudiandae vel saepe numquam aliquam, facilis porro modi voluptas aut quibusdam officia illum facere nobis architecto debitis corrupti quisquam nisi.",
  },
];

export function Accordion2() {
  return (
    <Box mb="100px" p={3} textAlign="left" bgColor="#fafaf8">
      <Heading
        fontFamily="Inter, sans-serif"
        fontWeight="normal"
        fontSize="3xl"
        mb={1}
        lineHeight={1.2}
        color="black"
      >
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
      <br />
      <Image
        borderRadius="14px"
        src="/images/hot.avif"
        height="full"
        width="full"
        alt="Hydroponics"
        objectFit="cover"
      />
    </Box>
  );
}
