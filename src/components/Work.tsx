import { Box, Container, Text } from '@chakra-ui/layout';
import React from 'react';
import WorksChildren from './Works/WorksChildren';
import hareruya from '../images/hareruya-bot-image.png';
import electron from '../images/electron-image.png';

const Work: React.FC = () => {
  return (
    <Box h="100%" w="100%" color="white">
      <Container maxW={{ md: 'container.md' }}>
        <Text fontSize="5xl" color="blue.300">
          Work
        </Text>
        <Box display={{ md: 'flex' }}>
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/hareruya-bot"
            imageUrl={hareruya}
            imageAlt="Rear view of modern home with pool"
            title="晴れる屋買取価格調査LINE Bot"
            explanation="スクレイピングを用いて、晴れる屋サイトからカードの買取価格を教えてくれるLINE Bot"
            skills={['js']}
          />
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/output-excel"
            imageUrl={electron}
            imageAlt="Rear view of modern home with pool"
            title="ファイルリスト作成ソフト"
            explanation="Electronを用いて、指定ディレクトリ内のファイルリストをEXCELで出力するソフト"
            skills={['js', 'electron']}
          />
        </Box>
        <Box display={{ md: 'flex' }}>
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/hareruya-bot"
            imageUrl={hareruya}
            imageAlt="Rear view of modern home with pool"
            title="晴れる屋買取価格調査LINE Bot"
            explanation="スクレイピングを用いて、晴れる屋サイトからカードの買取価格を教えてくれるLINE Bot"
            skills={['js']}
          />
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/hareruya-bot"
            imageUrl={hareruya}
            imageAlt="Rear view of modern home with pool"
            title="晴れる屋買取価格調査LINE Bot"
            explanation="スクレイピングを用いて、晴れる屋サイトからカードの買取価格を教えてくれるLINE Bot"
            skills={['js']}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Work;
