import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/layout';
import MovieItem from 'components/Movies/MovieItem';
import CenterLoadingSpinner from 'components/UI/CenterLoadingSpinner';

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
      {loading && <CenterLoadingSpinner />}
      <SimpleGrid minChildWidth="240px" spacing="20px">
        {data?.movies?.map((theData) => (
          <MovieItem key={theData?.id} theData={theData} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Movies;
