import { Box, Button, Flex, Heading, Menu, Portal } from "@chakra-ui/react";
import { LuPlus, LuStar } from "react-icons/lu";
const links = [
  { title: "About", href: "#about" },
  { title: "Special Offers", href: "#skills" },
  { title: "Questionairre", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export function Nav_bar() {
  return (
    <Flex
      mb={{ md: "3" }}
      className="header"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading
        display="flex"
        color="gray.200"
        fontWeight="normal"
        fontSize="3xl"
        fontFamily="Inter, sans-serif"
      >
        Serenity <LuStar size="10px" />
      </Heading>
      <Box alignItems="center" display="flex">
        <Box
          color="gray.200"
          _hover={{ transform: "scale(1.05)" }}
          cursor="pointer"
          display={{ base: "none", md: "block", lg: "block" }}
          fontWeight="normal"
          mr={4}
        >
          About
        </Box>{" "}
        <Box
          color="gray.200"
          _hover={{ transform: "scale(1.05)" }}
          cursor="pointer"
          fontWeight="normal"
          display={{ base: "none", md: "block", lg: "block" }}
          mr={4}
        >
          Special Offers
        </Box>{" "}
        <Box
          color="gray.200"
          _hover={{ transform: "scale(1.05)" }}
          cursor="pointer"
          fontWeight="normal"
          display={{ base: "none", md: "block", lg: "block" }}
          mr={4}
        >
          Questionairre
        </Box>
        <Box
          color="gray.200"
          _hover={{ transform: "scale(1.05)" }}
          cursor="pointer"
          fontWeight="normal"
          mr={4}
        >
          Sign up
        </Box>
        <Box
          _hover={{ transform: "scale(1.05)" }}
          cursor="pointer"
          color="gray.200"
          fontWeight="normal"
          mr={6}
        >
          Log In
        </Box>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button
              display={{ base: "block", md: "none" }}
              color="white"
              bg="none"
            >
              <LuPlus />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content
                color="gray.200"
                zIndex="20"
                backdropBlur="md"
                bg="transparent"
              >
                {links.map((link) => (
                  <Menu.Item
                    color="white"
                    cursor="pointer"
                    key={link.href}
                    asChild
                    value={link.title}
                  >
                    <a color="white" href={link.href} rel="noreferrer">
                      {link.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </Flex>
  );
}
