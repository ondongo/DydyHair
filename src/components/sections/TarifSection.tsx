import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const tressesData = [
  { type: "Nattes collées (avec et sans mèches)", price: [3000, 4000] },
  { type: "Bobo Knotless", price: [6000, 5000] },
  { type: "Braids", price: [6000, 5000] },
  { type: "Micro-Twists avec mèches", price: 6000 },
  { type: "Micro-Twists sans mèches", price: 5000 },
  { type: "Twists Passions / Twists ", price: 6000 },
  { type: "Island twists", price: [5000, 6000]},
  { type: "Fulani twists et Braids", price: [5000, 6000] },
];
function TarifSection({ TarifSectionRef }: any) {
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      textAlign="center"
      gap={["30px", "40px"]}
      px="10rem"
      my={"40px"}
      ref={TarifSectionRef}
      pb={["0px", null, "50px"]}
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
          <Flex position="relative">
            <Box
              position="relative"
              flex={1}
              shadow={"xl"}
              display={{ base: "none", lg: "inline" }}
              borderRadius={"8px"}
              maxH={"466px"}
            >
              <Image
                src="/image/coupe/NewCoupe7.jpeg"
                alt="Image 1"
                width="451px"
                maxW={"451px"}
                height="466px"
               
                objectFit="cover"
                borderRadius={"8px"}
              />
            </Box>
            <Flex
              direction="column"
              flex={1}
              justifyContent="flex-start"
              ml={"30px"}
              gap={"30px"}
              data-aos="fade-down"
              mb={"20px"}
            >
              {tressesData.map((tresse, index) => (
                <Flex key={index} gap={"10px"} alignItems={"center"}   mr={"20px"}>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={["14px", null, "20px"]}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    {tresse.type}
                  </Heading>
                  <Text display={{ base: "none", md: "inline" }} fontSize={ "20px"}>
                    .............
                  </Text>
                  <Text display={{ base: "inline", md: "none" }} fontSize={"14px"}>....</Text>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={["14px", null, "20px"]}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    {Array.isArray(tresse.price)
                      ? `${tresse.price[0]} / ${tresse.price[1]} CFA`
                      : `${tresse.price} frs`}
                  </Heading>
                </Flex>
              ))}
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
              mr={"5.5rem"}
              display={{ base: "none", lg: "inline" }}
             
            >
              <Image
                src="/image/coupe/NewCoupe8.jpeg"
                alt="Image 2"
                width="451px"
                maxW={"451px"}
                height="440px"
                objectFit="cover"
                borderRadius={"8px"}
              />
            </Box>
          </Flex>
        </Flex>

        <Flex
          position="absolute"
          flex={1}
          zIndex={-1}
          maxH={"205px"}
          maxW={"190px"}
          bottom={"30%"}
          right={"48%"}
          display={{ base: "none", md: "inline" }}
        >
          <Image src="/image/Background.jpg" alt="Image centrale" height={"205px"} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TarifSection;
