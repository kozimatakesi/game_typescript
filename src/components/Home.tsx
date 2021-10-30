import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import homePage from './tech-g19c066f07_1920.jpg';

const Home: React.FC = () => {
  return (
    <Box>
      <Image src={homePage} alt="Adebayo" />
    </Box>
  );
};

export default Home;
