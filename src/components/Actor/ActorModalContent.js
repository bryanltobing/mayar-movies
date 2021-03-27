import { gql, useQuery } from '@apollo/client';
import {
  Box,
  Center,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { ModalBody } from '@chakra-ui/modal';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

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
          <Box>
            <Heading fontSize={['SubTitleMobile', 'SubTitle']} my={2}>
              {data?.actor?.name}
            </Heading>
            <Text fontSize={['TextContentMobile', 'TextContent']}>
              {data?.actor?.age} years old
            </Text>
          </Box>

          <Divider marginY={2} />
          <Box fontSize={['SmallMobile', 'Small']}>
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