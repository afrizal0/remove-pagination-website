// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems={'center'}>
      <Stack direction={'row'} spacing={7}>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    
    </Flex>
  )
}

function Nav() {
  return (
    <Box p={6}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>RemPagi</Box>
          <Toggle />
        </Flex>
      </Box>
  );
}

export default Nav;
