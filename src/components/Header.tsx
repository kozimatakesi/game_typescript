import React from 'react';
import { Box, Link, Spacer } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box
      px="10"
      backgroundColor="red"
      top={0}
      position="sticky"
      zIndex="sticky"
      h="35"
    >
      <Flex SystemProps="justifyContent">
        <Box px="4" py="2">
          <Link href="/">HOME</Link>
        </Box>
        <Spacer />
        <Box px="4" py="2">
          <Link href="/about">ABOUT</Link>
        </Box>
        <Spacer />
        <Box px="4" py="2">
          <Link href="/work">WORK</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
