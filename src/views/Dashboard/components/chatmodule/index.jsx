import React from 'react';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import ChatModule from './chatlist';

const ChatMessage = ({ message, isSender }) => {
  return (
    <Flex
      direction={isSender ? 'row-reverse' : 'row'}
      mb={2}
      align="flex-start"
    >
      {!isSender && (
        <Avatar size="sm" name={message.senderName} src={message.senderAvatar} />
      )}
      <Box
        maxW="70%"
        borderRadius="lg"
        px={4}
        py={2}
        bg={isSender ? 'blue.500' : 'gray.200'}
        color={isSender ? 'white' : 'black'}
        boxShadow="md"
      >
        <Text fontSize="sm" fontWeight="bold" mb={1}>
          {message.senderName}
        </Text>
        <Text fontSize="md">{message.text}</Text>
        <Text fontSize="xs" mt={1} color="gray.500">
          {message.timestamp}
        </Text>
      </Box>
    </Flex>
  );
};

const LongChatHistory = ({ messages, currentUser }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" overflowY="scroll" maxHeight="400px">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          message={message}
          isSender={message.senderId === currentUser.id}
        />
      ))}
      <ChatModule />
    </Box>
  );
};

export default LongChatHistory;
