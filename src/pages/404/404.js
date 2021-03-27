import { Button } from '@chakra-ui/button';
import { Box, Heading, Stack, Text } from '@chakra-ui/layout';
import React from 'react';
import { useHistory } from 'react-router';
import { fontSize } from 'token/Token';

const Pages404 = () => {
  const history = useHistory();
  return (
    <Box>
      <Stack
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={10}
      >
        <Heading fontSize={[80, 120]} color="gray.300" marginY={4}>
          404
        </Heading>
        <Text fontSize={fontSize.SubTitle} fontWeight="bold">
          YOU LOST
        </Text>
        <Button
          borderRadius="none"
          backgroundColor="teal.700"
          color="teal.50"
          paddingX={8}
          _hover={{ backgroundColor: 'teal.900' }}
          onClick={() => history.push('/')}
        >
          GO BACK
        </Button>
      </Stack>
    </Box>
  );
};

export default Pages404;
