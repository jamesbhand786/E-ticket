import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Badge,
  IconButton,
  Tooltip,
  Image,
  Divider,
} from '@chakra-ui/react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { green } from '@mui/material/colors';

const ChatProfileMeetinfo = ({ meeting }) => {
  const { title, date, time, duration, participants, image, icons } = meeting;

  return (
    <Box m={4}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      pl={4}
      justifyContent={'center'}
      shadow="md"
    >
      <Flex mt={3}>
        <Box>
          <Image src={image} alt={title} boxSize="20px" objectFit="cover" mr={4} mt={2} borderRadius={8} />
          {/* <Flex alignItems="center" justifyContent={'center'}>
            {icons.map((icon, index) => (
              <Box key={index} mr={2}>
                {icon}
              </Box>
            ))}
          </Flex> */}
        </Box>
        <Box>
          <Flex mt={2}>
            <Text fontWeight="500" fontSize={14}>Date:</Text>
            <Text ml={2} fontSize={13} >{date}</Text>
          </Flex>
          <Flex mt={2}>
            <Text fontWeight="500" fontSize={14}>Time:</Text>
            <Text ml={2} fontSize={13} >{time}</Text>
          </Flex>
          <Flex mt={2}>
            <Text fontWeight="500" fontSize={14}>Duration:</Text>
            <Text ml={2} fontSize={13} >{duration} minutes</Text>
          </Flex>
          <Flex mt={2}>
            <Text fontWeight="500" fontSize={14}>Participants:</Text>
            <Text ml={2} fontSize={13} >{participants}</Text>
          </Flex>
        </Box>
      </Flex>
      <Flex m={5} justifyContent="flex-end" gap={4}>
        <Button colorScheme="green" fontWeight={400} size='sm' fontSize={12}>Start Meeting</Button>
      </Flex>
    </Box>
  );
};

export default ChatProfileMeetinfo;