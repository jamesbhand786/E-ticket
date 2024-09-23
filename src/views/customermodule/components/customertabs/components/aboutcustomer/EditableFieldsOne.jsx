import React, { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Input,
    Stack,
    Text,
    HStack,
    FormControl,
    FormLabel,
    useEditableControls,
    Editable,
    EditableInput,
    EditablePreview,
    Divider
} from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { MdEdit } from 'react-icons/md';

// Custom controls for the Editable component
const EditableControls = () => {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps } = useEditableControls();
    return isEditing ? (
        <HStack spacing={2}>
            <IconButton
                icon={<MdEdit />}
                colorScheme="teal" size='sm'
                aria-label="Save"
                {...getSubmitButtonProps()}
            />
            {/* <IconButton
        icon={<CloseIcon />}
        colorScheme="red"
        aria-label="Cancel"
        {...getCancelButtonProps()}
      /> */}
        </HStack>
    ) : null;
};

const EditableField = ({ label, value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (val) => {
        setInputValue(val);
    };

    return (
        <HStack spacing={4}>
            <Text fontWeight={500} fontSize={'sm'} color="gray.500" >{label}:</Text>
            <Editable
                value={inputValue}
                onChange={handleChange}
                submitOnBlur={false}
                fontWeight={400} fontSize={'md'}
            >
                <EditablePreview />
                <HStack spacing={2}>
                    <EditableInput />
                    <EditableControls />
                </HStack>

            </Editable>
        </HStack>
    );
};

const EditableFields = ({ initialData, onSave }) => {
    const [data, setData] = useState(initialData);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        onSave(data);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setData(initialData);
        setIsEditing(false);
    };

    const handleChange = (field) => (value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <Box p={5} borderWidth={1} borderRadius="md" boxShadow="md">
            <Stack spacing={4}>
                {Object.entries(data).map(([key, value]) => (
                    <EditableField
                        key={key}
                        label={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={value}
                        onChange={handleChange(key)}
                    />
                ))}
                {/* {isEditing ? (
                    <>
                        <Divider my={4} />
                        <HStack spacing={4}>
              <Button colorScheme="blue" onClick={handleSave}>
                Save
              </Button>
              <Button colorScheme="gray" onClick={handleCancel}>
                Cancel
              </Button>
            </HStack>
                    </>
                ) : (
                    <IconButton
                        icon={<EditIcon />}
                        colorScheme="blue"
                        aria-label="Edit"
                        onClick={() => setIsEditing(true)}
                    />
                )
                } */}
            </Stack>
        </Box>
    );
};

export default EditableFields;
