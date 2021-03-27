import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNavItems = (props) => {
  return (
    <Stack {...props}>
      <Link to="/movies">
        <Text>Movies</Text>
      </Link>
      <Link to="/actor">
        <Text>Actor</Text>
      </Link>
    </Stack>
  );
};

export default DesktopNavItems;
