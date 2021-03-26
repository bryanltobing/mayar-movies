import Icon from '@chakra-ui/icon';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { Collapse } from '@chakra-ui/transition';
import DesktopNavItems from 'components/TopBar/DesktopNavItems';
import MobileNavItems from 'components/TopBar/MobileNavItems';
import React from 'react';

const TopBar = ({ collapse, setCollapse }) => {
  const handleToggle = () => {
    setCollapse((oldCollapse) => !oldCollapse);
  };

  const displayMobileValue = { base: 'block', sm: 'block', md: 'none' };
  const displayDekstopValue = { base: 'none', sm: 'none', md: 'flex' };
  const paddingXValue = [4, 8];

  return (
    <>
      <Box backgroundColor="teal.700" height="80px" width="full">
        <Flex
          width="full"
          height="full"
          alignItems="center"
          paddingY={4}
          paddingX={paddingXValue}
          justifyContent="space-between"
        >
          <Heading color="teal.50" fontSize={['TitleMobile', 'Title']}>
            Mayar Movies
          </Heading>

          <DesktopNavItems
            direction="row"
            spacing={8}
            color="teal.50"
            display={displayDekstopValue}
          />

          <Icon
            as={HamburgerIcon}
            color="teal.50"
            fontSize={[20, 24]}
            cursor="pointer"
            display={displayMobileValue}
            onClick={handleToggle}
          />
        </Flex>
      </Box>
      <Collapse in={collapse} animateOpacity>
        <MobileNavItems
          p={paddingXValue}
          color="teal.50"
          bg="teal.700"
          shadow="md"
          display={displayMobileValue}
        />
      </Collapse>
    </>
  );
};

export default TopBar;
