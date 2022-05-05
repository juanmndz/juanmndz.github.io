import React from 'react';
import { Box, Text, Image, Flex, Link } from '@chakra-ui/react';
import './cursor.css';

const Hero = () => {
  return (
    <Box as="section" my="8" px="5" id="hero" d="flex" flexWrap="wrap">
      <Flex direction="column" w={{ base: '100%', md: '40%' }}>
        <Text as="h2" fontSize="5xl" fontWeight="770" pt="8">
          Hi There!
        </Text>
        <Text as="h3" fontSize="3xl" fontWeight="600" pt="4">
          I’m Juan and I'm a Full-Stack Web Developer{' '}
          <span className={'cursorText'} />
        </Text>
        {/* <Text as="span" ml=".5"  borderRadius="1px" width="1" height="3" bg="#fff" fontSize="3x1" sx={{animation: 'cursor 1s infinite'}}/> */}
        {/* <span style={cursorStyle} /> */}

        <Flex justify="space-between" mt="4">
          <Link href="https://github.com/juanmndz" isExternal>
            <Image src={'./images/icons/github.svg'} w="10" />
          </Link>
          <Link href="https://www.linkedin.com/in/jcmende2/" isExternal>
          <Image src={'./images/icons/linkedin.svg'} w="10" />
          </Link>
          <Link href="https://medium.com/@juanmndz19" isExternal>
          <Image src={'./images/icons/medium.svg'} w="12" />
          </Link>
        </Flex>
      </Flex>
      <Box w={{ base: '100%', md: '60%' }} my={{ base: '8' }}>
        <Image src={'./images/illustrations/dev.svg'} w="100%" />
      </Box>
    </Box>
  );
};

export default Hero;
