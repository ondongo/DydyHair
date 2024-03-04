"use client";
import { useEffect, useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { usePathname, useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import {
  IoCallOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoMapOutline,
  IoPersonOutline,
  IoPlayForwardOutline,
  IoSearchOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="#CE9D06"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="#CE9D06"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const NavBarDashboardMobile = ({
  handleGoToTestimony,
  handleGoToStory,
  handleGoToTarif,
}: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  const isDisabled = true;
  const pathname = usePathname();

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
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={4}
        py={8}
        bg={["white"]}
        color={["black"]}
        overflow={"hidden"}
        //{...props}
      >
        <Flex align="center">
          <Heading
            fontSize={["1.4rem"]}
            fontFamily={"kally-dreams"}
            className="navItem"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="italic-black">Dydy&apos;s</span>{" "}
            <span className="italic-orange">hair</span>
          </Heading>
        </Flex>

        <Box display={["block", null, null, null, "none"]} onClick={onOpen}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Box>
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg="#F1DECE"
          color={"black"}
          zIndex={999}
          minH={"100vh"}
          className="inner"
        >
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            {" "}
            <Heading
              fontSize={["1.4rem"]}
              fontFamily={"kally-dreams"}
              className="navItem"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="italic-black">Dydy&apos;s</span>{" "}
              <span className="italic-orange">hair</span>
            </Heading>
          </DrawerHeader>
          <DrawerBody background="#F6EEE2" color={"black"}>
            <Box
              display={{ base: isOpen ? "block" : "none", md: "block" }}
              flexBasis={{ base: "100%", md: "auto" }}
            >
              <Flex className="sidebar-items" my={2}>
                <Box
                  _hover={{
                    textDecor: "none",
                    background: "rgba(243, 244, 245)",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                    color: "#CE9D06",
                  }}
                  display={["flex"]}
                  as="button"
                  onClick={handleGoToTarif}
                  alignItems={"center"}
                  gap={2}
                  style={{
                    background: pathname == "eldy" ? "rgba(243, 244, 245)" : "",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <Text
                    _hover={{
                      color: "#CE9D06",
                    }}
                    className="active italic-black"
                    transition="opacity 0.4s ease-in-out, display 0.4s ease-in-out" // Add transition effect
                  >
                    Services 💇🏽‍♀️
                  </Text>
                </Box>
              </Flex>

              <Flex className="sidebar-items" my={2}>
                <Box
                  _hover={{
                    textDecor: "none",
                    background: "rgba(243, 244, 245)",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                    color: "#CE9D06",
                  }}
                  display={["flex"]}
                  as="button"
                  alignItems={"center"}
                  gap={2}
                  style={{
                    background:
                      pathname == "/eldy" ? "rgba(243, 244, 245)" : "",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  onClick={handleGoToStory}
                >
                  <Text
                    _hover={{
                      color: "#CE9D06",
                    }}
                    className="active italic-black"
                    transition="opacity 0.4s ease-in-out, display 0.4s ease-in-out" // Add transition effect
                  >
                    Stories 😍
                  </Text>
                </Box>
              </Flex>
              <Flex className="sidebar-items" my={2}>
                <Box
                  _hover={{
                    textDecor: "none",
                    background: "rgba(243, 244, 245)",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                    color: "#CE9D06",
                  }}
                  display={["flex"]}
                  as="button"
                  onClick={handleGoToTestimony}
                  alignItems={"center"}
                  gap={2}
                  style={{
                    background:
                      pathname == "/eldy" ? "rgba(243, 244, 245)" : "",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <Text
                    _hover={{
                      color: "#CE9D06",
                    }}
                    className="active italic-black"
                    transition="opacity 0.4s ease-in-out, display 0.4s ease-in-out" // Add transition effect
                  >
                    Témoignages 🙏🏽
                  </Text>
                </Box>
              </Flex>

              <Divider />
              <Flex className="sidebar-items" my={2}>
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
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBarDashboardMobile;
