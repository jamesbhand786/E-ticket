// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import ProfileTabs from "./profiletabs";

function ChatModule() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  return (
    <Box mx={20}>
      <Flex direction="column" pt={{ base: "100px", md: "50px", lg: "100px" }}>
        <Flex
          direction={{ sm: "column", md: "row" }}
          maxH="330px"
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          backdropFilter="blur(21px)"
          boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.1)"
          border="1.5px solid"
          borderColor={borderProfileColor}
          bg={bgProfile}
          p="20px"
          borderRadius="15px"
        >
          <Flex
            align="center"
            mb={{ sm: "10px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}
          >
            <Avatar
              me={{ md: "22px" }}
              src={avatar5}
              w="80px"
              h="80px"
              borderRadius="15px"
            />
            <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
              <Text
                fontSize={{ sm: "lg", lg: "xl" }}
                color={textColor}
                fontWeight="bold"
                ms={{ sm: "8px", md: "0px" }}
              >
                Alec Thompson
              </Text>
              <Text
                mt={2}
                fontSize={{ sm: "sm", md: "md" }}
                color={emailColor}
                fontWeight="normal"
              >
                287 Contacts{"  • 8 Groups"}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box my={4}>
          <ProfileTabs />
        </Box>
      </Flex>
    </Box>
  );
}

export default ChatModule;