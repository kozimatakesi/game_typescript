import React from 'react';
import { Box, Container, Link } from '@chakra-ui/layout';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Hooter: React.FC = () => {
  return (
    <Box bottom={0} position="sticky" zIndex="sticky" h="5vh" color="white">
      <Container>
        <Link href="https://twitter.com/gqtwomNZddivyVq">
          <AiFillTwitterCircle />
        </Link>
      </Container>
    </Box>
  );
};

export default Hooter;
