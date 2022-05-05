import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const List = ({ title }) => (
  <a href={`#${title}`} style={{color: "#fff", textDecoration: 'none'}}>
    <Box
      pt="1"
      px="5"
      _hover={{ background: 'rgba(107, 114, 128)' }}
      _focus={{ background: 'rgba(107, 114, 128)' }}
      cursor="pointer"
      borderRadius=".5rem"
      >
      {title}
    </Box>
      </a>
  );

function Header() {

  return (
    <Flex
      justifyContent={{ base: 'center', md: 'flex-end' }}
      fontWeight="100"
      fontSize={['sm', 'lg']}
    >
      <List title="Experience" />
      <List title="Projects" />
      <List title="Skills" />
      <a href={`https://juanmndz.github.io/JuanMendezResume.pdf`} style={{color: "#fff", textDecoration: 'none'}}>
    <Box
      pt="1"
      px="5"
      _hover={{ background: 'rgba(107, 114, 128)' }}
      _focus={{ background: 'rgba(107, 114, 128)' }}
      cursor="pointer"
      borderRadius=".5rem"
      >
      Resume
    </Box>
      </a>
    </Flex>
  );
}

export default Header;
