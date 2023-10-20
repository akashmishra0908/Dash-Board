import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Text,
  Image,
  Flex,
  IconButton,
  Button
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const testimonials = [
  {
    id: 1,
    name: "DOT Batch",
    image:
      "https://worldywcacouncil.org/wp-content/uploads/2015/04/speaker-3-v2.jpg",
    description:
      "by Love Babbar",
  },
  {
    id: 2,
    name: "DOT Batch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIi4cfvlez95aujoa9rdW6NaEO88l-9etvYIgHGoVoQhv6GDwEE8KahuKNhVKpuSUx9ZE&usqp=CAU",
    description:
    "by Love Babbar",
  },
  {
    id: 3,
    name: "DOT Batch",
    image:
      "https://think.ing.com/uploads/authors/_w480h480/James_Smith_new_profile.jpg",
    description:
    "by Love Babbar",
  },
  {
    id: 4,
    name: "DOT Batch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmwhiR_rpYB1nFDpig8ccAiW9W5oNaZeJXQ&usqp=CAU",
    description:
    "by Love Babbar",
  },
  {
    id: 5,
    name: "DOT Batch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEnsHnmsZn2aeQyBLLib5FKD3XrYsBVDtmw&usqp=CAU",
    description:
      "by Love Babbar",
  },
  {
    id: 6,
    name: "DOT Batch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRIIOJ4GCDG9j-lny0oSZtxMFhwgsHDBhABI75MBRNfRiqAgxMX3C9JZV4VDkytYs1fEI&usqp=CAU",
    description:
    "by Love Babbar",
  },
  {
    id: 7,
    name: "DOT Batch",
    image: "https://www.parliament.nz/media/1272/clark-david3.DmxK5Q.jpg",
    description:
    "by Love Babbar",
  },
  {
    id: 8,
    name: "DOT Batch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsjtkt7M-tv2LhI1z8i-N35EMHgX-M_gn2Sw&usqp=CAU",
    description:
    "by Love Babbar",
  },
  {
    id: 9,
    name: "DOT Batch",
    image:
      "https://webapp4.asu.edu/photo-ws/directory_photo/ondavis1?size=medium&break=1695764228",
    description:
    "by Love Babbar",
  },
  {
    id: 10,
    name: "DOT Batch",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPHzoQElSuUlSTUIAhy_3qJqZ7DGUpEqH8cQ&usqp=CAU",
    description:
    "by Love Babbar",
  },
];
const Slide = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isRestarting, setIsRestarting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTestimonial === testimonials.length - 1) {
        setIsRestarting(true);
        setCurrentTestimonial(0);
        setIsRestarting(false);
      } else {
        setCurrentTestimonial((prevIndex) => prevIndex + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const handlePrev = () => {
    setIsRestarting(false);
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsRestarting(false);
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentTestimonial, currentTestimonial + 3);

  return (
    <Box bg="gray.100" py={12}>
      <Container maxW="container.lg" textAlign="center">
        <Flex alignItems="center" justifyContent="space-between">
          <IconButton
            bg="white"
            p={2}
            rounded="full"
            shadow="lg"
            icon={<ChevronLeftIcon />}
            onClick={handlePrev}
          />
          <Flex w="100%" p={2} justifyContent="space-between">
            {visibleTestimonials.map((testimonial) => (
              <Box key={testimonial.id} w="30%">
                <Box bg="white" p={6} rounded="lg" shadow="lg">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    rounded="full"
                    w={40}
                    h={40}
                    mx="auto"
                    mb={4}
                  />
                  <Text fontSize="lg" fontWeight="semibold" mb={2}>
                    {testimonial.name}
                  </Text>
                  <Text color="gray.700">{testimonial.description}</Text>
                  <Button w={"100%"} p={2} mt={5} bg="black" color={"white"}>View Course</Button>
                </Box>
              </Box>
            ))}
          </Flex>
          <IconButton
            bg="white"
            p={2}
            rounded="full"
            shadow="lg"
            icon={<ChevronRightIcon />}
            onClick={handleNext}
          />
        </Flex>
        {isRestarting && <Text mt={2} color="gray.500">Restarting...</Text>}
      </Container>
    </Box>
  );
};

export default Slide;


