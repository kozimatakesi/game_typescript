import React from 'react';
import { Box, Container, Link } from '@chakra-ui/layout';

const Hooter: React.FC = () => {
  return (
    <Box
      backgroundColor="red"
      bottom={0}
      position="sticky"
      zIndex="sticky"
      h="5vh"
    >
      <Container>
        <Link href="https://chakra-ui.com">Chakra UI</Link>
        <Link href="https://chakra-ui.com">Chakra UI</Link>
        <Link href="https://chakra-ui.com">Chakra UI</Link>
      </Container>
    </Box>
  );
};

export default Hooter;
