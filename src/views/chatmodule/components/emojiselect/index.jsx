import { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import EmojiPicker from 'emoji-picker-react';

function EmojiSelect() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEmojiSelect = (emoji) => {
    console.log('Selected emoji:', emoji);
    // You can handle the selected emoji here (e.g., update state, close modal)
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">Emoji Chart</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <VStack p={4} alignItems="flex-start">
            <ModalFooter>
              <Wrap spacing={2}>
                <WrapItem>
                  <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                </WrapItem>
              </Wrap>
            </ModalFooter>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EmojiSelect;
