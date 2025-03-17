import React from 'react';
import { Box, SimpleGrid, Flex, Text, Icon } from '@chakra-ui/react';
import { FaBriefcase, FaCode, FaChartBar, FaPalette, FaBullhorn, FaBookOpen, FaServer, FaMobileAlt } from 'react-icons/fa';

type CategoryItemProps = {
  icon: React.ElementType;
  title: string;
  count: number;
};

const CategoryItem = ({ icon, title, count }: CategoryItemProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="white"
      borderRadius="md"
      boxShadow="sm"
      p={6}
      height="100%"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "md",
        cursor: "pointer"
      }}
    >
      <Box 
        p={4}
        borderRadius="full"
        bg="#F3F1FF"
        mb={4}
      >
        <Icon as={icon} boxSize={8} color="#7B66FF" />
      </Box>
      <Text fontWeight="600" fontSize="lg" mb={2}>{title}</Text>
      <Text color="gray.500" fontSize="sm">{count} jobs available</Text>
    </Flex>
  );
};

export default function Category() {
  const categories = [
    { icon: FaBriefcase, title: "Marketing", count: 258 },
    { icon: FaCode, title: "Development", count: 632 },
    { icon: FaChartBar, title: "Data Science", count: 324 },
    { icon: FaPalette, title: "Design", count: 158 },
    { icon: FaBullhorn, title: "Sales", count: 194 },
    { icon: FaBookOpen, title: "Education", count: 105 },
    { icon: FaServer, title: "IT & Networking", count: 267 },
    { icon: FaMobileAlt, title: "Mobile App", count: 186 },
  ];
  
  return (
    <Box py={10} px={4}>
      <Box textAlign="center" mb={10}>
        <Text 
          fontSize="sm" 
          fontWeight="500" 
          color="#7B66FF" 
          textTransform="uppercase"
          letterSpacing="wider"
          mb={2}
        >
          カテゴリ
        </Text>
        <Text 
          fontSize="3xl" 
          fontWeight="700" 
          mb={4}
        >
          人気のカテゴリを探す
        </Text>
        <Text 
          fontSize="md" 
          color="gray.600" 
          maxW="xl" 
          mx="auto"
        >
          様々な分野の求人からあなたにぴったりの仕事を見つけましょう
        </Text>
      </Box>
      
      <SimpleGrid 
        columns={{ base: 1, sm: 2, md: 4 }} 
        spacing={8} 
        mx="auto"
        maxW="1200px"
      >
        {categories.map((category, index) => (
          <CategoryItem 
            key={index} 
            icon={category.icon} 
            title={category.title} 
            count={category.count} 
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}