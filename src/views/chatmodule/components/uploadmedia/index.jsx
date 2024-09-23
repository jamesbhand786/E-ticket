import { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

function UploadMedia() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSelectedFile = () => {
    setSelectedFile(null);
  };

  return (
    <Box >
      <Stack spacing={1} width="100%">
        <Input type="file" onChange={handleFileChange} p={1}/>
        
        {selectedFile && (
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={selectedFile} alt="Preview" />

            <Flex justifyContent="center" p={2}>
              <Button colorScheme="red" onClick={clearSelectedFile}>
                Clear
              </Button>
            </Flex>
          </Box>
        )}

        {selectedFile && (
          <Center mt={4}>
            <Text>Filename: {selectedFile.name}</Text>
          </Center>
        )}
      </Stack>
    </Box>
  );
}

export default UploadMedia;