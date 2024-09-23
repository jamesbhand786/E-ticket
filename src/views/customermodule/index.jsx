import React, { useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Stack,
  Divider,
  ChakraProvider,
  theme,
  extendTheme,
  CSSReset,
  useColorModeValue,
  List,
  InputGroup,
  InputLeftElement,
  Input,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { grey } from '@mui/material/colors';
import { PlusSquareIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { IoCall } from 'react-icons/io5';
import { GoPlus } from "react-icons/go";
import { FaRegImage } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import Profile from 'views/Dashboard/Profile';
import CustomerTabModule from './components/customertabmodule';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import AddCustomerDetails from './components/addnewcustomerlist';
// Extend the default theme to customize colors
const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#d9ecff',
      // Add more shades as needed
      500: '#2563eb',
      700: '#2c5282',
      900: '#2a4365',
    }
  },
});

const conversations = [
  {
    id: 1,
    user: { name: 'Alice', avatar: 'https://images.unsplash.com/photo-1521310192545-4ac7951413f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    messages: [
      { id: 1, text: 'Hello!', timestamp: '9:00 AM', isSender: false },
      { id: 2, text: 'Do you know which App or feature it will require to set up', timestamp: '9:05 AM', isSender: true },
    ],
  },
  {
    id: 2,
    user: { name: 'Bob', avatar: 'https://images.pexels.com/photos/14633142/pexels-photo-14633142.jpeg' },
    messages: [
      { id: 3, text: 'Hey Bob!', timestamp: '10:00 AM', isSender: true },
      { id: 4, text: 'Hi there!', timestamp: '10:05 AM', isSender: false },
    ],
  },
  {
    id: 3,
    user: { name: 'Newsai', avatar: 'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    messages: [
      { id: 5, text: 'Hey Bob!', timestamp: '10:00 AM', isSender: false },
      { id: 6, text: 'Hi there!', timestamp: '10:05 AM', isSender: true },
    ],
  },
  {
    id: 4,
    user: { name: 'Mainnews', avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    messages: [
      { id: 7, text: 'Hey Bob!', timestamp: '10:00 AM', isSender: false },
      { id: 8, text: 'Hi there!', timestamp: '10:05 AM', isSender: true },
    ],
  },
  // Add more conversations as needed
];

const SocialChatShell = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };
  const emailColor = useColorModeValue("gray.400", "gray.300");
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Flex h="70vh">
      {/* Conversation List */}
      <Box w="25%" borderRightWidth="1px" overflowY="scroll" maxHeight="100vh">
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text fontSize={18} fontWeight={600}  >
            Contacts
          </Text>
          <Box width={8} mr={4} height={8} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={onOpen}>
              <GoPlus />
          </Box>
        </Flex>
        <Box m={4} ml={0}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.300" />}
            />
            <Input type="text" placeholder="Search contact / chat" />
          </InputGroup>
        </Box>
        <Stack spacing={0}>
          {conversations.map((conversation) => (
            <Box
              key={conversation.id}
              p={3}
              cursor="pointer"
              bg={conversation.id === selectedConversation.id ? 'primary.100' : 'transparent'}
              _hover={{ bg: 'primary.50' }}
              onClick={() => handleSelectConversation(conversation)}
            >
              <Flex align="center">
                <Avatar size="md" src={conversation.user.avatar} borderRadius={5} />
                <Flex direction={'column'}>
                  <Text ml={3} fontSize={14} fontWeight={500}  >
                     Alice Watson 
                  </Text>
                  <Text ml={3} fontSize={12} fontWeight={400} color={emailColor}>
                    @tauba_tauba
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box width={'100%'}>
      <CustomerTabModule />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
          <Text fontSize={18} fontWeight={500}  >
            Add New Contact
          </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddCustomerDetails/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

const CustomerModule = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <SocialChatShell />
    </ChakraProvider>
  );
};

export default CustomerModule;