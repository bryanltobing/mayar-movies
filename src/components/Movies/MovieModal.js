import React from 'react';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';
import MovieModalContent from './MovieModalContent';

const MovieModal = ({ isOpen, onClose, movieId }) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent margin={4} borderRadius="none">
        <ModalHeader>MOVIE</ModalHeader>
        <ModalCloseButton
          borderRadius="none"
          backgroundColor="teal.700"
          color="teal.50"
          _hover={{ backgroundColor: 'teal.900' }}
        />
        {isOpen && <MovieModalContent movieId={movieId} />}

        <ModalFooter>
          <Button
            onClick={onClose}
            borderRadius="none"
            backgroundColor="teal.700"
            color="teal.50"
            _hover={{ backgroundColor: 'teal.900' }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MovieModal;
