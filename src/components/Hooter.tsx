import React from 'react';
import { Box, Link } from '@chakra-ui/layout';

const Hooter: React.FC = () => {
  return (
    <Box
      backgroundColor="red"
      bottom={0}
      position="sticky"
      zIndex="sticky"
      h="5%"
    >
      <Link href="https://chakra-ui.com">Chakra UI</Link>
      <Link href="https://chakra-ui.com">Chakra UI</Link>
      <Link href="https://chakra-ui.com">Chakra UI</Link>
    </Box>
  );
};

export default Hooter;
