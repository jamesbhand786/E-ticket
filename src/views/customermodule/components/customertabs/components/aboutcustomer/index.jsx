import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar5 from "assets/img/avatars/avatar5.png";
import React from "react";
import { FaBirthdayCake, FaCity, FaFacebook, FaInstagram, FaPhone, FaTiktok, FaTwitter, FaUserAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { MdEmail } from "react-icons/md";

function AboutCustomer() {

  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Box >
      <Flex direction="column" maxWidth="100%" mt={{ sm: "  14px" }}>
        <Text
          fontSize={{ sm: "lg", lg: "xl" }}
          color={textColor}
          fontWeight="600"
        >
          Alice Watson
        </Text>
        <Text
          fontSize={{ sm: "sm", md: "md" }}
          color={emailColor}
          fontWeight="normal" mt={4} w={'50%'}
        >

          If you set your goals ridiculously high and it's a failure, you will
          fail above everyone else's success
        </Text>
      </Flex>
      <Flex my={5}>
        <Box width={10} mr={4} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <FaFacebook />
        </Box>
        <Box width={10} mr={4} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <FaTwitter />
        </Box>
        <Box width={10} mr={4} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <FaInstagram />
        </Box>
        <Box width={10} mr={4} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <FaTiktok />
        </Box>
      </Flex>
      <Box>
        <Text mt={10}
          fontSize={{ sm: "lg", lg: "xl" }}
          color={textColor}
          fontWeight="600"
        >
          Basic Info
        </Text>
        <Flex mt={5} gap={20}>
          <Box fontSize={50} color={'#ccc'}>
            <FaBirthdayCake />
            <Text
              fontSize={{ sm: "sm", md: "sm" }}
              color={emailColor}
              fontWeight="normal" mt={2}>Birthday
            </Text>
            <Text
              fontSize={{ sm: "sm" }}
              color={textColor}
              fontWeight="600"
            >
              June 26
            </Text>
          </Box>
          <Box fontSize={50} color={'#ccc'}>
            <FaUserAlt />
            <Text
              fontSize={{ sm: "sm", md: "sm" }}
              color={emailColor}
              fontWeight="normal" mt={2}>Gender
            </Text>
            <Text
              fontSize={{ sm: "sm" }}
              color={textColor}
              fontWeight="600"
            >
              Female
            </Text>
          </Box>
          <Box fontSize={50} color={'#ccc'}>
            <FaCity />
            <Text
              fontSize={{ sm: "sm", md: "sm" }}
              color={emailColor}
              fontWeight="normal" mt={2}>City
            </Text>
            <Text
              fontSize={{ sm: "sm" }}
              color={textColor}
              fontWeight="600"
            >
              Paris, France
            </Text>
          </Box>
          <Box fontSize={50} color={'#ccc'}>
            <FaPhone />
            <Text
              fontSize={{ sm: "sm", md: "sm" }}
              color={emailColor}
              fontWeight="normal" mt={2}>Phone No
            </Text>
            <Text
              fontSize={{ sm: "sm" }}
              color={textColor}
              fontWeight="600"
            >
              +9874563310
            </Text>
          </Box>
          <Box fontSize={50} color={'#ccc'}>
            <MdEmail />
            <Text
              fontSize={{ sm: "sm", md: "sm" }}
              color={emailColor}
              fontWeight="normal" mt={2}>Emails
            </Text>
            <Text
              fontSize={{ sm: "sm" }}
              color={textColor}
              fontWeight="600"
            >
              thomp@gmail.com
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AboutCustomer;