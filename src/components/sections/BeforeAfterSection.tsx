import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import EffectBeforeAfter from "../effects/EffectBeforeAfter";

function BeforeAfterSection() {
  return (
    <Flex
      justifyContent={"center"}
      gap={"10px"}
      my={"20px"}
      alignItems={"center"}
      direction={"column"}
      
    >
      <Heading
        fontFamily={"kally-dreams"}
        maxW={"450px"}
        fontSize={["35px", null, "40px", "45px"]}
        lineHeight={"normal"}
      >
        <span style={{ color: "#CE9D06" }}>Avant</span> / Après
      </Heading>

      <Text
        fontSize={["16px", "19px"]}
        px={["20px",null,null,"0px"]}
        maxW={"490px"}
        textAlign="center"
        fontFamily={"kally-dreams"}

      >
        {`Découvrez les transformations incroyables chez Dydy Hair : des looks
        avant et après qui vont vous inspirer à révéler votre beauté
        intérieure!`}
      </Text>
      <EffectBeforeAfter />
    </Flex>
  );
}

export default BeforeAfterSection;
