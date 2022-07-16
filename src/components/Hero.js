import { Box, Text, Heading } from '@chakra-ui/react';
import Btn from './Button';


function Hero() {
    return (
    <Box textAlign="center" fontSize="xl">
        <Heading as={'h1'} size="3xl">
        Remove-Paginasi
        </Heading>

        <Text fontSize="2xl" p={4}>penghapus paginasi website berita</Text>
        <Btn />
    </Box>
    )
}

export default Hero;