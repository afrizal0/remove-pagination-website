import React from 'react';

import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Nav from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Support from './components/Support';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Hero />
      <About />
      <Support />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
