import React from 'react';
import { ChakraProvider,  Box } from '@chakra-ui/react';
import Slide from './mysilder';

function App() {
  return (
    <ChakraProvider>
    <Box>
      <Slide/>
    </Box>
    </ChakraProvider>
  );
}

export default App;
