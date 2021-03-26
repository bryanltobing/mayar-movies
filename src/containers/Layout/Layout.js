import TopBar from 'containers/TopBar/TopBar';
import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TopBar collapse={open} setCollapse={setOpen} />
      {children}
    </>
  );
};

export default Layout;
