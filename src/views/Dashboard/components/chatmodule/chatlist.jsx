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
} from '@chakra-ui/react';
import { grey } from '@mui/material/colors';
import { PlusSquareIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { IoCall } from 'react-icons/io5';
import { GoPlus } from "react-icons/go";
import { FaRegImage } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

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


  return (
    <Flex h="60vh">
      {/* Conversation List */}
      <Box w="25%" borderRightWidth="1px" overflowY="scroll" maxHeight="100vh">
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Text fontSize={18} fontWeight={600}  >
            Chats
          </Text>
          <Text fontSize={15} fontWeight={400} mr={4} cursor={'pointer'}>
            + New
          </Text>
        </Flex>
        <Box m={4} ml={1}>
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
                <Avatar size="md" src={conversation.user.avatar} />
                <Flex direction={'column'}>
                  <Text ml={3} fontSize={15} fontWeight={500}  >
                    Alice Watson
                  </Text>
                  <Text ml={3} fontSize={13} fontWeight={400} color={emailColor}>
                    Incoming Video Call • 45 mins ago
                  </Text>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Chat Messages */}
      <Box flex="1" overflowY="scroll" sx={{ background: '#dbeafe', width: '100%', position: 'relative' }}>
        <Flex align="center" p={4} justifyContent={'space-between'} sx={{ background: '#fff' }}>
          <Flex align={'center'}>
            <Avatar size="md" name={selectedConversation.user.name} src={selectedConversation.user.avatar} />
            <Flex direction={'column'}>
              <Text ml={3} fontSize={16} fontWeight={600}>
                Alice Watson
              </Text>
              <Text ml={3} fontSize={13} fontWeight={400} color={emailColor}>
                Active
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Box width={10} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <IoCall />
            </Box>
            <Box ml={4} width={10} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <SearchIcon />
            </Box>
            <Box ml={4} width={10} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <PlusSquareIcon />
            </Box>
          </Flex>
        </Flex>
        <Divider mb={10} mt={5} />
        <Text my={5} fontSize={12} fontWeight={500} color="gray.500" textAlign={'center'}>
          Aug 22, 2022, 3:05 PM
        </Text>

        {selectedConversation.messages.map((message) => (
          <Flex key={message.id} direction={message.isSender ? 'row-reverse' : 'row'} p={4} align="flex-start">
            {!message.isSender && (
              <Avatar size="sm" name={selectedConversation.user.name} src={selectedConversation.user.avatar} />
            )}
            <Box
              maxW="75%"
              borderRadius="lg"
              px={4} ml={2}
              py={2}
              bg={message.isSender ? 'primary.500' : '#fff'}
              color={message.isSender ? 'white' : 'black'}
              boxShadow="md"
            >
              {/* <Text fontSize="sm" fontWeight="bold" mb={1}>
                {selectedConversation.user.name}
              </Text> */}
              <Text fontSize="sm">{message.text}</Text>
              <Text fontSize={12} fontWeight={400} color="gray.500" textAlign={'end'}>
                {message.timestamp}
              </Text>
            </Box>
          </Flex>
        ))}
        <Flex align="center" p={4} justifyContent={'space-between'} sx={{ background: '#fff', bottom: '0', position: 'absolute', w: '100%' }}>
          <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
            <GoPlus />
          </Box>
          <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
            <FaRegImage />
          </Box>
          <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
            <MdEmojiEmotions />
          </Box>
          <Box>
            <Input size='md' width={'4xl'} bg={'#E2E8F0'} />
          </Box>
          <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
            <IoMdSend />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

const ChatModule = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <SocialChatShell />
    </ChakraProvider>
  );
};

export default ChatModule;