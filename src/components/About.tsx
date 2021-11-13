import { Box, Container, Text } from '@chakra-ui/layout';
import { Table, Tbody, Tfoot, Thead, Tr, Th, Td, Link } from '@chakra-ui/react';
import React from 'react';

const About: React.FC = () => {
  return (
    <Box h="100%" color="white">
      <Container maxW="container.md">
        <Text fontSize="5xl" color="blue.300">
          Carrier
        </Text>
        <Text>Name 川本直也</Text>
        <Text>Birthday 1990/02/28</Text>
        <Text fontSize="2xl" mt="30">
          職務経歴
        </Text>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>year</Th>
              <Th>event</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2010/03</Td>
              <Td>木更津高専 電子制御工学科卒業</Td>
            </Tr>
            <Tr>
              <Td>2010/04</Td>
              <Td>ダイキン工業株式会社入社</Td>
            </Tr>
            <Tr>
              <Td>2014/05</Td>
              <Td>精工化学株式会社入社</Td>
            </Tr>
            <Tr>
              <Td>2016/06</Td>
              <Td>双日総合管理株式会社入社</Td>
            </Tr>
            <Tr>
              <Td>2017/07</Td>
              <Td>株式会社エスアールエル入社</Td>
            </Tr>
            <Tr>
              <Td>2020/02</Td>
              <Td>株式会社AsuGate入社</Td>
            </Tr>
          </Tbody>
          <Tfoot />
        </Table>
        <Text fontSize="2xl" mt="30">
          プログラミング経歴
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>year</Th>
              <Th>event</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>2020/01</Td>
              <Td>Ruby on Rails学習 同時にHTML CSSを学習</Td>
            </Tr>
            <Tr>
              <Td>2020/10</Td>
              <Td>
                <Text>
                  <Link href="https://devcranes.com/" isExternal>
                    DevClanes
                  </Link>
                  に加入、Javascriptの学習
                </Text>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot />
        </Table>
      </Container>
    </Box>
  );
};

export default About;
