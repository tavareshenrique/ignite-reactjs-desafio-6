import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '700': '#47585B',
      '50': '#F5F8Fa',
    },
    yellow: '#FFBA08',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.700',
      },
      h1: {
        fontSize: '4xl',
        fontWeight: '700',
        mb: '4',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        cursor: 'pointer',
      },
    },
  },
});
