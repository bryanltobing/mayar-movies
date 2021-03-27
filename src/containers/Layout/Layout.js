import { Container } from '@chakra-ui/layout';
import TopBar from 'containers/TopBar/TopBar';
import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TopBar collapse={open} setCollapse={setOpen} />
      <Container maxW="container.xl" marginY={[8, 12]}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
