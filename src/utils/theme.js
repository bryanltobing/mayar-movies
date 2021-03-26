import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Nunito Sans',
    heading: 'Raleway',
  },
  fontSizes: {
    Title: '28px',
    TitleMobile: '20px',
  },
});

export default theme;
