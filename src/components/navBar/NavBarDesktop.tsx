import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";

import React from "react";
import {
  AiOutlineHeart,
  AiOutlineGlobal,
  AiOutlineUserSwitch,
  AiOutlineMenu,
} from "react-icons/ai";

function NavBarDesktop() {
  return (
    <Flex direction={"column"} bg={"white"}>
      <Flex
        width="100%"
        height={"80px"}
        zIndex={20}
        color={"black"}
        justifyContent={"space-between"}
        px={"15rem"}
      >
        <Flex alignItems={"center"}>
          {" "}
          <Heading fontFamily={"kally-dreams"}>
            <span className="italic-black">Dydy&apos;s</span>{" "}
            <span className="italic-orange">hair</span>
          </Heading>
        </Flex>
        <Flex gap={"10px"}>
          <Flex gap="0.3rem" alignItems={"center"}>
            <Flex
              flex={1}
              justifyContent={"center"}
              background={"transparent"}
              lineHeight={"normal"}
              _hover={{ background: "rgba(243,244,245)" }}
              height={"100%"}
              align={"center"}
              minW={"117px"}
            ></Flex>

           {/*  <Button
              h="auto"
              borderRadius={"none"}
              borderLeft="3px solid "
              borderColor={"white"}
              padding="18px"
              mb={"2px"}
              bg={"#CE9D06"}
              color="white"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              fontFamily={"kally-dreams"}
            >
              Contact
            </Button> */}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NavBarDesktop;
