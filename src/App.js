import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  theme,
  Button,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/fa';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Heading as={'h1'} size='3xl'>
          Remove-Paginasi
        </Heading>
        <Text fontSize='2xl'>penghapus paginasi website berita</Text>
        <Button colorScheme='Github' >
          Facebook
        </Button>
      </Box>
    </ChakraProvider>
  );
}

export default App;
