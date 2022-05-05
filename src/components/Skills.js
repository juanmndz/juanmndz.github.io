import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Skills() {
    return (
        <Box as="section" my="28" px="5" id="Skills">
        <Box as="header" fontSize="2xl" fontWeight="600">
          <h2>Skills</h2>
        </Box>
        <Flex
            flexWrap="wrap"
            justifyContent={{ md: 'space-between' }}
          >
            <Box w={{ base: '100%', md: '50%' }} my="2">
            <Text color="#5a53d0" fontWeight="550">Front End:</Text> React.js, Redux, HTML,  CSS, SCSS,  JavaScript  ES5/ES6/ES7, DOM, Material Ui, Responsive Design
            </Box>
            <Box w={{ base: '100%', md: '50%' }} my="2">
            <Text color="#5a53d0" fontWeight="550">Backend:</Text>Nodejs, ExpressJs, REST API, JSON, Stripe, Authentication, Mongodb, PostgreSQL, AWS S3
            </Box>
            <Box w={{ base: '100%', md: '50%' }} my="2">
            <Text color="#5a53d0" fontWeight="550">Tooling:</Text>Docker, CircleCI, Git, CI/CD, Docker, Jest 
            </Box>
            <Box w={{ base: '100%', md: '50%' }} my="2">
            <Text color="#5a53d0" fontWeight="550">Practices:</Text>Agile, Code Reviews, Pragmatic Coding, Unit and Integration testing, Best Practices
            </Box>
          </Flex>
        </Box>
  
    )
}

export default Skills
