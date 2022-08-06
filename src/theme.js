import {
    extendTheme
} from '@chakra-ui/react';

const Theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Raleway', sans-serif`,
    }
  })

  export default Theme;