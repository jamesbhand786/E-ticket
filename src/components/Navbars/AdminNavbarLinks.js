// Chakra Icons
import { BellIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
// Custom Icons
import {
  ArgonLogoDark,
  ArgonLogoLight,
  ChakraLogoDark,
  ChakraLogoLight,
  ProfileIcon,
  SettingsIcon,
} from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import routes from "routes.js";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLockClosedOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosPower } from "react-icons/io";

export default function HeaderLinks(props) {
  const {
    variant,
    children,
    fixed,
    scrolled,
    secondary,
    onOpen,
    ...rest
  } = props;

  const { colorMode } = useColorMode();

  // Chakra Color Mode
  let navbarIcon =
    fixed && scrolled
      ? useColorModeValue("gray.700", "gray.200")
      : useColorModeValue("white", "gray.200");
  let menuBg = useColorModeValue("white", "navy.800");
  if (secondary) {
    navbarIcon = "white";
  }
  return (
    <Flex alignItems="center" flexDirection="row" gap={4}>
      {/* <SearchBar me='18px' /> */}
      <SidebarResponsive
        hamburgerColor={"white"}
        logo={
          <Stack direction="row" spacing="12px" align="center" justify="center">
            {colorMode === "dark" ? (
              <ArgonLogoLight w="74px" h="27px" />
            ) : (
              <ArgonLogoDark w="74px" h="27px" />
            )}
            <Box
              w="1px"
              h="20px"
              bg={colorMode === "dark" ? "white" : "gray.700"}
            />
            {colorMode === "dark" ? (
              <ChakraLogoLight w="82px" h="21px" />
            ) : (
              <ChakraLogoDark w="82px" h="21px" />
            )}
          </Stack>
        }
        colorMode={colorMode}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
      <Menu>
        <MenuButton>
          <Box
            width={10}
            height={10}
            background={"#e2e8f0"}
            borderRadius={50}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <BellIcon w="18px" h="18px" />
          </Box>
        </MenuButton>
        <MenuList p="16px 8px" bg={menuBg}>
          <Flex flexDirection="column">
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="13 minutes ago"
                info="from Alicia"
                boldInfo="New Message"
                aName="Alicia"
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius="8px" mb="10px">
              <ItemContent
                time="2 days ago"
                info="by Josh Henry"
                boldInfo="New Album"
                aName="Josh Henry"
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius="8px">
              <ItemContent
                time="3 days ago"
                info="Payment succesfully completed!"
                boldInfo=""
                aName="Kara"
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          width={10}
          height={10}
          background={"#e2e8f0"}
          borderRadius={50}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ProfileIcon w="22px" h="22px" me="0px" />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              <Flex align={"center"}>
                <Avatar
                  size="md"
                  src="https://images.unsplash.com/photo-1636041282694-aa4e52370419?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Flex direction={"column"}>
                  <Text ml={2} fontSize={14} fontWeight={500}>
                    Dario Ratt
                  </Text>
                  <Text ml={2} fontSize={12} fontWeight={400}>
                    Admin
                  </Text>
                </Flex>
              </Flex>
            </MenuItem>
            <Divider my={2} />
            <MenuItem fontSize={14}>
              <FaRegUserCircle style={{ marginRight: "10px" }} />
              <NavLink to="/src/views/Dashboard/Profile.js">
                <Button
                  ms="0px"
                  px="0px"
                  me={{ sm: "2px", md: "16px" }}
                  color={navbarIcon}
                  variant="no-effects"
                >
                  {" "}
                  Profile
                </Button>
              </NavLink>
            </MenuItem>
            <MenuItem fontSize={14}>
              <IoSettingsOutline style={{ marginRight: "10px" }} /> Settings{" "}
            </MenuItem>
            <MenuItem fontSize={14}>
              <IoLockClosedOutline style={{ marginRight: "10px" }} /> Change
              Password{" "}
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuItem fontSize={14}>
            <IoIosPower style={{ marginRight: "10px" }} />
            Log Out
          </MenuItem>
        </MenuList>
      </Menu>
      {/* <NavLink to="/auth/profile">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="no-effects"
          rightIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <Box
                width={10}
                height={10}
                background={"#e2e8f0"}
                borderRadius={50}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
              </Box>
            )
          }
          leftIcon={
            document.documentElement.dir ? (
              <Box
                width={10}
                height={10}
                background={"#e2e8f0"}
                borderRadius={50}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <ProfileIcon color={"#000"} w="22px" h="22px" me="0px" />
              </Box>
            ) : (
              ""
            )
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>Sign In</Text>
        </Button>
      </NavLink> */}
      {/* <SettingsIcon
        cursor='pointer'
        ms={{ base: "16px", xl: "0px" }}
        me='16px'
        onClick={props.onOpen}
        color={navbarIcon}
        w='18px'
        h='18px'
      /> */}
    </Flex>
  );
}