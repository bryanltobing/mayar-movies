import { gql, useQuery } from '@apollo/client';
import { Center, Divider, Heading, Text } from '@chakra-ui/layout';
import { ModalBody } from '@chakra-ui/modal';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

const MovieModalContent = ({ movieId }) => {
  console.log(movieId);
  const query = gql`
    query {
      movie(id: "${movieId}") {
        id
        name
        genre
      }
    }
  `;
  const { data, loading } = useQuery(query);

  return (
    <>
      {loading && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="teal.50"
            color="teal.700"
            size="xl"
          />
        </Center>
      )}
      {data && (
        <ModalBody>
          <Heading fontSize={['SubTitleMobile', 'SubTitle']} my={2}>
            {data?.movie?.name}
          </Heading>
          <Divider marginY={1} />
          <Text
            paddingY={1}
            paddingX={4}
            border="2px"
            borderColor="teal.700"
            color="teal.700"
            width="fit-content"
            fontSize={['TextContentMobile', 'TextContent']}
          >
            {data?.movie?.genre}
          </Text>
        </ModalBody>
      )}
    </>
  );
};

export default MovieModalContent;
