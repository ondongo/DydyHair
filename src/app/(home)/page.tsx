"use client";
import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import ComparaisonSlider from "../../components/ComparaisonSlider";
import EffectBeforeAfter from "../../components/effects/EffectBeforeAfter";
import ImageHover from "../../components/effects/ImageHover";
import FooterV1 from "../../components/footers/FooterV1";
import NavBarDesktop from "../../components/navBar/NavBarDesktop";
import Testimonial from "../../components/testimonials/Testimonial";
import InstaStories from "../../components/instagram/InstaStories";
import { FaInstagram } from "react-icons/fa";
function Studio() {
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 100,
      duration: 600,
    });
    AOS.refresh();
  }, []);

  return (
    <Flex minH={"100vh"} direction={"column"}>
      <NavBarDesktop />

      <Flex>
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
            maxW={"450px"}
            fontSize={"65px"}
            lineHeight={"normal"}
          >
            <span style={{ color: "#CE9D06" }}>Beauty is power</span> a smile is
            its sword.
          </Heading>
          <Flex direction={"column"} alignItems={"center"} gap={"20px"}>
            <Text fontSize={"19px"} maxW={"450px"} fontFamily={"kally-dreams"}>
              There are many variation of passages are Ipsum available, majority
              have suffered alteration in some form.
            </Text>

            <Button
              h="auto"
              borderRadius={"none"}
              borderLeft="3px solid "
              borderColor={"white"}
              padding="18px"
              mb={"2px"}
              bg={"#CE9D06"}
              color="white"
              fontSize="20px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              fontFamily={"kally-dreams"}
            >
              Réserver votre coiffure
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
          top="18.6%"
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
          fontSize={"45px"}
          lineHeight={"normal"}
        >
          <span style={{ color: "#CE9D06" }}>Avant</span> / Après
        </Heading>

        <Text
          fontSize={"19px"}
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

      <Flex
        minH={"625px"}
        bg={"#F1DECE"}
        justifyContent={"center"}
        alignItems={"center"}
        my={"30px"}
        px={"10px"}
      >
        <Flex
          direction={"column"}
          maxW={"490px"}
          gap={"10px"}
          alignItems={"center"}
          textAlign="center"
        >
          <Heading
            fontFamily={"kally-dreams"}
            fontSize={"65px"}
            lineHeight={"normal"}
          >
            <span style={{ color: "#CE9D06" }}>Coiffures</span> de nos clientes
            ❤️
          </Heading>

          <Text fontSize={"19px"} fontFamily={"kally-dreams"}>
            {`Regardez les magnifiques transformations réalisées chez Dydy Hair : des changements de look qui subliment votre style et mettent en valeur votre personnalité unique!`}
          </Text>
        </Flex>

        <ImageHover />
      </Flex>

      <Flex
        minH={"625px"}
        bg={"#F6EEE2"}
        justifyContent={"center"}
        alignItems={"center"}
        my={"30px"}
        pr={"10px"}
      >
        <InstaStories />

        <Flex
          direction={"column"}
          maxW={"490px"}
          gap={"10px"}
          alignItems={"center"}
          textAlign="center"
        >
          <Heading
            fontFamily={"kally-dreams"}
            fontSize={"65px"}
            lineHeight={"normal"}
           
          >
            <span style={{ color: "#CE9D06" }}>Instagram</span> Stories
            
          </Heading>

          <FaInstagram  fontSize={"65px"}/>·
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        my={"30px"}
        alignItems={"center"}
        textAlign="center"
        gap={"10px"}
      >
        <Heading
          fontFamily={"kally-dreams"}
          fontSize={"45px"}
          lineHeight={"normal"}
        >
          Témoignages
        </Heading>
        <Testimonial />
      </Flex>
    </Flex>
  );
}

export default Studio;
