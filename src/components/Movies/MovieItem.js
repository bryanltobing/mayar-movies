import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/tooltip';
import { Collapse } from '@chakra-ui/transition';
import ActorModal from 'components/Actor/ActorModal';
import React, { useState } from 'react';

const MovieItem = ({ theData: data }) => {
  const [showActor, setShowActor] = useState(false);
  const [showActorInfo, setShowActorInfo] = useState(false);

  const handleOpenActor = () => {
    setShowActor(true);
  };

  const handleCloseActor = () => {
    setShowActor(false);
  };

  const handleShowActorInfo = () => {
    setShowActorInfo(true);
  };

  const handleCloseActorInfo = () => {
    setShowActorInfo(false);
  };

  return (
    <>
      <Box bg="teal.700" height="fit-content" boxShadow="xl" padding={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading
            color="teal.50"
            fontSize={['SubTitleMobile', 'SubTitle']}
            marginY={2}
          >
            {data?.name}
          </Heading>
          <Text
            fontSize={['TextContentMobile', 'TextContent']}
            backgroundColor="teal.50"
            width="fit-content"
            height="fit-content"
            paddingX={2}
            paddingY={0.5}
            color="teal.900"
          >
            {data.genre}
          </Text>
        </Flex>
        <Divider marginY={2} />
        <Box
          cursor="pointer"
          fontStyle="italic"
          textDecor="underline"
          fontSize={['TextContentMobile', 'TextContent']}
          color="teal.50"
          transition="ease"
          transitionDuration="0.5s"
          transitionProperty="all"
          _hover={{ color: 'teal.200' }}
        >
          {!showActor && <Text onClick={handleOpenActor}>Show Actor</Text>}
          {showActor && <Text onClick={handleCloseActor}>Hide Actor</Text>}
        </Box>

        <Collapse in={showActor}>
          <Box
            backgroundColor="teal.50"
            color="teal.900"
            marginY={2}
            paddingX={2}
            paddingY={1}
          >
            <Heading
              fontSize={['TextContentMobile', 'TextContent']}
              marginBottom={1}
              width="fit-content"
              transition="ease"
              transitionDuration="0.5s"
              transitionProperty="all"
              _hover={{
                backgroundColor: 'teal.200',
                padding: 1,
                cursor: 'pointer',
              }}
              onClick={handleShowActorInfo}
            >
              <Tooltip
                label="Detail"
                aria-label="Detail"
                placement="bottom-end"
              >
                {data?.actor?.name}
              </Tooltip>
            </Heading>
            <Text fontSize={['SmallMobile', 'Small']}>
              {data?.actor?.age} years old
            </Text>
          </Box>
        </Collapse>
      </Box>

      <ActorModal
        isOpen={showActorInfo}
        onClose={handleCloseActorInfo}
        actorId={data?.actor?.id}
      />
    </>
  );
};

export default MovieItem;
