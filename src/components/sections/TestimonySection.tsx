import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Testimonial from "../testimonials/Testimonial";

function TestimonySection() {
  return (
    <Flex
      direction={"column"}
      my={"30px"}
      alignItems={"center"}
      textAlign="center"
      gap={"10px"}
      data-aos="fade-down"
    >
      <Heading
        fontFamily={"kally-dreams"}
        fontSize={["35px", null, "40px", "45px"]}
        lineHeight={"normal"}
      >
        Témoignages
      </Heading>
      <Testimonial />
    </Flex>
  );
}

export default TestimonySection;
