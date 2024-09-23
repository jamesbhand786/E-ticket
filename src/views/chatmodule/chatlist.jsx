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
  useColorMode,
  SimpleGrid,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { grey } from '@mui/material/colors';
import { PlusSquareIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';
import { IoCall, IoRecordingSharp } from 'react-icons/io5';
import { GoFilter, GoMute, GoPlus } from "react-icons/go";
import { FaBirthdayCake, FaRegImage, FaUserAlt } from "react-icons/fa";
import { MdEmojiEmotions, MdPictureInPicture, MdSchedule } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import bgAdmin from "assets/img/ImageArchitect2.png";
import avatar5 from "assets/img/avatars/avatar10.png";
import ChatProfileMeetinfo from '.';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import ChatCallingScreen from './components/callingscreen';
import UploadMedia from './components/uploadmedia';
import EmojiSelect from './components/emojiselect';
import EmojiPicker from 'emoji-picker-react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import SearchbarChat from './components/searchbarchat';
import ProfileDetailCard from './components/profiledetails';
import CallRecordingList from 'views/customermodule/components/customertabs/components/aboutcustomercallrecords';
import OptionsList from './components/optionslist';
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

const meetings = [
  {
    title: 'Team Standup Meeting',
    date: '2024-07-19',
    time: '09:00 AM',
    duration: 30,
    participants: 'john@example.com, jane@example.com',
    image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png',
    icons: [<MdSchedule key="event" color="grey" />],
  },
];


const SocialChatShell = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const textColor = useColorModeValue("gray.700", "white");

  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [isOpenModal3, setIsOpenModal3] = useState(false);
  const [isOpenModal4, setIsOpenModal4] = useState(false);
  const [isOpenModal5, setIsOpenModal5] = useState(false);

  const onCloseModal1 = () => setIsOpenModal1(false);
  const onCloseModal2 = () => setIsOpenModal2(false);
  const onCloseModal3 = () => setIsOpenModal3(false);
  const onCloseModal4 = () => setIsOpenModal4(false);
  const onCloseModal5 = () => setIsOpenModal5(false);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };
  const emailColor = useColorModeValue("gray.400", "gray.300");
  const iconBlue = useColorModeValue("blue.500", "blue.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");
  const { colorMode } = useColorMode();
  const handleEmojiSelect = (emoji) => {
    console.log('Selected emoji:', emoji);
    // You can handle the selected emoji here (e.g., update state, close modal)
    onClose();
  };
  const recordings = [
    { title: 'Recording 1', url: 'https://example.com/recording1.mp3' },
    { title: 'Recording 2', url: 'https://example.com/recording2.mp3' },
    { title: 'Recording 3', url: 'https://example.com/recording3.mp3' },
  ];
  const user = {
    name: 'Jasmin Thomp',
    username: 'Influencer',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
    avatarUrl: 'http://localhost:3000/argon-dashboard-chakra/static/media/avatar10.1683e1c0cac6f333de9d.png',
    badges: ['• Active']
  };
  const [items, setItems] = useState([
    { label: 'Push Notification', checked: false },
    { label: 'Chat Notification', checked: true },
    { label: 'Email Notifications', checked: false },
  ]);

  const handleToggle = (index) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };
  return (
    <Flex h="85vh" overflow={'hidden'} overflowY={'auto'}>
      {/* Conversation List */}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={4} width={'100%'}>
        <Box borderRightWidth="1px" p={4} width={'100%'}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={18} fontWeight={400}  >
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
        <Box sx={{ background: '#dbeafe', position: 'relative' }} width={'100%'}>
          <Flex align="center" p={4} justifyContent={'space-between'} sx={{ background: '#fff' }}>
            <Flex align={'center'}>
              <Avatar size="md" name={selectedConversation.user.name} src={selectedConversation.user.avatar} />
              <Flex direction={'column'}>
                <Text ml={3} fontSize={16} fontWeight={400}>
                  Alice Watson
                </Text>
                <Text ml={3} fontSize={13} fontWeight={400} color={emailColor}>
                  Active
                </Text>
              </Flex>
            </Flex>
            <Flex>
              <Box width={10} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={() => setIsOpenModal1(true)}>
                <IoCall />
              </Box>
              <SearchbarChat />
              <Box ml={4} width={10} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <PlusSquareIcon />
              </Box>
            </Flex>
          </Flex>
          <Divider mb={10} mt={5} />
          <Box width={'100%'} minHeight={350} overflowY={'auto'}>
            <Text my={5} fontSize={12} fontWeight={500} color="gray.500" textAlign={'center'}>
              Aug 22, 2022, 3:05 PM
            </Text>
            {selectedConversation.messages.map((message) => (
              <Flex key={message.id} direction={message.isSender ? 'row-reverse' : 'row'} p={4} align="flex-start">
                {!message.isSender && (
                  <Avatar size="sm" name={selectedConversation.user.name} src={selectedConversation.user.avatar} />
                )}
                <Box
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
          </Box>
          <Flex align="center" p={4} gap={4} justifyContent={'space-around'} sx={{ background: '#fff', bottom: '0', position: 'absolute', w: '100%' }}>
            <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
              <GoPlus />
            </Box>
            <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'} onClick={() => setIsOpenModal2(true)}>
              <FaRegImage />
            </Box>
            <Popover>
              <PopoverTrigger>
                <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
                  <MdEmojiEmotions />
                </Box>
              </PopoverTrigger>
              <PopoverContent width={'fit-content'}>
                <EmojiPicker onEmojiSelect={handleEmojiSelect} />
              </PopoverContent>
            </Popover>
            <Box sx={{ width: { sm: '50%', md: '80%' } }}>
              <Input size='md' bg={'#E2E8F0'} />
            </Box>
            <Box width={10} height={10} background={'#e2e8f0'} borderRadius={50} display={'flex'} alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
              <IoMdSend />
            </Box>
          </Flex>
        </Box>
        <Box width={'100%'}>
          <Box
            minH="15vh"
            bgImage={colorMode === "light" ? bgAdmin : "navy.900"}
            // bg={colorMode === "light" ? bgAdmin : "navy.900"}
            bgSize="100%"
          />
          <Box textAlign={'center'}>
            <Avatar
              src={avatar5}
              position="relative"
              w="100px"
              bottom={'2rem'}
              border={'3px solid #fff'}
              h="100x"
              borderRadius="10px"
            />
          </Box>
          <Flex
            align="center"
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}
          >
            <Box textAlign={'center'} w={'100%'}>
              <Text
                fontSize={{ sm: "sm", lg: "md" }}
                color={textColor}
                fontWeight="500"
              >
                Jasmin Thomp
              </Text>
              <Text
                mt={2}
                fontSize={{ sm: "xs", md: "xs" }}
                color={emailColor}
                fontWeight="normal"
              >
                Active Now
              </Text>
            </Box>
          </Flex>
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={4} justifyItems={'center'} mt={8} width={'100%'} px={2}>
            <Box fontSize={25} color={iconBlue} width={'100%'} background={borderColor} p={3} borderRadius={8} >
              <GoMute />
              <Text
                fontSize={{ sm: "xs" }}
                color={textColor}
                fontWeight="400"
              >
                Mute
              </Text>
            </Box>
            <Box fontSize={25} color={iconBlue} width={'100%'} background={borderColor} p={3} borderRadius={8}>
              <MdPictureInPicture />
              <Text
                fontSize={{ sm: "xs" }}
                color={textColor}
                fontWeight="400"
              >
                Documents
              </Text>
            </Box>
            <Box fontSize={25} color={iconBlue} width={'100%'} background={borderColor} p={3} borderRadius={8} onClick={() => setIsOpenModal5(true)}>
              <GoFilter />
              <Text
                fontSize={{ sm: "xs" }}
                color={textColor}
                fontWeight="400"
              >
                Options
              </Text>
            </Box>
            <Box fontSize={25} color={iconBlue} width={'100%'} background={borderColor} p={3} borderRadius={8} onClick={() => setIsOpenModal4(true)}>
              <IoRecordingSharp />
              <Text
                fontSize={{ sm: "xs" }}
                color={textColor}
                fontWeight="400"
              >
                Call Records
              </Text>
            </Box>
            <Box fontSize={25} color={iconBlue} width={'100%'} background={borderColor} p={3} borderRadius={8} onClick={() => setIsOpenModal3(true)}>
              <FaUserAlt size={18} />
              <Text
                fontSize={{ sm: "xs" }}
                color={textColor}
                fontWeight="400"
              >
                Personal Details
              </Text>
            </Box>
          </SimpleGrid>
          {meetings.map((meeting, index) => (
            <ChatProfileMeetinfo key={index} meeting={meeting} />
          ))}
        </Box>
      </SimpleGrid>
      <Modal isOpen={isOpenModal1} onClose={onCloseModal1} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Call</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <ChatCallingScreen />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenModal2} onClose={onCloseModal2} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize={{ sm: "lg" }}
              color={textColor}
              fontWeight="500"
            >
              Upload Media
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UploadMedia />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} size='sm' onClick={onCloseModal2}>
              Select
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenModal3} onClose={onCloseModal3} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize={{ sm: "lg" }}
              color={textColor}
              fontWeight="500"
            >
              Profile Details
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProfileDetailCard
              name={user.name}
              username={user.username}
              bio={user.bio}
              avatarUrl={user.avatarUrl}
              badges={user.badges}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenModal4} onClose={onCloseModal4} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize={{ sm: "lg" }}
              color={textColor}
              fontWeight="500"
            >
              Call Recordings
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CallRecordingList recordings={recordings} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpenModal5} onClose={onCloseModal5} isCentered size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize={{ sm: "lg" }}
              color={textColor}
              fontWeight="500"
            >
              Notification Settings
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <OptionsList items={items} onToggle={handleToggle} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

const ChatMain = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <SocialChatShell />
    </ChakraProvider>
  );
};

export default ChatMain;