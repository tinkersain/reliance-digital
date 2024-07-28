import React from "react";
import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Icon,
  SimpleGrid,
  Container,
  Stack,
} from "@chakra-ui/react";
// Here we have used framer-motion package for animations
import { motion } from "framer-motion";
// Here we have used react-icons package for the icons
import { FaHome } from "react-icons/fa";

const statData = [
  {
    id: 1,
    label: "Silicon College, Patia, Bhubaneswar",
    icon: FaHome,
  },
  {
    id: 2,
    label: "Quarter-3, Borivalli East, Mumbai",
    icon: FaHome,
  },
  {
    id: 3,
    label: "Sector-596, East Vegas, California ",
    icon: FaHome,
  },
];

const Address = ({ calledBy, handlePayment, setOpen }) => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }}>
      <SimpleGrid
        columns={{
          base: 1,
          sm: `${calledBy ? 1 : 2}`,
          md: `${calledBy ? 1 : 3}`,
        }}
        spacing={5}
        mt={6}
        mb={4}
      >
        {statData.map((data, index) => (
          <Card
            key={index}
            data={data}
            calledBy={calledBy}
            handlePayment={handlePayment}
            setOpen={setOpen}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

const Card = ({ data, calledBy, handlePayment, setOpen }) => {
  return (
    <motion.div
      onClick={() => {
        if (calledBy) {
          handlePayment();
          setOpen(false);
        }
      }}
      style={{ cursor: `${calledBy ? "pointer" : ""}` }}
    >
      <Stack
        direction="column"
        rounded="md"
        boxShadow={useColorModeValue(
          "0 4px 6px rgba(160, 174, 192, 0.6)",
          "2px 4px 6px rgba(9, 17, 28, 0.9)"
        )}
        w="100%"
        textAlign="left"
        align="start"
        spacing={0}
        role="group"
        overflow="hidden"
      >
        <HStack
          py={6}
          px={5}
          spacing={4}
          bg={useColorModeValue("gray.100", "gray.800")}
          w="100%"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            rounded="lg"
            p={2}
            bg="green.400"
            position="relative"
            w={12}
            h={12}
            overflow="hidden"
            lineHeight={0}
            boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
          >
            <Icon as={data.icon} w={6} h={6} color="white" />
          </Flex>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <Text as="h3" fontSize="md" noOfLines={2} color="black">
              {data.label}
            </Text>
          </VStack>
        </HStack>
      </Stack>
    </motion.div>
  );
};

export default Address;
