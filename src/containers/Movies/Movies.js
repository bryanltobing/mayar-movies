import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Spinner } from '@chakra-ui/spinner';
import { Center, SimpleGrid } from '@chakra-ui/layout';
import MovieItem from 'components/Movies/MovieItem';

const Movies = () => {
  const query = gql`
    query {
      movies {
        id
        name
        genre
        actor {
          id
          name
          age
        }
      }
    }
  `;
  const { loading, data } = useQuery(query);
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
      <SimpleGrid minChildWidth="240px" spacing="20px">
        {data?.movies?.map((theData) => (
          <MovieItem key={theData?.id} theData={theData} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Movies;
