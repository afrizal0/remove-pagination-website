import {
    Heading,
    SimpleGrid,
    Box,
    Image,
    Center
  } from '@chakra-ui/react';
export default function Support() {
    return (
        <Box my={32} px={4}>
            <Heading pb={10}>
                <Center>
                    Berfungsi Pada
                </Center>
            </Heading>
            <SimpleGrid minChildWidth={'200px'} spacing={10}>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/7yhKs5S/kompasiana.webp' alt='Kompasiana'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/0X4xZ5f/logokompas.webp' alt='Kompas'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/BtVM6VD/tribunnews.webp' alt='Tribunnews'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/2qn3fnf/logo-rebranding-black.webp' alt='Viva'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/N1mDdCg/suara.webp' alt='Suara'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/CVp821W/Jawa-Pos-Group-logo-svg.webp' alt='Suara'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/J20kNgP/logo-pikiran-rakyat.webp' alt='Suara'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://i.ibb.co/g7jHF4r/Logo-sindonews.webp' alt='Suara'/>
                </Box>
            </SimpleGrid>
        </Box>
    )
}