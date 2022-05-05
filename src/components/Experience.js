import { Box, Flex, Text, Image, Stack, HStack } from '@chakra-ui/react';
import React from 'react';
import experience from '../experienceData';

function Projects() {
  return (
    <Box as="section" mb="20" px="5" id="Experience">
      <Box as="header" fontSize="2xl" fontWeight="600" pt="8">
        <h2>Experience</h2>
      </Box>

      <Stack direction={['column']} spacing="24" my="7">
        {experience.map((exp, index) => (
          <Flex
            key={index}
            flexWrap="wrap"
            justifyContent={{ md: 'space-between' }}
          >
            <Box w={{ base: '100%', md: '50%' }}>
              <Image
                borderRadius=".5rem"
                boxShadow="lg"
                w={['100%']}
                src={exp.image}
                alt="Experience"
              />
            </Box>

            <Flex
              direction="column"
              my="3"
              mx="1"
              w={{ base: '100%', md: '40%' }}
              justifyContent={{ md: 'center' }}
              order={index & 1 && { md: '-1' }}
            >
              <Text
                fontSize="2xl"
                casing="uppercase"
                color="skyblue"
                fontWeight="600"
              >
                {exp.title}
              </Text>
              <p>{exp.description}</p>

              <Flex pb="2" flexWrap="wrap">
                {exp.tools.map((disc, index) => (
                  <Box
                    as="span"
                    border="1px"
                    borderRadius=".5rem"
                    px="2"
                    py="1"
                    mr="6"
                    my="2"
                    fontSize="sm"
                    key={index}
                  >
                    {disc}
                  </Box>
                ))}
              </Flex>
              <HStack spacing="4">
                <a href={exp.link} target="_blank" rel="noreferrer">
                  <img
                    src="./images/icons/external-link.svg"
                    alt="link to live"
                    width="24px"
                    height="24px"
                  />
                </a>
              </HStack>
            </Flex>
          </Flex>
        ))}
      </Stack>
    </Box>
  );
}

export default Projects;
