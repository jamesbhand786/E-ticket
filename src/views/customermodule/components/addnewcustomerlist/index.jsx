import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';

const AddCustomerDetails = ({ onSave }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    const newCustomer = {
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
    };

    // Call onSave prop to handle saving the new customer
    onSave(newCustomer);

    // Clear form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setCountry('');
  };

  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" p="4">
      <Stack spacing="4">
        <FormControl id="firstName">
          <FormLabel fontSize={13}>First Name</FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>

        <FormControl id="lastName">
          <FormLabel fontSize={13}>Last Name</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel fontSize={13}>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl id="phoneNumber">
          <FormLabel fontSize={13}>Phone Number</FormLabel>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>

        <FormControl id="country">
          <FormLabel fontSize={13}>Country</FormLabel>
          <Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>

        <Button my={5}
          colorScheme="blue"
          onClick={handleSubmit}
          isDisabled={!firstName || !lastName || !email}
        >
          Save Customer
        </Button>
      </Stack>
    </Box>
  );
};

export default AddCustomerDetails;
