import {
  Box,
  Flex,
  Icon,
  Step,
  StepIndicator,
  Stepper,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

interface StepComponentProps {
  stepNumber: any;
}
export default function StepComponent({ stepNumber }: StepComponentProps) {
  const steps = [
    { title: "Étape 1" },
    { title: "Étape 2" },
    { title: "Étape 3" },
  ];

  const activeStep = stepNumber - 1;

  return (
    <Flex
      position="relative"
      width={["360px", "414px", "650px", "470px"]}
      direction={"column"}
    >
      <Stepper
        index={activeStep}
        gap={0}
        width={"full"}
        justifyContent={"space-between"}
        colorScheme="yellow"
        px={"22px"}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <Flex direction="column" justifyContent="center" gap={2}>
              <Flex alignItems="center">
                <StepIndicator
                  bg={activeStep === index ? "#F6EEE2" : "gray.300"}
                  width={[8, null, 10, 10]}
                  height={[8, null, 10, 10]}
                  zIndex={10}
                >
                  {activeStep >= index && (
                    <Icon as={FaCheck} boxSize={4} color="white" />
                  )}
                </StepIndicator>

                {index < steps.length - 1 && (
                  <Box
                    position="absolute"
                    top="36%"
                    left={1}
                    transform="translateY(-50%)"
                    width={["150px", null, "280px", "180px"]}
                    height={1}
                    bg={activeStep > index ? "#F6EEE2" : "gray.300"}
                  />
                )}
              </Flex>

              <Flex direction="column">
                <Flex
                  color={"black"}
                  fontSize={{
                    base: "11px",
                    sm: "11px",
                    md: "14px",
                    lg: "14px",
                  }}
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    //WebkitLineClamp: countWords(step.title) === 2 ? 2 : "unset",
                  }}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  width={["3.725rem", null, "4.8rem"]}
                  fontWeight={600}
                >
                  {step.title}
                </Flex>
              </Flex>
            </Flex>
          </Step>
        ))}
      </Stepper>
    </Flex>
  );
}
