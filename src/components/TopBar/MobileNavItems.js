import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';
import LinkItem from './LinkItem';

const MobileNavItem = ({ handleCollapse, ...rest }) => {
  return (
    <Box {...rest}>
      <List spacing={4}>
        <ListItem cursor="pointer" onClick={() => handleCollapse(false)}>
          <LinkItem text="Movies" path="/movies" />
        </ListItem>
        <ListItem cursor="pointer" onClick={() => handleCollapse(false)}>
          <LinkItem text="Actor" path="/actor" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MobileNavItem;
