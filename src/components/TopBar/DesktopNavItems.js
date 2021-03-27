import { Stack } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import LinkItem from './LinkItem';

const DesktopNavItems = (props) => {
  return (
    <Stack {...props}>
      <LinkItem text="Movies" path="/movies" />
      <LinkItem text="Actor" path="/actor" />
    </Stack>
  );
};

export default DesktopNavItems;
