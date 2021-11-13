import { Box, Container, Text } from '@chakra-ui/layout';
import React from 'react';
import HareruyaBot from './Works/HareruyaBot';

const Work: React.FC = () => {
  return (
    <Box h="100%" color="white">
      <Container>
        <Text fontSize="5xl" color="blue.300">
          Work
        </Text>

        <HareruyaBot />
      </Container>
    </Box>
  );
};

export default Work;
