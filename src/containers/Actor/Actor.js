import { gql, useQuery } from '@apollo/client';
import { Center, SimpleGrid } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import ActorItem from 'components/Actor/ActorItem';
import React from 'react';

const Actor = () => {
  const query = gql`
    query {
      actors {
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
        <SimpleGrid minChildWidth="240px" spacing="20px">
          {data?.actors?.map((theData) => {
            return <ActorItem key={theData?.id} theData={theData} />;
          })}
        </SimpleGrid>
      )}
    </>
  );
};

export default Actor;
