import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function TarifSection() {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      textAlign="center"
      gap={["30px", "40px"]}
      px="10rem"
      my={"40px"}
      
    >
      <Heading
        fontFamily={"kally-dreams"}
        fontSize={["35px", null, "40px", "45px"]}
        lineHeight={"normal"}
        data-aos="fade-down"
      >
        Services
      </Heading>

      <Flex position={"relative"}>
        <Flex
          direction="column"
          alignItems={["center", null, null, "stretch"]}
          justifyContent={["center", null, null, "stretch"]}
          height={["auto", null, "100vh"]}
        >
          <Flex position="relative" flex={1}>
            <Box
              position="relative"
              flex={1}
              shadow={"xl"}
              display={{ base: "none", md: "inline" }}
            >
              <Image
                src="/image/tarif/tarif2.png"
                alt="Image 1"
                width="full"
                height="440px"
                objectFit="cover"
              />
            </Box>
            <Flex
              direction="column"
              flex={1}
              justifyContent="flex-start"
              ml={"30px"}
              gap={"30px"}
              data-aos="fade-down"
            >
              <Flex gap={"10px"}>
                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  Tresses naturels
                </Heading>
                <Text display={{ base: "none", md: "inline" }}>
                  ........................
                </Text>
                <Text display={{ base: "inline", md: "none" }}>.........</Text>

                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  5000 CFA
                </Heading>
              </Flex>

              <Flex gap={"10px"}>
                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  Knotless
                </Heading>
                <Text display={{ base: "none", md: "inline" }}>
                  ........................
                </Text>
                <Text display={{ base: "inline", md: "none" }}>.........</Text>

                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  5000 CFA
                </Heading>
              </Flex>

              <Flex gap={"10px"}>
                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  Nattes collées
                </Heading>
                <Text display={{ base: "none", md: "inline" }}>
                  ........................
                </Text>
                <Text display={{ base: "inline", md: "none" }}>.........</Text>

                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  5000 CFA
                </Heading>
              </Flex>

              <Flex gap={"10px"}>
                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  Nattes avec mèches
                </Heading>
                <Text display={{ base: "none", md: "inline" }}>
                  ........................
                </Text>
                <Text display={{ base: "inline", md: "none" }}>.........</Text>

                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  5000 CFA
                </Heading>
              </Flex>

              <Flex gap={"10px"}>
                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  Twists avec mèches
                </Heading>
                <Text display={{ base: "none", md: "inline" }}>
                  ........................
                </Text>
                <Text display={{ base: "inline", md: "none" }}>.........</Text>

                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  5000 CFA
                </Heading>
              </Flex>

              <Flex gap={"10px"}>
                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  Twists sans mèches
                </Heading>
                <Text display={{ base: "none", md: "inline" }}>
                  ........................
                </Text>
                <Text display={{ base: "inline", md: "none" }}>.........</Text>

                <Heading
                  fontFamily={"kally-dreams"}
                  fontSize={["20px", null, "25px"]}
                  lineHeight={"normal"}
                  whiteSpace={"nowrap"}
                >
                  5000 CFA
                </Heading>
              </Flex>
            </Flex>
          </Flex>

          <Flex position="relative" flex={1}>
            <Flex
              direction="column"
              flex={1}
              justifyContent="flex-start"
            ></Flex>
            <Box
              position="relative"
              flex={1}
              height="440px"
              shadow={"xl"}
              mr={"5.5rem"}
              display={{ base: "none", md: "inline" }}
            >
              <Image
                src="/image/coupeAfro.avif"
                alt="Image 2"
                width="full"
                height="440px"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </Flex>

        <Flex
          position="absolute"
          flex={1}
          zIndex={-1}
          maxH={"180px"}
          maxW={"180px"}
          bottom={"38%"}
          right={"48%"}
          display={{ base: "none", md: "inline" }}
        >
          <Image src="/image/Background.jpg" alt="Image centrale" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TarifSection;
