import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";

const PriceRange = () => {
  return (
    <Flex>
      <Box width={"100%"} borderRight="1px solid #D3D3D3">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Box>
            <VStack>
              <Text>Price</Text>
              <RangeSlider
                aria-label={["min", "max"]}
                width="90%"
                m="auto"
                defaultValue={[0, 100]}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack background={"#003380"} />
                </RangeSliderTrack>
                <RangeSliderThumb
                  index={0}
                  backgroundColor="#000000"
                  border="0.1px solid aqua"
                />
                <RangeSliderThumb
                  index={1}
                  backgroundColor="#000000"
                  border="0.1px solid aqua"
                />
              </RangeSlider>
              <Flex justifyContent={"space-between"} width="95%" m="auto">
                <Text>₹399</Text>
                <Text>₹64999</Text>
              </Flex>
              <br />
              <Flex
                flexDirection={["column", "column", "row"]}
                gap="10px"
                width={"95%"}
                m="auto"
                alignItems={"center"}
              >
                <Input
                  borderColor={"blue"}
                  placeholder="399"
                  borderRadius={0}
                />
                <Text>To</Text>
                <Input
                  borderColor={"blue"}
                  placeholder="64999"
                  borderRadius={0}
                />{" "}
                <Button
                  background={"#003380"}
                  color={"white"}
                  colorScheme="none"
                  borderRadius={0}
                >
                  GO
                </Button>
              </Flex>
            </VStack>
          </Box>

          <VStack alignItems="flex-start" paddingLeft="10px">
            <Text>Availability</Text>
            <Flex gap="1rem">
              <Checkbox />
              <Text>Exclude out of Stock</Text>
            </Flex>
          </VStack>
          <VStack alignItems="flex-start" paddingLeft="10px">
            <Text>Category</Text>
            <Flex gap="1rem">
              <Checkbox />
              <Text>Laptops</Text>
            </Flex>
          </VStack>
          <VStack alignItems="flex-start" paddingLeft="10px">
            <Text>Category</Text>
            <Flex gap="1rem">
              {" "}
              <Checkbox />
              <Text>Lenovo</Text>
            </Flex>
            <Flex gap="1rem">
              <Checkbox />
              <Text>Acer</Text>
            </Flex>
            <Flex gap="1rem">
              <Checkbox />
              <Text>Hp</Text>
            </Flex>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default PriceRange;
