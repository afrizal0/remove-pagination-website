import { Button, Link, useColorModeValue, Flex, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function Btn() {
  return (
    <Link href="https://github.com/afrizal0/remove-pagination" isExternal>
      <Button
        px={8}
        bg={useColorModeValue('blackAlpha.600', 'white')}
        color={useColorModeValue('white', 'black')}
        rounded="md"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        <Flex>
            <FaGithub /> 
            <Text px={1}>Github</Text>
        </Flex>
      </Button>
    </Link>
  );
}
