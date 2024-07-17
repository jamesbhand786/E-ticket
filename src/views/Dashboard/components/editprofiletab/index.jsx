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

const EditProfileDetailsTab = ({ profile }) => {
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" mt={5}>
            <Text fontSize='2xl' fontWeight={600}>Change Password</Text>
            <Text fontSize='sm' my={2} color={textColor} >Edit your pass key information</Text>
            <Flex direction="column" mt={5} p={4}>
            <FormControl mb={4}>
                    <FormLabel sx={labelStyles}>Current Password</FormLabel>
                    <Input type="text" value={profile.username} readOnly />
                </FormControl>
                <Flex gap={4}>
                    <FormControl mb={4}>
                        <FormLabel sx={labelStyles}>New Password</FormLabel>
                        <Input type="password" value={profile.fullName} readOnly />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel sx={labelStyles}>Repeat Password</FormLabel>
                        <Input type="password" value={profile.fullName} readOnly />
                    </FormControl>
                </Flex>                
                <Box mt={5}>
                <Button colorScheme="blue" fontWeight={400} fontSize={14}>Update Password</Button>
                </Box>
            </Flex>
        </Box>
    );
};

export default EditProfileDetailsTab;