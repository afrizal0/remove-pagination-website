import { Box, Text, Heading } from '@chakra-ui/react';
import Btn from '../elements/Button';
import { FaGithub, FaCloudDownloadAlt } from 'react-icons/fa';

function Hero() {
  return (
    <Box textAlign="center" fontSize="xl" my={24} height={360}>
      <Heading as={'h1'} size="3xl">
        RemPagi
      </Heading>
      <Text fontSize="2x1" p={6}>
        Sebuah ekstensi chrome untuk menghapus paginasi website berita
      </Text>
      <Btn
        label={'Github'}
        href={'https://github.com/afrizal0/remove-pagination'}
      >
        <FaGithub />
      </Btn>
      <Btn
        label={'Unduh'}
        href={
          'https://github.com/afrizal0/remove-pagination-website/archive/refs/heads/main.zip'
        }
      >
        <FaCloudDownloadAlt />
      </Btn>
    </Box>
  );
}

export default Hero;
