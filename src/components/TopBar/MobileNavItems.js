import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';
import LinkItem from './LinkItem';

const MobileNavItem = (props) => {
  return (
    <Box {...props}>
      <List spacing={4}>
        <ListItem cursor="pointer" onClick={() => props.setCollapse(false)}>
          <LinkItem text="Movies" path="/movies" />
        </ListItem>
        <ListItem cursor="pointer" onClick={() => props.setCollapse(false)}>
          <LinkItem text="Actor" path="/actor" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MobileNavItem;
