import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/layout';
import MovieItem from 'components/Movies/MovieItem';
import CenterLoadingSpinner from 'components/UI/CenterLoadingSpinner';
import { catchError } from 'utils/catch';
import RefreshButton from 'components/UI/RefreshButton';
import Icon from '@chakra-ui/icon';
import { FiRefreshCcw } from 'react-icons/fi';

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
  const { loading, data, refetch } = useQuery(query, {
    onError: (err) => catchError(err.networkError.statusCode),
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      {loading && <CenterLoadingSpinner />}

      {data && (
        <RefreshButton
          info={<Icon as={FiRefreshCcw} />}
          onClick={() => refetch()}
        />
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
