import { gql, useQuery } from '@apollo/client';
import {
  Box,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { ModalBody } from '@chakra-ui/modal';
import CenterLoadingSpinner from 'components/UI/CenterLoadingSpinner';
import React from 'react';
import { fontSize } from 'token/Token';
import { catchError } from 'utils/catch';

const ActorModalContent = ({ actorId }) => {
  const query = gql`
    query {
      actor(id: "${actorId}") {
        id
        name
        age
        movies {
          id
          name
        }
      }
    }
  `;
  const { data, loading } = useQuery(query, {
    onError: (err) => {
      catchError(err.networkError.statusCode);
    },
  });

  return (
    <>
      {loading && <CenterLoadingSpinner />}

      {data && (
        <ModalBody>
          <Box>
            <Heading fontSize={fontSize.SubTitle} my={2}>
              {data?.actor?.name}
            </Heading>
            <Text fontSize={fontSize.TextContent}>
              {data?.actor?.age} years old
            </Text>
          </Box>

          <Divider marginY={2} />
          <Box fontSize={fontSize.Small}>
            <Heading fontSize="inherit">MOVIES</Heading>
            <Box marginX={1}>
              <UnorderedList>
                {data?.actor?.movies?.map((theData) => (
                  <ListItem key={theData?.id}>{theData?.name}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        </ModalBody>
      )}
    </>
  );
};

export default ActorModalContent;
