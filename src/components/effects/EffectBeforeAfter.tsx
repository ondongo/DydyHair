import { Flex } from "@chakra-ui/react";
import React from "react";
import ReactCompareImage from "react-compare-image";
function EffectBeforeAfter() {
  return (
    <Flex
      minW={"500px"}
      maxW={"500px"}
      minH={"500px"}
      maxH={"500px"}
      overflow={"hidden"}
      border={"1px solid white"}
      borderRadius={"8px"}
    >
      <ReactCompareImage
        leftImage="image/afterbefore/before.png"
        rightImage="image/afterbefore/after.jpg"
        handleSize={40}
        aspectRatio="wider"
      />
    </Flex>
  );
}

export default EffectBeforeAfter;
