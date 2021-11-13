import { Box } from '@chakra-ui/layout';
import { Image, Badge, Link } from '@chakra-ui/react';
import React from 'react';

type Works = {
  githubUrl: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  explanation: string;
  skills: string[];
};

const WorksChildren: React.FC<Works> = ({
  githubUrl,
  imageUrl,
  imageAlt,
  title,
  explanation,
  skills,
}) => {
  return (
    <Box
      mx={{ base: 'auto', md: '1' }}
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="30"
    >
      <Link href={githubUrl} isExternal>
        <Image src={imageUrl} alt={imageAlt} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {skills.map((skill) => {
              return (
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {skill}
                </Badge>
              );
            })}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            fontSize="2xl"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {title}
          </Box>

          <Box fontSize="sm">{explanation}</Box>
        </Box>
      </Link>
    </Box>
  );
};

export default WorksChildren;
