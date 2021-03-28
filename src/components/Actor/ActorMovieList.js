import { ListItem } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import MovieModal from 'components/Movies/MovieModal';
import React from 'react';
import { useState } from 'react';

const ActorMovieList = ({ name, movieId }) => {
  const [showMovieModal, setShowMovieModal] = useState(false);

  const handleOpenMovieModal = () => {
    setShowMovieModal(true);
  };

  const handleCloseMovieModal = () => {
    setShowMovieModal(false);
  };

  return (
    <>
      <ListItem
        onClick={handleOpenMovieModal}
        cursor="pointer"
        _hover={{ color: 'teal.500' }}
        textDecoration="underline"
      >
        <Tooltip label={name} aria-label={name}>
          {name}
        </Tooltip>
      </ListItem>
      <MovieModal
        isOpen={showMovieModal}
        onClose={handleCloseMovieModal}
        movieId={movieId}
      />
    </>
  );
};

export default ActorMovieList;
