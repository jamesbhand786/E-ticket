import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    useColorModeValue,
} from '@chakra-ui/react';
import { RiArrowDropDownFill } from 'react-icons/ri';

const labelStyles = {
    color: "#999",
    fontSize: 'xs',
  };

const ChangePassTab = () => {
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" mt={5}>
            <Text fontSize='2xl' fontWeight={600}>Personal Information</Text>
            <Text fontSize='sm' my={2} color={textColor} >Edit your personal information</Text>
            <Flex direction="column" mt={5}>
                <Flex gap={4}>
                    <FormControl mb={4}>
                        <FormLabel sx={labelStyles}>First Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel sx={labelStyles}>Last Name</FormLabel>
                        <Input type="text"  />
                    </FormControl>
                </Flex>
                <FormControl mb={4}>
                    <Flex justifyContent={'space-between'}>
                        <FormLabel sx={labelStyles}>Email Address</FormLabel>
                        <FormLabel fontSize={13}  color={'blue'}>+ Add Email</FormLabel>
                    </Flex>
                    <Input type="email"  />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel sx={labelStyles}>Username</FormLabel>
                    <Input type="text" />
                </FormControl>
                <Flex gap={4}>
                    <FormControl mb={4}>
                        <FormLabel sx={labelStyles}>Phone Number</FormLabel>
                        <InputGroup>
                            <InputLeftAddon>+234</InputLeftAddon>
                            <Input type='tel' placeholder='phone number' />
                        </InputGroup>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel sx={labelStyles}>Country</FormLabel>
                        <Select icon={<RiArrowDropDownFill />} placeholder='Select country' />
                    </FormControl>
                </Flex>
                <Box mt={5}>
                <Button colorScheme="blue" fontWeight={400} fontSize={14}>Edit Profile</Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default ChangePassTab;