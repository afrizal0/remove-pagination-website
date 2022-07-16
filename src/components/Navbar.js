// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box p={6}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>RemPagi</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;