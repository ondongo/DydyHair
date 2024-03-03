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

const NavBarDashboardMobile = ({ userDetails, handleLogout }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [authLoading, setAuthLoading] = useState(true);

  const router = useRouter();

  const isDisabled = true;
  const pathname = usePathname();
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
                    background: "#102130",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  display={"flex"}
                  onClick={() => router.push("/dashboard")}
                  as="button"
                  alignItems={"center"}
                  gap={2}
                  style={{
                    background: pathname == "/dashboard" ? "#102130" : "",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <IoHomeOutline size={24} />

                  <Text
                    className="active"
                    transition="opacity 0.4s ease-in-out, display 0.4s ease-in-out" // Add transition effect
                  >
                    Home
                  </Text>
                </Box>
              </Flex>

            
           

              <Flex className="sidebar-items" my={2}>
                <Box
                  _hover={{
                    textDecor: "none",
                    background: "#102130",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  display={["flex"]}
                  as="button"
                  onClick={() => router.push("/fastSearch")}
                  alignItems={"center"}
                  gap={2}
                  style={{
                    background: pathname == "/fastSearch" ? "#102130" : "",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <IoPlayForwardOutline size={24} />
                  <Text
                    className="active"
                    transition="opacity 0.4s ease-in-out" // Add transition effect
                  >
                    Rapide
                  </Text>
                </Box>
              </Flex>

              <Flex className="sidebar-items" my={2}>
                <Box
                  _hover={{
                    textDecor: "none",
                    background: "#102130",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  display={["flex"]}
                  as="button"
                  onClick={() => router.push("/search-map")}
                  alignItems={"center"}
                  gap={2}
                  style={{
                    background: pathname == "/search-map" ? "#102130" : "",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <IoMapOutline size={24} />
                  <Text
                    className="active"
                    transition="opacity 0.4s ease-in-out"
                  >
                    Recherche pays
                  </Text>
                </Box>
              </Flex>
              <Flex className="sidebar-items" my={2}>
                <Box
                  _hover={{
                    textDecor: "none",
                    background: "#102130",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  display={["flex"]}
                  as="button"
                  onClick={() => router.push("/wishlist")}
                  alignItems={"center"}
                  gap={2}
                  style={{
                    background: pathname == "/wishlist" ? "#102130" : "",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <IoHeartOutline size={24} />

                  <Text
                    className="active"
                    transition="opacity 0.4s ease-in-out"
                  >
                    Favoris
                  </Text>
                </Box>
              </Flex>

              <Divider />
              <Flex className="sidebar-items" my={2}>
                <Box
                  display={["flex"]}
                  as="button"
                  onClick={() => router.push("/profile")}
                  alignItems={"center"}
                  gap={2}
                  _hover={{
                    textDecor: "none",
                    background: "#102130",
                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  style={{
                    background: pathname == "/profile" ? "#102130" : "",

                    padding: "12px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                >
                  <IoPersonOutline size={24} />

                  <Text
                    className="active"
                    transition="opacity 0.4s ease-in-out" // Add transition effect
                  >
                    Profil
                  </Text>
                </Box>
              </Flex>

            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBarDashboardMobile;
