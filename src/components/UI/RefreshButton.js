import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { fontSize } from 'token/Token';

const RefreshButton = ({ info, onClick }) => {
  return (
    <Box display="flex" justifyContent="flex-end" marginBottom={4}>
      <Button
        onClick={onClick}
        borderRadius="none"
        color="teal.700"
        backgroundColor="teal.50"
        fontSize={fontSize.TextContent}
      >
        {info}
      </Button>
    </Box>
  );
};

export default RefreshButton;
