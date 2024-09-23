// Chakra Imports
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminNavbarLinks from "./AdminNavbarLinks";
import { IoCall, IoChatbox } from "react-icons/io5";
import { ChatIcon, PlusSquareIcon, SearchIcon } from "@chakra-ui/icons";
import { RiContactsFill } from "react-icons/ri";
import mainlogo from "assets/icons/alogo.png";
import { NavLink } from "react-router-dom";

export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  const {
    variant,
    children,
    fixed,
    secondary,
    brandText,
    onOpen,
    ...rest
  } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let mainText =
    fixed && scrolled
      ? useColorModeValue("gray.700", "gray.200")
      : useColorModeValue("white", "gray.200");
  let secondaryText =
    fixed && scrolled
      ? useColorModeValue("gray.700", "gray.200")
      : useColorModeValue("white", "gray.200");
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "none";
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  if (props.fixed === true)
    if (scrolled === true) {
      navbarPosition = "fixed";
      navbarShadow = useColorModeValue(
        "0px 7px 23px rgba(0, 0, 0, 0.05)",
        "none"
      );
      navbarBg = useColorModeValue(
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
        "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
      );
      navbarBorder = useColorModeValue("#FFFFFF", "rgba(255, 255, 255, 0.31)");
      navbarFilter = useColorModeValue(
        "none",
        "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
      );
    }
  if (props.secondary) {
    navbarBackdrop = "none";
    navbarPosition = "absolute";
    mainText = "white";
    secondaryText = "white";
    secondaryMargin = "22px";
    paddingX = "30px";
  }
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Box>
      <Flex
        position={navbarPosition}
        boxShadow={navbarShadow}
        bg={navbarBg}
        borderColor={navbarBorder}
        filter={navbarFilter}
        backdropFilter={navbarBackdrop}
        transitionDelay="0s, 0s, 0s, 0s"
        transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
        transition-property="box-shadow, background-color, filter, border"
        transitionTimingFunction="linear, linear, linear, linear"
        gap={2}
        justifyContent={{ xl: "center" }}
        // lineHeight="25.6px"
        // mx="auto"
        // mt={secondaryMargin}
        py="20px"
        left={document.documentElement.dir === "rtl" ? "30px" : ""}
        right={document.documentElement.dir === "rtl" ? "" : "30px"}
        w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 100px)" }}
      >
        <Box>
          <Image
            width={100}
            objectFit="cover"
            src={mainlogo}
            alt="Main Logo"
            borderRadius={4}
          />
        </Box>
        <Flex
          w="100%"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          alignItems={{ xl: "center" }}
        >
          <Box>
            {/* <Breadcrumb>
              <BreadcrumbItem color={mainText}>
                <BreadcrumbLink href="#" color={secondaryText}>
                  Pages
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem color={mainText}>
                <BreadcrumbLink href="#" color={mainText}>
                  {brandText}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb> */}
            {/* Here we create navbar brand, based on route name */}
            <Flex>
              <Box
                width={10}
                height={10}
                background={"#e2e8f0"}
                borderRadius={50}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={"pointer"}
              >
                <NavLink to="/admin/chatts">
                  <IoChatbox />
                </NavLink>
              </Box>
              <Box
                ml={4}
                width={10}
                height={10}
                background={"#e2e8f0"}
                borderRadius={50}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={"pointer"}
              >
                <NavLink to="/admin/contacts">
                  <RiContactsFill />
                </NavLink>
              </Box>
            </Flex>
            {/* <Link
              color={mainText}
              href="#"
              bg="inherit"
              borderRadius="inherit"
              fontWeight="bold"
              _hover={{ color: { mainText } }}
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              {brandText}
            </Link> */}
          </Box>
          <Box ms="auto" w={{ md: "unset" }}>
            <AdminNavbarLinks
              onOpen={props.onOpen}
              logoText={props.logoText}
              secondary={props.secondary}
              fixed={props.fixed}
              scrolled={scrolled}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
