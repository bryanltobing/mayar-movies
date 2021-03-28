import { gql, useQuery } from '@apollo/client';
import { SimpleGrid } from '@chakra-ui/layout';
import ActorItem from 'components/Actor/ActorItem';
import CenterLoadingSpinner from 'components/UI/CenterLoadingSpinner';
import React from 'react';
import { catchError } from 'utils/catch';

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
  const { data, loading } = useQuery(query, {
    onError: (err) => {
      catchError(err.networkError.statusCode);
    },
  });

  return (
    <>
      {loading && <CenterLoadingSpinner />}

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
