import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Nunito Sans',
    heading: 'Raleway',
  },
  fontSizes: {
    Title: '28px',
    TitleMobile: '20px',
    SubTitle: '24px',
    SubTitleMobile: '16px',
    TextContent: '16px',
    TextContentMobile: '12px',
    Small: '14px',
    SmallMobile: '10px',
  },
});

export default theme;
