import React from 'react';
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import {
  ChakraProvider,
  ColorModeProvider
} from '@chakra-ui/react';

import Theme from './theme'

import Nav from './parts/Navbar';
import Hero from './parts/Hero';
import Footer from './parts/Footer';
import About from './parts/About';
import Support from './parts/Support';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <ColorModeProvider>
        <Nav />
        <Hero />
        <About />
        <Support />
        <Footer />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
