import { Flex, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
const InstaComponent = dynamic(
  () => import("../../components/instagram/InstaStories"),
  {
    ssr: false,
  }
);

const InstaMobile = dynamic(
  () => import("../../components/instagram/InstaMobile"),
  {
    ssr: false,
  }
);

function InstaSection({ StorySectionRef }: any) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  /*******************************/
  /* Resize Event        */
  /******************************/

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <Flex
      mt={"20px"}
      minH={"625px"}
      bg={"#F6EEE2"}
      justifyContent={"center"}
      alignItems={"center"}
      my={"30px"}
      px={["10px", null, "0px"]}
      pr={["0px", null, "10px"]}
      data-aos="fade-down"
      direction={["column-reverse", null, null, "row"]}
      ref={StorySectionRef}
    >
      {typeof window !== "undefined" && (
        <>{windowWidth <= 1279 ? <InstaMobile /> : <InstaComponent />}</>
      )}
      <Flex
        direction={["row", null, "column"]}
        maxW={"490px"}
        gap={"10px"}
        alignItems={"center"}
        textAlign="center"
        fontSize={["35px", null, "45px", "65px"]}
        my={"30px"}
      >
        <Heading
          fontFamily={"kally-dreams"}
          fontSize={["35px", null, "45px", "65px"]}
          lineHeight={"normal"}
        >
          <span style={{ color: "#CE9D06" }}>Instagram</span> Stories
        </Heading>
        <FaInstagram />
      </Flex>
    </Flex>
  );
}

export default InstaSection;
