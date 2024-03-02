import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: 'Montserrat, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  colors: {
    brand: {
      orange: '#FF710B',
      teal: '#4EBEA4',
      thingray: '#DFDFDF',
      lightgray: '#AFAFAF',
      darkgray: '#968A8A',
      midgray: '#878686',
      white: '#FFFFFF',
      white2: '#F3F5F6',
      whitegray: '#E5E5E5',
      cream: '#F9FAFA',
      green: '#4EBEA4',
      grayfooter: '#F5F5F5',
      dustaygray: '#9D9191',
    },
    bteal: {
      500: '#4EBEA4',
    },
  },
});
