import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <>
      <Box maxW='2xl' borderRadius='lg' bgColor="white" overflow='hidden'>
        <Image src={imageSrc} alt={title + " image"}></Image>
        <Box
          p="1em"
        >
          <Heading size="md" color="black">{title}</Heading>
        </Box>
        <Box
          pl="1em"
          pr="1em"
          pb="1em"
        >
          <Text color="gray">{description}</Text>
        </Box>
        <Box
          pl="1em"
          pb="1em"
          color="black"
        >
          <a role="button">See more  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
        </Box>
      </Box >
    </>
  )
};

export default Card;
