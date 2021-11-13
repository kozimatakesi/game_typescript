import { Box, Container, Text } from '@chakra-ui/layout';
import React from 'react';
import WorksChildren from './Works/WorksChildren';
import hareruya from '../images/hareruya-bot-image.png';
import electron from '../images/electron-image.png';
import portfolio from '../images/portfolio-image.png';
import mosya from '../images/mosya-image.png';

const Work: React.FC = () => {
  return (
    <Box h="100%" w="100%" color="white">
      <Container maxW={{ md: 'container.md' }}>
        <Text fontSize="5xl" color="blue.300">
          Works
        </Text>
        <Box display={{ md: 'flex' }}>
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/game_typescript"
            imageUrl={portfolio}
            imageAlt="Rear view of modern home with pool"
            title="ポートフォリオサイト"
            explanation="TypescriptとReactを用いたポートフォリオサイトの作成"
            skills={['typescript', 'react']}
          />
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/output_excel"
            imageUrl={electron}
            imageAlt="Rear view of modern home with pool"
            title="ファイルリスト作成ソフト"
            explanation="Electronを用いて、指定ディレクトリ内のファイルリストをEXCELで出力するソフト"
            skills={['javascript', 'electron', 'react']}
          />
        </Box>
        <Box display={{ md: 'flex' }}>
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/hareruya-bot"
            imageUrl={hareruya}
            imageAlt="Rear view of modern home with pool"
            title="晴れる屋買取価格調査LINE Bot"
            explanation="スクレイピングを用いて、晴れる屋サイトからカードの買取価格を教えてくれるLINE Bot"
            skills={['javascript']}
          />
          <WorksChildren
            githubUrl="https://github.com/kozimatakesi/html.github.io"
            imageUrl={mosya}
            imageAlt="Rear view of modern home with pool"
            title="サイト模写練習"
            explanation="HTML,CSS,javascriptの基礎を学ぶためのサイト模写"
            skills={['html', 'css', 'javascript']}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Work;
