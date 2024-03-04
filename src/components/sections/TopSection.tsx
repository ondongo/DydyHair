import { Flex, Heading, Button, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function TopSection({ TopSectionRef, onOpen }: any) {
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
    <>
      {windowWidth <= 1279 ? (
        <>
          <Flex direction={"column"}  width="full" overflow={"hidden"} >
            <Flex ref={TopSectionRef} width="full" overflow={"hidden"}>
              <Flex
                flex={1}
                minH={"625px"}
                bg={"#F1DECE"}
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                gap={"10px"}
              ></Flex>

              <Image
                src="image/Background.png"
                alt="Description de l'image"
                position="absolute"
                maxH={"500px"}
                maxW={"470px"}
                minH={"500px"}
                minW={"470px"}
                right="15px"
                top="8.96%"
                transform="translate(-50%, -50%)"
                display={["inline", null, "none"]}
              />

              <Image
                src="image/dydyhair-removebg-preview.png"
                alt="Description de l'image"
                position="absolute"
                maxH={"350px"}
               
                minH={"350px"}
                minW={"360px"}
                left="50%" // Position horizontale décalée
                top="22.5rem" // Position verticale décalée
                transform="translate(-50%, -50%)"
                objectFit="cover"
                objectPosition="center"
                border={"6px solid white"}
              />

              <Flex flex={1} minH={"625px"} bg={"#F6EEE2"}></Flex>
            </Flex>
            <Flex
              bg={"#F1DECE"}
              justifyContent={"center"}
              alignItems={"center"}
              my={"6px"}
              p={"14px"}
              direction={["column"]}
            >
              <Heading
                fontFamily={"kally-dreams"}
                maxW={["auto", null, "450px"]}
                fontSize={["32px", null, "40px", "60px"]}
                lineHeight={"normal"}
                display={"flex"}
                flexDirection={"column"}
                textAlign={"center"}
              >
                <span
                  style={{ color: "#CE9D06" }}
                  className="underlined underline-overflow shine"
                >
                  <span>Beauty</span> is power
                </span>
                <span>a smile it&apos;s sword.</span>
              </Heading>
              <Flex direction={"column"} alignItems={"center"} gap={"20px"}>
                <Text
                  fontSize={"19px"}
                  maxW={["auto", null, "450px"]}
                  fontFamily={"kally-dreams"}
                  textAlign={"center"}
                >
                  Sublimez votre style chez Dydy Hair et laissez votre beauté
                  rayonner.
                </Text>

                <Button
                  h="auto"
                  borderRadius={"none"}
                  borderLeft="3px solid "
                  borderColor={"white"}
                  padding={["14px", null, "18px"]}
                  mb={"2px"}
                  bg={"#CE9D06"}
                  _hover={{
                    borderColor: "#CE9D06",
                    color: "black",
                  }}
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                  fontFamily={"kally-dreams"}
                  className="remplissage italic-black"
                  onClick={onOpen}
                >
                  Prendre rendez-vous
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Flex ref={TopSectionRef} overflow={"hidden"}>
            <Flex
              flex={1}
              minH={"625px"}
              bg={"#F1DECE"}
              justifyContent={"center"}
              alignItems={"center"}
              direction={"column"}
              gap={"10px"}
            >
              <Heading
                fontFamily={"kally-dreams"}
                maxW={["auto", null, "450px"]}
                fontSize={["30px", null, "40px", "60px"]}
                lineHeight={"normal"}
                display={"flex"}
                flexDirection={"column"}
                textAlign={"center"}
              >
                <span
                  style={{ color: "#CE9D06" }}
                  className="underlined underline-overflow shine"
                >
                  <span>Beauty</span> is power
                </span>
                <span>a smile it&apos;s sword.</span>
              </Heading>
              <Flex direction={"column"} alignItems={"center"} gap={"20px"}>
                <Text
                  fontSize={"19px"}
                  maxW={["auto", null, "450px"]}
                  fontFamily={"kally-dreams"}
                  textAlign={"center"}
                >
                  Sublimez votre style chez Dydy Hair et laissez votre beauté
                  rayonner.
                </Text>

                <Button
                  h="auto"
                  borderRadius={"none"}
                  borderLeft="3px solid "
                  borderColor={"white"}
                  padding="18px"
                  mb={"2px"}
                  bg={"#CE9D06"}
                  _hover={{
                    borderColor: "#CE9D06",
                    color: "black",
                  }}
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                  fontFamily={"kally-dreams"}
                  className="remplissage italic-black"
                  onClick={onOpen}
                >
                  Prendre rendez-vous
                </Button>
              </Flex>
            </Flex>

            <Image
              src="image/Background.png"
              alt="Description de l'image"
              position="absolute"
              maxH={"500px"}
              maxW={"470px"}
              minH={"500px"}
              minW={"470px"}
              right="15px"
              top="9.96%"
              transform="translate(-50%, -50%)"
            />

            <Image
              src="image/dydyhair-removebg-preview.png"
              alt="Description de l'image"
              position="absolute"
              maxH={"350px"}
              maxW={"400px"}
              minH={"350px"}
              minW={"400px"}
              left="60%" // Position horizontale décalée
              top="22.5rem" // Position verticale décalée
              transform="translate(-50%, -50%)"
              objectFit="cover"
              objectPosition="center"
              border={"6px solid white"}
            />

            <Flex flex={1} minH={"625px"} bg={"#F6EEE2"}></Flex>
          </Flex>
        </>
      )}
    </>
  );
}

export default TopSection;
