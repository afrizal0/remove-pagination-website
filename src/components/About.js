import {
  Center,
  Heading,
  Image,
  Text,
  SimpleGrid,
  Box,
  Code 
} from '@chakra-ui/react';

export default function About() {
  return (
    <SimpleGrid minChildWidth={'360px'} columns={2} gap={20} px={20}>
      <Box>
        <Center>
          <Image
            w={'95%'}
            objectFit="fit"
            src="https://raw.githubusercontent.com/afrizal0/remove-pagination/main/img/gif/screen-capture%20(1).gif"
            alt="Cara Penggunaan"
          />
        </Center>
      </Box>
      <Box>
        <Heading as={'h2'}>Cara menggunakan</Heading>
        <Text>
          Unduh kode sumber ekstensi  
        </Text>
          <Code>git clone https://github.com/afrizal0/remove-pagination.git</Code>
          <Text>
            Pasang ekstensi chrome
          </Text>
      </Box>
    </SimpleGrid>
  );
}
