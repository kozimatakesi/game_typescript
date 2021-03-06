import React from 'react';
import { Box, Link, Spacer } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const Header: React.FC = () => {
  return (
    <Box
      px={{ md: '10' }}
      top={0}
      position="sticky"
      zIndex="sticky"
      h="5vh"
      color="white"
      opacity="0.8"
      backgroundColor="blue.800"
    >
      <Flex SystemProps="justifyContent">
        <Box px="4" py="2">
          <Link href="/">HOME</Link>
        </Box>
        <Spacer />
        <Box px="4" py="2">
          <Link href="/about">ABOUT</Link>
        </Box>
        <Box px="4" py="2">
          <Link href="/work">WORKS</Link>
        </Box>
        <Box px="4" py="2" fontSize="2xl">
          <Link href="https://twitter.com/gqtwomNZddivyVq" isExternal>
            <AiFillTwitterCircle />
          </Link>
        </Box>
        <Box px="4" py="2" fontSize="2xl">
          <Link href="https://github.com/kozimatakesi" isExternal>
            <AiFillGithub />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
