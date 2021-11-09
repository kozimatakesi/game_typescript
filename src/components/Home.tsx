import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import homePage from './tech-g19c066f07_1920.jpg';

const Home: React.FC = () => {
  return (
    <Box w="100%" h="100%" bgImage={homePage}>
      <Text pt="50" fontSize="5xl" align="center" color="white">
        Welcome to Kawamoto Portfolio
      </Text>
    </Box>
  );
};

export default Home;
