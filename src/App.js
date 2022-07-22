import React from 'react';
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import {
  ChakraProvider
} from '@chakra-ui/react';

import Theme from './theme'

import Nav from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Support from './components/Support';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Nav />
      <Hero />
      <About />
      <Support />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
