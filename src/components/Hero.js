import { Box, Text, Heading } from '@chakra-ui/react';
import Btn from './Button';

function Hero() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Heading as={'h1'} size="3xl">
        RemPagi
      </Heading>
      <Text fontSize="2x1" p={6}>
        Sebuah ekstensi chrome penghapus paginasi website berita
      </Text>
      <Btn />
    </Box>
  );
}

export default Hero;
