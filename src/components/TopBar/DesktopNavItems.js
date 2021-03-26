import { Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNavItems = (props) => {
  return (
    <Stack {...props}>
      <Link>
        <Text>Movies</Text>
      </Link>
      <Link>
        <Text>Actor</Text>
      </Link>
    </Stack>
  );
};

export default DesktopNavItems;
