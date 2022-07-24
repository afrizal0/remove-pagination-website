import { Button, Link, useColorModeValue, Flex, Text } from '@chakra-ui/react';

export default function Btn({label, href, children}) {
  return (
    <Link href={href} isExternal>
      <Button
        px={6}
        mx={2}
        bg={useColorModeValue('black', 'white')}
        color={useColorModeValue('white', 'black')}
        rounded="md"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        <Flex>
            {children}
            <Text px={1}>{label}</Text>
        </Flex>
      </Button>
    </Link>
  );
}
