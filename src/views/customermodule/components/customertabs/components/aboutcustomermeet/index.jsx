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

const AboutCustomerMeeting = ({ meeting }) => {
  const { title, date, time, duration, participants, image, icons } = meeting;

  return (
    <Box mt={5} 
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      pl={4}
      justifyContent={'center'}
      shadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" >
        <Heading size="sm">{title}</Heading>
        <Flex>
          <Tooltip label="Edit">
            <IconButton
              icon={<MdEdit />}
              variant="ghost"
              aria-label="Edit Meeting"
              mr={2}
            />
          </Tooltip>
          <Tooltip label="Delete">
            <IconButton
              icon={<MdDelete />}
              variant="ghost"
              aria-label="Delete Meeting"
            />
          </Tooltip>
        </Flex>
      </Flex>
      <Divider />
      <Flex mt={3}>
        <Box>
        <Image src={image} alt={title} boxSize="50px" objectFit="cover" mr={4} mt={2} borderRadius={8} />
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
      <Button variant='outline' color={'green'} fontWeight={400} size='sm' fontSize={12}>Schedule Another</Button>
        <Button colorScheme="green" fontWeight={400} size='sm' fontSize={12}>Add to calendar</Button>
      </Flex>
    </Box>
  );
};

export default AboutCustomerMeeting;