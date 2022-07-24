import {
  Center,
  Heading,
  Image,
  SimpleGrid,
  Box,
  Code,
  UnorderedList,
  ListItem,
  Text,
  HStack,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
export default function About() {
  return (
    <SimpleGrid minChildWidth={'360px'} columns={2} gap={20} >
      <Box px={4}>
        <Center>
          <Image
            w={'95%'}
            objectFit="fit"
            src="https://raw.githubusercontent.com/afrizal0/RemPagi/main/img/gif/screen-capture%20(1).gif"
            alt="Cara Penggunaan"
          />
        </Center>
      </Box>
      <Box px={4} >
        <Heading as={'h2'} py={6}>Cara menggunakan</Heading>
        <UnorderedList>
          <ListItem>
            Unduh kode sumber ekstensi
            <Code>
              git clone https://github.com/afrizal0/remove-pagination.git
            </Code>
          </ListItem>
          <ListItem>
            Pasang ekstensi chrome
            <UnorderedList>
              <ListItem>
                <HStack>
                  <Text>Klik ikon</Text>
                  <BsThreeDotsVertical />
                </HStack>
              </ListItem>
              <ListItem>
                Buka menu <i>More Tools</i>, lalu klik <i>extension</i>
              </ListItem>
              <ListItem>
                Aktifkan Developer mode, lalu klik Load unpackaged, pilih source
                code yang tadi sudah diunduh
              </ListItem>
              <ListItem>Selamat anda terbebas dari paginasi 🎉🎉</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Box>
    </SimpleGrid>
  );
}
