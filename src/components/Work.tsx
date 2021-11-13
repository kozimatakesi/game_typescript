import { Box, Container, Text } from '@chakra-ui/layout';
import React from 'react';
import WorksChildren from './Works/WorksChildren';
import hareruya from '../images/hareruya-bot-image.png';

const Work: React.FC = () => {
  return (
    <Box h="100%" color="white">
      <Container>
        <Text fontSize="5xl" color="blue.300">
          Work
        </Text>

        <WorksChildren
          githubUrl="https://github.com/kozimatakesi/hareruya-bot"
          imageUrl={hareruya}
          imageAlt="Rear view of modern home with pool"
          title="晴れる屋買取価格調査LINE Bot"
          explanation="スクレイピングを用いて、晴れる屋サイトからカードの買取価格を教えてくれるLINE Bot"
          skills={['js']}
        />
      </Container>
    </Box>
  );
};

export default Work;
