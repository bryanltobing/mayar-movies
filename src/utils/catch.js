import { createStandaloneToast } from '@chakra-ui/react';

const toast = createStandaloneToast();

export const catchError = (statusCode) => {
  let title = '';
  let description = '';
  let status = 'error';
  let duration = 7000;
  let isClosable = true;

  switch (statusCode) {
    case 400:
      title = 'An error occurred';
      description = 'Something wrong happened';
      break;
    case 500:
      title = 'Connection Timeout';
      description = 'Check your internet connection';
      break;
    default:
      break;
  }

  toast({
    title,
    description,
    status,
    duration,
    isClosable,
  });
};
