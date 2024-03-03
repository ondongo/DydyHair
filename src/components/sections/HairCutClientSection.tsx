import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ImageHover from "../effects/ImageHover";

function HairCutClientSection() {
  return (
    <Flex
      minH={"625px"}
      bg={"#F1DECE"}
      justifyContent={"center"}
      alignItems={"center"}
      my={"30px"}
      px={"10px"}
      direction={["column", null, null, "row"]}
      
    >
      <Flex
        direction={"column"}
        maxW={"490px"}
        gap={"10px"}
        alignItems={"center"}
        textAlign="center"
        my={"20px"}
      >
        <Heading
          fontFamily={"kally-dreams"}
          fontSize={["35px", null, "45px", "65px"]}
          lineHeight={"normal"}
          data-aos="fade-down"
        >
          <span style={{ color: "#CE9D06" }}>Coiffures</span> de nos clientes ❤️
        </Heading>

        <Text
          fontSize={["16px", "19px"]}
          px={["20px", null, null, "0px"]}
          fontFamily={"kally-dreams"}
        >
          {`Regardez les magnifiques transformations réalisées chez Dydy Hair : des changements de look qui subliment votre style et mettent en valeur votre personnalité unique!`}
        </Text>
      </Flex>

      <ImageHover />
    </Flex>
  );
}

export default HairCutClientSection;
