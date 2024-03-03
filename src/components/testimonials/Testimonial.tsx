import {
  Container,
  Flex,
  VStack,
  Heading,
  HStack,
  Tag,
  Button,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { capsFirst } from "../../utils";
import ChakraCarousel from "./ChakraCarroussel";

function Testimonial() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Service exceptionnel",
      body: "J'ai été impressionné par la qualité du service que j'ai reçu chez Dydy Hair. La coiffeuse était professionnelle et attentionnée, et je suis très satisfait du résultat.",
      name: "Eldy",
      image: "/images/eldy.jpg"
    },
    {
      id: 2,
      title: "Expérience incroyable",
      body: "Je suis tellement reconnaissante d'avoir découvert Dydy Hair. Son expertise et Son attention aux détails ont rendu mon expérience de coiffure vraiment exceptionnelle.",
      name: "D'Edith",
      image: "/images/edith.jpg"
    },
    {
      id: 3,
      title: "Transformation étonnante",
      body: "Ma visite chez Dydy Hair a été une véritable transformation. Non seulement ils ont fait un excellent travail sur mes cheveux, mais ils m'ont également donné de précieux conseils pour en prendre soin à la maison.",
      name: "Naomie",
      image: "/images/naomie.jpg"
    },
    {
      id: 4,
      title: "Satisfaction totale",
      body: "Je recommande vivement Dydy Hair à tous ceux qui recherchent une expérience de coiffure de qualité. Son équipe est compétente et sympathique, et je suis toujours satisfait du résultat.",
      name: "Jessica",
      image: "/images/jessica.jpg"
    },
    {
      id: 5,
      title: "Excellent service client",
      body: "La coiffeuse de Dydy Hair était extrêmement accueillante et attentive à mes besoins. Ils ont pris le temps de comprendre ce que je voulais et ont fait un travail remarquable.",
      name: "Ruth",
      image: "/images/ruth.jpg"
    },
    {
      id: 6,
      title: "Professionnels de confiance",
      body: "Je fais confiance à La coiffeuse de Dydy Hair pour tous mes besoins en matière de coiffure. Son expertise et Son attention aux détails sont incomparables.",
      name: "Nash",
      image: "/images/nash.jpg"
    },
    {
      id: 7,
      title: "Service exceptionnel",
      body: "J'ai été impressionné par la qualité du service que j'ai reçu chez Dydy Hair. La coiffeuse était professionnelle et attentionnée, et je suis très satisfait du résultat.",
      name: "Mondesire",
      image: "/images/mondesire.jpg"
    },

 
  ]);
  

  return (
    <Container
      py={2}
      px={4}
      maxW={{
        base: "100%",
        sm: "35rem",
        md: "43.75rem",
        lg: "57.5rem",
        xl: "75rem",
        xxl: "87.5rem",
      }}
    >
      <ChakraCarousel gap={32}>
        {data.map((post, index) => (
          <Flex
            key={index}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 2px 4px, rgba(0, 0, 0, 0.23) 0px 2px 4px"
            flexDirection="column"
            overflow="hidden"
            color="black"
            bg="#F6EEE2"
            fontFamily={"kally-dreams"}
            border={"1px solid tranparent"}
            borderTopRadius={"20px"}
            borderLeftRadius={"20px"}
            flex={1}
            p={6}
           
          >
            <VStack mb={2} display={"flex"}  alignItems={"center"}>
              <HStack  display={"flex"}  alignItems={"center"}  gap={"10px"}>
                <Avatar
                size='md'
                  name={capsFirst(post.name)}
                  src={capsFirst(post.image)}
                />
                <Heading
                  fontSize={{ base: "lg", md: "lg" }}
                  w="full"
                  mb={2}
                  className="italic-black"
                >
                  {capsFirst(post.name)}
                </Heading>
              </HStack>

              <Text w="full" className="italic-black">
                {`"`}
                {capsFirst(post.body)}
                {`"`}
              </Text>
            </VStack>
          </Flex>
        ))}
      </ChakraCarousel>
    </Container>
  );
}

export default Testimonial;
