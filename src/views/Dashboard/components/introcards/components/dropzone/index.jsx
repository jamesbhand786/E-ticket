import React, { useCallback } from 'react';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { styled } from '@mui/material/styles';
import { RiUpload2Fill } from 'react-icons/ri';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const StyledDropzoneContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: '2px',
  borderRadius: '4px',
  borderColor: '#eeeeee',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    borderColor: '#2196f3',
    color: '#2196f3',
  },
});

const UploadDocDropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box p={4}>
      <StyledDropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <Box my={2}>
        <RiUpload2Fill fontSize={20}  />
        </Box>
        <Text fontSize="md" fontWeight="semibold">
        Drag and drop or click here
        </Text>
        <Text fontSize="sm" color="gray.500" mt={2}>
        to upload your image (max 2 MiB)
        </Text>
      </StyledDropzoneContainer>
    </Box>
  );
};


export default UploadDocDropzone;