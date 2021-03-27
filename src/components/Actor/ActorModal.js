import { Button } from '@chakra-ui/button';

import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import React from 'react';
import ActorModalContent from './ActorModalContent';

const ActorModal = ({ onClose, isOpen, actorId }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent margin={4} borderRadius="none">
        <ModalHeader>Actor</ModalHeader>
        <ModalCloseButton borderRadius="none" />
        {isOpen && <ActorModalContent actorId={actorId} />}

        <ModalFooter>
          <Button onClick={onClose} borderRadius="none">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActorModal;
