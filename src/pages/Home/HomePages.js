import { Container } from '@chakra-ui/layout';
import Movies from 'containers/Movies/Movies';
import React from 'react';

const HomePages = () => {
  return (
    <Container maxW="container.xl" marginY={[8, 12]}>
      <Movies />
    </Container>
  );
};

export default HomePages;
