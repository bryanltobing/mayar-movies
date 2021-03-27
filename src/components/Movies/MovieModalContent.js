import { gql, useQuery } from '@apollo/client';
import { Divider, Heading, Text } from '@chakra-ui/layout';
import { ModalBody } from '@chakra-ui/modal';
import CenterLoadingSpinner from 'components/UI/CenterLoadingSpinner';
import React from 'react';
import { fontSize } from 'token/Token';

const MovieModalContent = ({ movieId }) => {
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
      {loading && <CenterLoadingSpinner />}
      {data && (
        <ModalBody>
          <Heading fontSize={fontSize.SubTitle} my={2}>
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
            fontSize={fontSize.TextContent}
          >
            {data?.movie?.genre}
          </Text>
        </ModalBody>
      )}
    </>
  );
};

export default MovieModalContent;
