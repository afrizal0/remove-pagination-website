import {
    Heading,
    SimpleGrid,
    Box,
    Image
  } from '@chakra-ui/react';
export default function Support() {
    return (
        <Box my={32}>
            <Heading>
                Berfungsi Pada
            </Heading>
            <SimpleGrid minChildWidth={'200px'} spacing={10}>
                <Box height='80px'>
                    <Image src='http://assets.kompasiana.com/items/album/2017/02/20/kompasiana-logo-58aa3012b8937321178c8163.png' alt='Kompasiana'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://asset.kompas.com/data/2019/bca/images/logokompas.png' alt='Kompas'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://www.sobatku.co.id/wp-content/uploads/2019/03/tribunnews.png' alt='Tribunnews'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://public.viva.co.id/asset-viva/responsive-web/img/logo-rebranding-black.png?v=1.1.33' alt='Viva'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://klikkaltim.com/images/suara.png' alt='Suara'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jawa_Pos_Group_logo.svg/2560px-Jawa_Pos_Group_logo.svg.png' alt='Suara'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://assets.pikiran-rakyat.com/www/2019/mobile/images/logo_pikiran_rakyat.png?v=59' alt='Suara'/>
                </Box>
                <Box height='80px'>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/9/9d/Logo-sindonews.png?v=59' alt='Suara'/>
                </Box>
            </SimpleGrid>
        </Box>
    )
}