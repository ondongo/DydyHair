import {
  Container,
  Flex,
  VStack,
  Heading,
  HStack,
  Tag,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { capsFirst } from "../../utils";
import ChakraCarousel from "./ChakraCarroussel";

function Testimonial() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <Container
      py={2}
      px={4}
      maxW={{
        base: "100%",
        sm: "35rem",
        md: "43.75rem",
        lg: "57.5rem",
        xl: "75rem",
        xxl: "87.5rem",
      }}
    >
      <ChakraCarousel gap={32}>
        {data.slice(5, 15).map((post, index) => (
          <Flex
            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 2px 4px, rgba(0, 0, 0, 0.23) 0px 2px 4px"
            flexDirection="column"
            overflow="hidden"
            color="black"
            bg="#F6EEE2"
            fontFamily={"kally-dreams"}
            border={"1px solid tranparent"}
            borderTopRadius={"50px"}
            borderLeftRadius={"50px"}
            flex={1}
            p={6}
           
          >
            <VStack mb={2} display={"flex"}  alignItems={"center"}>
              <HStack  display={"flex"}  alignItems={"center"}  gap={"10px"}>
                <Avatar
                size='md'
                  name={capsFirst(post.title)}
                  src={capsFirst(post.title)}
                />
                <Heading
                  fontSize={{ base: "lg", md: "lg" }}
                  w="full"
                  mb={2}
                  className="italic-black"
                >
                  {capsFirst("Eldy Nganga")}
                </Heading>
              </HStack>

              <Text w="full" className="italic-black">
                {`"`}
                {capsFirst(post.body)}
                {`"`}
              </Text>
            </VStack>
          </Flex>
        ))}
      </ChakraCarousel>
    </Container>
  );
}

export default Testimonial;
