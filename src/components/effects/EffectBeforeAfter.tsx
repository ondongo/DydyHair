import { Flex } from "@chakra-ui/react";
import React from "react";
import ReactCompareImage from "react-compare-image";
function EffectBeforeAfter() {
  return (
    <Flex
      minW={["350px",null,null,"500px"]}
      maxW={["350px",null,null,"500px"]}
      minH={["350px",null,null,"500px"]}
      maxH={["350px",null,null,"500px"]}
      px={["20px",null,null,"0px"]}
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
