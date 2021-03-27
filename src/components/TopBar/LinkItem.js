import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const LinkItem = ({ text, path }) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Link to={path}>
      <Box
        border="1px"
        borderColor={isActive ? 'teal.50' : 'transparent'}
        paddingX={3}
        paddingY={1}
        _hover={{ backgroundColor: 'teal.50', color: 'teal.900' }}
        transition="ease"
        transitionDuration="0.5s"
      >
        <Text>{text}</Text>
      </Box>
    </Link>
  );
};

export default LinkItem;
