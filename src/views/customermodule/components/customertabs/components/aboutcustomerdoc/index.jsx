import React, { useState } from 'react';
import {
    Box,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react';
import { MdFileUpload } from 'react-icons/md';

const AboutCustomerDoc = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        setUploadedFiles([...uploadedFiles, ...files]);
    };

    return (
        <Box mt={5}>
            <input
                type="file"
                id="file"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                multiple
            />
            <label htmlFor="file">
                <Button as="span" leftIcon={<MdFileUpload />}>
                    Upload Documents
                </Button>
            </label>
            <Table variant="striped" mt={4}>
                <TableCaption>List of Uploaded Documents</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Type</Th>
                        <Th>Size</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {uploadedFiles.map((file, index) => (
                        <Tr key={index}>
                            <Td>{file.name}</Td>
                            <Td>{file.type}</Td>
                            <Td>{(file.size / 1024).toFixed(2)} KB</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default AboutCustomerDoc;