"use client";
import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Box,
  Grid,
  Divider,
  HStack,
  IconButton,
  AspectRatio,
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
  useDisclosure,
  Input,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import ComparaisonSlider from "../../components/ComparaisonSlider";
import EffectBeforeAfter from "../../components/effects/EffectBeforeAfter";
import ImageHover from "../../components/effects/ImageHover";
import FooterV1 from "../../components/footers/FooterV1";
import NavBarDesktop from "../../components/navBar/NavBarDesktop";
import Testimonial from "../../components/testimonials/Testimonial";
import InstaStories from "../../components/instagram/InstaStories";
import { FaCheckCircle, FaFacebook, FaInstagram } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineArrowUp,
  AiFillInstagram,
} from "react-icons/ai";
import dynamic from "next/dynamic";

const InstaComponent = dynamic(
  () => import("../../components/instagram/InstaStories"),
  {
    ssr: false,
  }
);
import { isValidPhoneNumber } from "libphonenumber-js";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { motion } from "framer-motion";
import { RdvSchema, RdvType } from "../../schemas";
import StepComponent from "../../components/StepComponent";
import { useForm } from "react-hook-form";
const MotionModalContent = motion(ModalContent);
import { zodResolver } from "@hookform/resolvers/zod";
function Studio() {
  useEffect(() => {
    AOS.init({
      once: false,
      delay: 100,
      duration: 900,
    });
    AOS.refresh();
  }, []);

  const TopSectionRef = useRef<HTMLDivElement>(null);
  const handleGoToTop = () => {
    const ref = TopSectionRef;
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const goToNextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RdvType>({
    resolver: zodResolver(RdvSchema),
    mode: "all",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const handleSendEmail = async (data: RdvType) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dydy-hair.vercel.app/api/sendmail`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            name: data.name,
            date: data.date,
            phone: data.phoneInputWithCountrySelect,
            time: data.time,
            service: data.service,
            haircut: data.haircut,
          }),
        }
      );

      if (response.ok) {
        console.log("E-mail envoyé avec succès !");
        setIsEmailSent(true);
      } else {
        console.error("Erreur lors de l'envoi de l'e-mail.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Flex minH={"100vh"} direction={"column"} className="italic-black">
        <NavBarDesktop />

        <Flex ref={TopSectionRef}>
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
              fontSize={"60px"}
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
                maxW={"450px"}
                fontFamily={"kally-dreams"}
              >
                There are many variation of passages are Ipsum available,
                majority have suffered alteration in some form.
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
              data-aos="fade-down"
            >
              <span style={{ color: "#CE9D06" }}>Coiffures</span> de nos
              clientes ❤️
            </Heading>

            <Text fontSize={"19px"} fontFamily={"kally-dreams"}>
              {`Regardez les magnifiques transformations réalisées chez Dydy Hair : des changements de look qui subliment votre style et mettent en valeur votre personnalité unique!`}
            </Text>
          </Flex>

          <ImageHover />
        </Flex>

        {/* Section Tarif */}

        <Flex
          direction={"column"}
          alignItems={"center"}
          textAlign="center"
          gap={"40px"}
          px="10rem"
          my={"40px"}
        >
          <Heading
            fontFamily={"kally-dreams"}
            fontSize={"45px"}
            lineHeight={"normal"}
            data-aos="fade-down"
          >
            Services
          </Heading>
          <Flex
            direction="column"
            alignItems="stretch"
            justifyContent="stretch"
            height="100vh"
          >
            <Flex position="relative" flex={1}>
              <Box position="relative" flex={1} shadow={"xl"}>
                <Image
                  src="/image/tarif/tarif2.png"
                  alt="Image 1"
                  width="full"
                  height="440px"
                  objectFit="cover"
                />
              </Box>
              <Flex
                direction="column"
                flex={1}
                justifyContent="flex-start"
                ml={"30px"}
                gap={"30px"}
                data-aos="fade-down"
              >
                <Flex gap={"10px"}>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    Tresses naturels
                  </Heading>
                  <Text>.....................</Text>

                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    5000 CFA
                  </Heading>
                </Flex>

                <Flex gap={"10px"}>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    Knotless
                  </Heading>
                  <Text>.....................</Text>

                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    5000 CFA
                  </Heading>
                </Flex>

                <Flex gap={"10px"}>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    Nattes collées
                  </Heading>
                  <Text>.....................</Text>

                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    5000 CFA
                  </Heading>
                </Flex>

                <Flex gap={"10px"}>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    Nattes avec mèches
                  </Heading>
                  <Text>.....................</Text>

                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    5000 CFA
                  </Heading>
                </Flex>

                <Flex gap={"10px"}>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    Twists avec mèches
                  </Heading>
                  <Text>.....................</Text>

                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    5000 CFA
                  </Heading>
                </Flex>

                <Flex gap={"10px"}>
                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    Twists sans mèches
                  </Heading>
                  <Text>.....................</Text>

                  <Heading
                    fontFamily={"kally-dreams"}
                    fontSize={"25px"}
                    lineHeight={"normal"}
                    whiteSpace={"nowrap"}
                  >
                    5000 CFA
                  </Heading>
                </Flex>
              </Flex>
            </Flex>

            <Flex position="relative" flex={1}>
              <Flex
                direction="column"
                flex={1}
                justifyContent="flex-start"
              ></Flex>
              <Box
                position="relative"
                flex={1}
                height="440px"
                shadow={"xl"}
                mr={"5.5rem"}
              >
                <Image
                  src="/image/coupeAfro.avif"
                  alt="Image 2"
                  width="full"
                  height="440px"
                  objectFit="cover"
                />
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          minH={"625px"}
          bg={"#F6EEE2"}
          justifyContent={"center"}
          alignItems={"center"}
          my={"30px"}
          pr={"10px"}
          data-aos="fade-down"
        >
          <InstaComponent />

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
            <FaInstagram fontSize={"65px"} />·
          </Flex>
        </Flex>
        <Flex
          direction={"column"}
          my={"30px"}
          alignItems={"center"}
          textAlign="center"
          gap={"10px"}
          data-aos="fade-down"
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

        <AspectRatio ratio={16 / 9} minH={"625px"} maxH={"625px"}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9636292536525!2d-17.448034800000002!3d14.714648399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1732eb7270e17%3A0x190ffe3c6199aeaf!2sMarch%C3%A9%20Mbabass!5e0!3m2!1sfr!2ssn!4v1704062659516!5m2!1sfr!2ssn" />
        </AspectRatio>

        <Flex
          width="100%"
          p="1rem"
          zIndex={20}
          shadow={"sm"}
          direction={"column"}
          bg={"#F6EEE2"}
          justifyContent={"flex-end"}
        >
          <Text
            fontFamily={"kally-dreams"}
            fontSize="20px"
            textAlign="center"
            color={"black"}
            className="italic-black"
          >
            ©️ {new Date().getFullYear()} Dydy&apos;s hair. Tous droits
            réservés.
          </Text>

          <Flex width="100%" justifyContent={"center"} mt={2}>
            <HStack>
              <IconButton
                _hover={{ transform: "scale(1.1)" }}
                colorScheme="pink"
                icon={<FaInstagram />}
                rounded={"full"}
                aria-label=""
              />

              <IconButton
                _hover={{ transform: "scale(1.1)" }}
                colorScheme="facebook"
                icon={<FaFacebook />}
                rounded={"full"}
                aria-label=""
              />
            </HStack>
          </Flex>

          <Flex width="100%" justifyContent={"center"}>
            <Divider
              my={4}
              maxW={["150px", null, null, "350px"]}
              borderColor={"#F1DECE"}
              borderWidth="0.1rem"
            />
          </Flex>

          <Flex
            gap={"6px"}
            width="100%"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              fontFamily={"kally-dreams"}
              fontSize="20px"
              textAlign="center"
              color={"black"}
              className="italic-black"
            >
              Retour au sommet
            </Text>

            <IconButton
              _hover={{ transform: "scale(1.1)" }}
              icon={<AiOutlineArrowUp />}
              rounded={"full"}
              aria-label=""
              bg={"#F1DECE"}
              color={"white"}
              onClick={handleGoToTop}
            />
          </Flex>
        </Flex>
      </Flex>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"lg"}
      >
        <ModalOverlay
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MotionModalContent
            initial={{ y: "50vh", x: "-100%" }} // Commence en dehors de la vue, en bas, et ajuste légèrement sur l'axe X si nécessaire
            animate={{ y: 0, x: "-100%" }} // Anime vers le centre de l'écran
            exit={{ y: "50vh", x: "-100%" }} // Pour l'animation de sortie, revient à une échelle réduite et un peu plus bas
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
          >
            <ModalContent className="italic-black">
              <ModalHeader textAlign={"center"}>
                Prise de rendez-vous
                <Text
                  fontSize={"16px"}
                  maxW={"450px"}
                  fontFamily={"kally-dreams"}
                >
                  Veuillez remplir toutes les informations nécéssaires
                </Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                {!isEmailSent ? (
                  <form onSubmit={handleSubmit(handleSendEmail)}>
                    <StepComponent key={currentStep} stepNumber={currentStep} />

                    {currentStep === 1 && (
                      <Flex gap={4} direction={"column"}>
                        <Divider my={4} />
                        <Box>
                          <FormControl isRequired>
                            <FormLabel>Nom</FormLabel>
                            <Input
                              type="text"
                              placeholder="Votre nom"
                              {...register("name")}
                            />
                          </FormControl>

                          {errors.name && (
                            <Flex
                              bg={"red.100"}
                              color={"red.700"}
                              fontWeight={"bold"}
                              p={2}
                              borderRadius={"3px"}
                              fontSize={"sm"}
                              mt={2}
                            >
                              <p>{errors.name.message}</p>
                            </Flex>
                          )}
                        </Box>
                        <Box>
                          <FormControl mt={4} isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                              type="email"
                              placeholder="Votre adresse email"
                              {...register("email")}
                            />
                          </FormControl>

                          {errors.email && (
                            <Flex
                              bg={"red.100"}
                              color={"red.700"}
                              fontWeight={"bold"}
                              p={2}
                              borderRadius={"3px"}
                              fontSize={"sm"}
                              mt={2}
                            >
                              <p>{errors.email.message}</p>
                            </Flex>
                          )}
                        </Box>

                        <Box>
                          <FormControl mt={4} isRequired>
                            <PhoneInputWithCountry
                              name="phoneInputWithCountrySelect"
                              placeholder="Saisir le numéro de téléphone"
                              control={control}
                              rules={{
                                required: "le numéro de téléphone est requis",
                                validate: (value: any) =>
                                  isValidPhoneNumber(value) ||
                                  "Numéro de téléphone invalide, veuillez saisir un numéro correspondant au pays choisi",
                              }}
                              className="inputCss"
                            />

                            {errors.phoneInputWithCountrySelect && (
                              <Flex
                                bg={"red.100"}
                                color={"red.700"}
                                fontWeight={"bold"}
                                p={2}
                                borderRadius={"3px"}
                                fontSize={"sm"}
                                mt={2}
                              >
                                <p>
                                  {errors.phoneInputWithCountrySelect.message?.toString() ===
                                  null
                                    ? ""
                                    : "Numéro de téléphone invalide"}
                                </p>
                              </Flex>
                            )}
                          </FormControl>
                        </Box>
                      </Flex>
                    )}

                    {currentStep === 2 && (
                      <Flex gap={4} direction={"column"}>
                        <Divider my={4} />

                        <Box>
                          <FormControl mt={4} isRequired>
                            <FormLabel>Date</FormLabel>
                            <Input type="date" {...register("date")} />
                          </FormControl>

                          {errors.date && (
                            <Flex
                              bg={"red.100"}
                              color={"red.700"}
                              fontWeight={"bold"}
                              p={2}
                              borderRadius={"3px"}
                              fontSize={"sm"}
                              mt={2}
                            >
                              <p>{errors.date.message}</p>
                            </Flex>
                          )}
                        </Box>
                        <Box>
                          <FormControl mt={4} isRequired>
                            <FormLabel>Heure</FormLabel>
                            <Input type="time" {...register("time")} />
                          </FormControl>

                          {errors.time && (
                            <Flex
                              bg={"red.100"}
                              color={"red.700"}
                              fontWeight={"bold"}
                              p={2}
                              borderRadius={"3px"}
                              fontSize={"sm"}
                              mt={2}
                            >
                              <p>{errors.time.message}</p>
                            </Flex>
                          )}
                        </Box>
                      </Flex>
                    )}

                    {currentStep === 3 && (
                      <Flex gap={4} direction={"column"}>
                        <Divider my={4} />

                        <Box>
                          <FormControl mt={4} isRequired>
                            <FormLabel>Service</FormLabel>
                            <Select
                              placeholder="Sélectionnez le service"
                              size="md"
                              className="italic-black"
                              {...register("service")}
                            >
                              <option value="A domicile">A domicile</option>
                              <option value="Chez Dydy Hair">
                                Chez Dydy Hair
                              </option>
                            </Select>
                          </FormControl>

                          {errors.service && (
                            <Flex
                              bg={"red.100"}
                              color={"red.700"}
                              fontWeight={"bold"}
                              p={2}
                              borderRadius={"3px"}
                              fontSize={"sm"}
                              mt={2}
                            >
                              <p>{errors.service.message}</p>
                            </Flex>
                          )}
                        </Box>
                        <Box>
                          <FormControl mt={4} isRequired>
                            <FormLabel>Coupe</FormLabel>
                            <Select
                              placeholder="Sélectionnez le service"
                              size="md"
                              className="italic-black"
                              {...register("haircut")}
                            >
                              <option value="Tresses naturelles">
                                Tresses naturelles
                              </option>
                              <option value="Mèches">Mèches</option>
                            </Select>
                          </FormControl>

                          {errors.haircut && (
                            <Flex
                              bg={"red.100"}
                              color={"red.700"}
                              fontWeight={"bold"}
                              p={2}
                              borderRadius={"3px"}
                              fontSize={"sm"}
                              mt={2}
                            >
                              <p>{errors.haircut.message}</p>
                            </Flex>
                          )}
                        </Box>
                      </Flex>
                    )}

                    <Divider orientation="horizontal" />
                    <Flex
                      gap={4}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mt={"10"}
                    >
                      {" "}
                      {currentStep > 1 && (
                        <Button
                          onClick={goToPreviousStep}
                          h="40px"
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
                          className="remplissage-menu italic-black"
                        >
                          Précédent
                        </Button>
                      )}
                      <Button
                        onClick={goToNextStep}
                        type="submit"
                        loadingText="Updating"
                        h="40px"
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
                        className="remplissage-menu italic-black"
                      >
                        {loading ? (
                          <Spinner color={"white"} />
                        ) : currentStep === totalSteps ? (
                          "Terminer"
                        ) : (
                          "Suivant"
                        )}
                      </Button>
                    </Flex>
                  </form>
                ) : (
                  <>
                    <Box textAlign="center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon
                          as={FaCheckCircle}
                          boxSize={12}
                          color="green.500"
                        />
                      </motion.div>

                      <Flex my={6} textColor={"brand.darkgray"}>
                        Super ❤️ Votre rendez-vous a été pris en compte.
                        Veuillez vérifier votre e-mail.
                      </Flex>
                    </Box>
                  </>
                )}
              </ModalBody>
            </ModalContent>
          </MotionModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}

export default Studio;
