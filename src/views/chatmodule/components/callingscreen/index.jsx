import { Box, Avatar, Text, Stack, IconButton, Button } from '@chakra-ui/react';
import { PhoneIcon, VideoIcon, InfoOutlineIcon, ChatIcon } from '@chakra-ui/icons';
import { FaVideo } from 'react-icons/fa';

const ChatCallingScreen = ({ caller, callee, duration }) => {
  return (
    <Box
    //   p="4"
      bg="whatsapp.bg"
      borderRadius="md"
    //   boxShadow="md"
      color="whatsapp.text"
      position="relative"
    >
      {/* Header: Caller and Callee Info */}
      <Stack direction="row" justify="space-between" align="center" mb={10}>
        {/* Caller Info */}
        <Stack direction="row" spacing="2" align="center">
          <Avatar name="sssssss" src='https://images.unsplash.com/photo-1634715400668-2be61c363042?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' size="sm" />
          <Text>Alice Watson</Text>
        </Stack>

        {/* Duration */}
        <Text fontWeight="bold">12:56</Text>

        {/* Callee Info */}
        {/* <Stack direction="row" spacing="2" align="center">
          <Avatar name="{callee.name}" src='https://images.unsplash.com/photo-1609748341651-42920e667214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' size="sm" />
          <Text>Watson</Text>
        </Stack> */}
      </Stack>

      {/* Main Content: Call Actions */}
      <Stack direction="row" justify="center" align="center" spacing="4">
        <IconButton
          aria-label="Toggle Video"
          icon={<FaVideo />}
          colorScheme="whatsapp.icon"
          size="lg"
          variant="ghost"
        />
        <IconButton
          aria-label="Toggle Speaker"
          icon={<PhoneIcon />}
          colorScheme="whatsapp.icon"
          size="lg"
          variant="ghost"
        />
        <IconButton
          aria-label="Open Chat"
          icon={<ChatIcon />}
          colorScheme="whatsapp.icon"
          size="lg"
          variant="ghost"
        />
        <IconButton
          aria-label="Info"
          icon={<InfoOutlineIcon />}
          colorScheme="whatsapp.icon"
          size="lg"
          variant="ghost"
        />
      </Stack>
      <Stack>
      <Button my={5}
        colorScheme="red"
        w="100%"
        size="sm"
      >
        End Call
      </Button>
      </Stack>
    </Box>
  );
};

export default ChatCallingScreen;