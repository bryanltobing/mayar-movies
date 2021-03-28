import {
  Box,
  Divider,
  Heading,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { Collapse, Fade } from '@chakra-ui/transition';
import React from 'react';
import { useState } from 'react';
import { fontSize } from 'token/Token';
import ActorMovieList from './ActorMovieList';

const ActorItem = ({ theData: data }) => {
  const [showMovies, setShowMovies] = useState(false);

  const handleToggle = () => {
    setShowMovies((oldMovie) => !oldMovie);
  };

  return (
    <Fade in={true}>
      <Box
        border="4px"
        borderColor="teal.700"
        padding={4}
        color="teal.900"
        height="fit-content"
        boxShadow="2xl"
      >
        <Heading fontSize={fontSize.SubTitle}>Actor</Heading>
        <Divider marginY={2} />
        <Stack spacing={0} fontSize={fontSize.TextContent}>
          <Text fontWeight="bold">{data?.name}</Text>
          <Text>{data?.age} years old</Text>
        </Stack>
        <Divider marginY={2} />
        <Heading
          fontSize={fontSize.SubTitle}
          _hover={{ color: 'teal.500' }}
          cursor="pointer"
          onClick={handleToggle}
        >
          Movies ( {data?.movies?.length} )
        </Heading>

        <Collapse in={showMovies}>
          <Box marginX={1}>
            <UnorderedList>
              {data?.movies?.map(({ id, name }) => (
                <ActorMovieList key={id} name={name} movieId={id} />
              ))}
            </UnorderedList>
          </Box>
        </Collapse>
      </Box>
    </Fade>
  );
};

export default ActorItem;
