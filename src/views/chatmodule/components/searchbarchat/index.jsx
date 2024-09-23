import { useState } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

function SearchbarChat() {
  const { isOpen, onToggle } = useDisclosure();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching for:', searchValue);
    setSearchValue('');
    onToggle(); // Close the input field after search
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <>
      {!isOpen && (
        <Box ml={4} width={10} height={10} background={'#e2e8f0'} borderRadius={8} display={'flex'} alignItems={'center'} justifyContent={'center'} onClick={onToggle}>
        <SearchIcon />
      </Box>
      )}

      {isOpen && (
        <InputGroup mx={2}>
          <Input
            placeholder="Search..."
            value={searchValue}
            onChange={handleInputChange}
          />
          <InputRightElement >
            <IconButton
              aria-label="Search"
              icon={<CloseIcon />}
              onClick={handleSearch}
            />
          </InputRightElement>
        </InputGroup>
      )}
    </>
  );
}

export default SearchbarChat;