import { Button, Link, useColorModeValue } from '@chakra-ui/react';


export default function Btn() {
  return (
      <Button
            px={8}
        bg={useColorModeValue('blackAlpha.600', 'white')}
        color={useColorModeValue('white', 'black')}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        >
        <Link href='https://chakra-ui.com' isExternal>
            Chakra Design system
        </Link>
      </Button>
  );
}