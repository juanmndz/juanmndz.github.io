import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Header from './components/Header';
import Skills from './components/Skills';
import Hero from './components/Hero';
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box mx="auto" my="10" maxWidth="1024px">
        <Header />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
        </main>
      </Box>
    </ChakraProvider>
  );
}

export default App;
