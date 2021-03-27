import {
  Box,
  Divider,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/transition';
import React from 'react';
import { useState } from 'react';

const ActorItem = ({ theData: data }) => {
  const [showMovies, setShowMovies] = useState(false);

  const handleToggle = () => {
    setShowMovies((oldMovie) => !oldMovie);
  };

  return (
    <Box
      border="1px"
      borderColor="teal.700"
      padding={4}
      color="teal.900"
      height="fit-content"
    >
      <Heading fontSize={['SubTitleMobile', 'SubTitle']}>Actor</Heading>
      <Divider marginY={2} />
      <Stack spacing={0} fontSize={['TextContentMobile', 'TextContent']}>
        <Text fontWeight="bold">{data?.name}</Text>
        <Text>{data?.age} years old</Text>
      </Stack>
      <Divider marginY={2} />
      <Heading
        fontSize={['SubTitleMobile', 'SubTitle']}
        _hover={{ color: 'teal.500' }}
        cursor="pointer"
        onClick={handleToggle}
      >
        Movies ( {data?.movies?.length} )
      </Heading>

      <Collapse in={showMovies}>
        <Box marginX={1}>
          <UnorderedList>
            {data?.movies?.map(({ id, name }) => (
              <ListItem key={id}>{name}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ActorItem;
