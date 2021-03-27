import { Center } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React from 'react';

const CenterLoadingSpinner = () => {
  return (
    <Center>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="teal.50"
        color="teal.700"
        size="xl"
      />
    </Center>
  );
};

export default CenterLoadingSpinner;
