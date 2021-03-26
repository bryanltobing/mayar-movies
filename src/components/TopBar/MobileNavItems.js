import { Box, List, ListItem } from '@chakra-ui/layout';
import React from 'react';

const MobileNavItem = (props) => {
  return (
    <Box {...props}>
      <List spacing={4}>
        <ListItem cursor="pointer">Movies</ListItem>
        <ListItem cursor="pointer">Actor</ListItem>
      </List>
    </Box>
  );
};

export default MobileNavItem;
