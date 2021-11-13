import { Box } from '@chakra-ui/layout';
import { Image, Badge, Link } from '@chakra-ui/react';
import React from 'react';
import hareruyaBotImage from '../../images/hareruya-bot-image.png';

const HareruyaBot: React.FC = () => {
  const property = {
    githubUrl: 'https://github.com/kozimatakesi/hareruya-bot',
    imageUrl: hareruyaBotImage,
    imageAlt: 'Rear view of modern home with pool',
    title: '晴れる屋買取価格調査LINE Bot',
    explanation:
      'スクレイピングを用いて、晴れる屋サイトからカードの買取価格を教えてくれるLINE Bot',
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="30"
    >
      <Link href={property.githubUrl} isExternal>
        <Image src={property.imageUrl} alt={property.imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              js
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="2xl"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>

          <Box fontSize="sm">{property.explanation}</Box>
        </Box>
      </Link>
    </Box>
  );
};

export default HareruyaBot;
