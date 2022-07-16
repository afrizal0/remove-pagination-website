import React from 'react';

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Nav from './components/Navbar';
import Hero from './components/Hero';
import SmallCentered from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <SmallCentered />
    </ChakraProvider>
  );
}

export default App;
