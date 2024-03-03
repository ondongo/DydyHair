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
  useDisclosure,
  Divider,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

import React from "react";
import {
  AiOutlineHeart,
  AiOutlineGlobal,
  AiOutlineUserSwitch,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";


function NavBarDesktop() {
  const phoneNumber = "+221784603783"; // Remplacez par le numéro de téléphone
  const message = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous sur DydyHair."
  );

  const history = useRouter();

  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    history.push(whatsappUrl);
  };

  

  return (
    <>
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
            <Heading
              fontFamily={"kally-dreams"}
              className="navItem"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="italic-black">Dydy&apos;s</span>{" "}
              <span className="italic-orange">hair</span>
            </Heading>
          </Flex>
          <Flex gap={"10px"}>
            <Flex alignItems={"center"}>
              <Flex
                flex={1}
                justifyContent={"center"}
                background={"transparent"}
                lineHeight={"normal"}
                height={"100%"}
                align={"center"}
                minW={"117px"}
                fontWeight={600}
                as={"button"}
                className="remplissage-menu-item  italic-black navItem"
                style={{ animationDelay: "0.4s" }}
                _hover={{ color: "#CE9D06" }}
              >
                <Text>Services</Text>
              </Flex>

              <Flex
                flex={1}
                justifyContent={"center"}
                background={"transparent"}
                lineHeight={"normal"}
                className="remplissage-menu-item  italic-black navItem"
                style={{ animationDelay: "0.4s" }}
                _hover={{ color: "#CE9D06" }}
                height={"100%"}
                align={"center"}
                minW={"117px"}
                fontWeight={600}
                as={"button"}
              >
                <Text>Stories</Text>
              </Flex>

              <Flex
                flex={1}
                justifyContent={"center"}
                background={"transparent"}
                lineHeight={"normal"}
                className="remplissage-menu-item  italic-black navItem"
                style={{ animationDelay: "0.4s" }}
                _hover={{ color: "#CE9D06" }}
                height={"100%"}
                align={"center"}
                minW={"117px"}
                fontWeight={600}
                as={"button"}
              >
                <Text>Témoignages</Text>
              </Flex>

              <Flex
                flex={1}
                justifyContent={"center"}
                background={"transparent"}
                lineHeight={"normal"}
                h="auto"
                borderRadius={"none"}
                borderLeft="3px solid "
                borderColor={"white"}
                padding="18px"
                mb={"2px"}
                bg={"#CE9D06"}
                _hover={{
                  borderColor: "#CE9D06",

                  color: "#CE9D06",
                }}
                fontSize="20px"
                fontStyle="normal"
                fontFamily={"kally-dreams"}
                className="remplissage-menu italic-black navItem"
                style={{ animationDelay: "0.4s" }}
                height={"100%"}
                align={"center"}
                minW={"117px"}
                fontWeight={600}
                as={"button"}
                gap={"10px"}
                onClick={handleWhatsApp}
              >
                <Text>Contact </Text>
                <FaWhatsapp />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

    
    </>
  );
}

export default NavBarDesktop;
