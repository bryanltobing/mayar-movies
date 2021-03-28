import { gql, useQuery } from '@apollo/client';
import Icon from '@chakra-ui/icon';
import { SimpleGrid } from '@chakra-ui/layout';
import ActorItem from 'components/Actor/ActorItem';
import CenterLoadingSpinner from 'components/UI/CenterLoadingSpinner';
import RefreshButton from 'components/UI/RefreshButton';
import React from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
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
  const { data, loading, refetch } = useQuery(query, {
    onError: (err) => {
      catchError(err.networkError.statusCode);
    },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <>
      {loading && <CenterLoadingSpinner />}

      {data && (
        <>
          <RefreshButton
            info={<Icon as={FiRefreshCcw} />}
            onClick={() => refetch()}
          />
          <SimpleGrid minChildWidth="240px" spacing="20px">
            {data?.actors?.map((theData) => {
              return <ActorItem key={theData?.id} theData={theData} />;
            })}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default Actor;
