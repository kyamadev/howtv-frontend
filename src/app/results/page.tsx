"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Badge,
  Flex,
  Icon,
  Input,
  InputGroup,
  Button,
  Card,
  CardBody,
  Avatar,
  Tag,
} from '@chakra-ui/react';
import { FaSearch, FaBuilding, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock search results with more detailed information
  const searchResults = [
    { 
      id: 1, 
      title: 'Software Engineer', 
      company: 'Google',
      location: '東京都・渋谷区',
      salary: '800万円 〜 1,200万円',
      employmentType: '正社員',
      postedDate: '3日前',
      description: 'Googleのエンジニアリングチームに参加し、世界中の何十億人ものユーザーに影響を与える製品の開発に取り組みます。最先端技術を駆使した開発環境で、革新的なソリューションの設計と実装を担当していただきます。',
      skills: ['JavaScript', 'React', 'Node.js', 'Cloud', 'Agile'],
      logo: 'https://placehold.co/60x60?text=G'
    },
    { 
      id: 2, 
      title: 'Webフロントエンドエンジニア', 
      company: 'Facebook',
      location: '東京都・港区',
      salary: '600万円 〜 900万円',
      employmentType: '正社員',
      postedDate: '1週間前',
      description: 'ユーザー体験を向上させるWebフロントエンド開発に取り組んでいただきます。モダンなJavaScriptフレームワークを活用した高パフォーマンスなUIの構築とメンテナンスを行います。',
      skills: ['React', 'TypeScript', 'CSS', 'UI/UX', 'Redux'],
      logo: 'https://placehold.co/60x60?text=F'
    },
    { 
      id: 3, 
      title: 'データサイエンティスト', 
      company: 'Amazon',
      location: '東京都・目黒区',
      salary: '700万円 〜 1,000万円',
      employmentType: '正社員',
      postedDate: '2週間前',
      description: '大規模なデータセットを分析し、ビジネス上の重要な意思決定をサポートするインサイトを導き出します。機械学習モデルの開発と導入を通じて、顧客体験の向上に貢献していただきます。',
      skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization', 'Statistics'],
      logo: 'https://placehold.co/60x60?text=A'
    },
    { 
      id: 4, 
      title: 'モバイルアプリエンジニア', 
      company: 'LINE',
      location: '東京都・新宿区',
      salary: '550万円 〜 850万円',
      employmentType: '正社員',
      postedDate: '3週間前',
      description: 'iOSとAndroidプラットフォーム向けのモバイルアプリケーション開発を担当していただきます。ユーザーフレンドリーで高品質なアプリの設計と実装を行います。',
      skills: ['Swift', 'Kotlin', 'iOS', 'Android', 'Git'],
      logo: 'https://placehold.co/60x60?text=L'
    },
  ];

  return (
    <Box bg="gray.50" minHeight="100vh" py={8}>
      <Container maxW="1200px">
        {/* 検索結果のヘッダー */}
        <Box mb={8}>
<Heading size="lg" mb={2} color="#0B2B82">
  "{query}" の検索結果
</Heading>
          <Text color="gray.600">
            {searchResults.length}件の求人が見つかりました
          </Text>
        </Box>
        
        {/* 検索フィルター */}
        <Box mb={8} bg="white" p={5} borderRadius="lg" boxShadow="sm">
          <Flex direction={{ base: "column", md: "row" }} gap={4}>
            <InputGroup flex={1}>
              <Box position="absolute" left="12px" top="50%" transform="translateY(-50%)" zIndex={1} pointerEvents="none">
                <Icon as={FaSearch} color="#FF4500" />
              </Box>
              <Input 
                pl="40px" 
                placeholder="職種、キーワード、スキルなど" 
                defaultValue={query}
                borderRadius="md"
                borderColor="gray.300"
              />
            </InputGroup>
            <InputGroup flex={1}>
              <Box position="absolute" left="12px" top="50%" transform="translateY(-50%)" zIndex={1} pointerEvents="none">
                <Icon as={FaMapMarkerAlt} color="#FF4500" />
              </Box>
              <Input 
                pl="40px" 
                placeholder="勤務地" 
                borderRadius="md"
                borderColor="gray.300"
              />
            </InputGroup>
            <Button 
              colorScheme="red" 
              bg="#FF4500" 
              _hover={{ bg: '#E23E00' }} 
              minWidth="120px"
            >
              検索
            </Button>
          </Flex>
        </Box>
        
        {/* 検索結果のリスト */}
        <VStack spacing={4} align="stretch">
          {searchResults.map((result) => (
            <Card 
              key={result.id} 
              borderRadius="lg" 
              boxShadow="sm"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "md",
                borderColor: "#FF4500",
              }}
              cursor="pointer"
              border="1px solid"
              borderColor="gray.200"
            >
              <CardBody p={6}>
                <Flex gap={5} direction={{ base: "column", sm: "row" }}>
                  {/* 企業ロゴ */}
                  <Avatar 
                    src={result.logo} 
                    size="lg" 
                    bg="gray.100"
                    icon={<Icon as={FaBuilding} fontSize="1.5rem" />}
                  />
                  
                  {/* 求人情報 */}
                  <Box flex={1}>
                    <HStack mb={1}>
                      <Badge colorScheme="red" bg="#FF4500" color="white" fontSize="xs" px={2} borderRadius="full">
                        {result.employmentType}
                      </Badge>
                      <Text fontSize="xs" color="gray.500" display="flex" alignItems="center">
                        <Icon as={FaRegClock} mr={1} fontSize="10px" />
                        {result.postedDate}
                      </Text>
                    </HStack>
                    
                    <Heading as="h2" size="md" mb={2} color="#0B2B82">
                      {result.title}
                    </Heading>
                    
                    <Flex 
                      direction={{ base: "column", md: "row" }} 
                      gap={{ base: 1, md: 6 }}
                      mb={3}
                      color="gray.600"
                      fontSize="sm"
                      flexWrap="wrap"
                    >
                      <Text display="flex" alignItems="center">
                        <Icon as={FaBuilding} mr={2} />
                        {result.company}
                      </Text>
                      <Text display="flex" alignItems="center">
                        <Icon as={FaMapMarkerAlt} mr={2} />
                        {result.location}
                      </Text>
                      <Text fontWeight="bold" color="#FF4500">
                        {result.salary}
                      </Text>
                    </Flex>
                    
<Text truncate color="gray.600" mb={4} fontSize="sm">
  {result.description}
</Text>
                    
                    <Flex gap={2} flexWrap="wrap">
                      {result.skills.map((skill, index) => (
                        <Tag 
                          key={index} 
                          size="sm" 
                          borderRadius="full" 
                          variant="subtle"
                          colorScheme="gray"
                          bg="gray.100"
                        >
                          {skill}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </VStack>
        
        {/* ページネーション（必要に応じて） */}
        <Flex justify="center" mt={8}>
          <HStack>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button 
                key={page}
                variant={page === 1 ? "solid" : "outline"}
                colorScheme={page === 1 ? "red" : "gray"}
                size="sm"
                bg={page === 1 ? "#FF4500" : "white"}
                _hover={{ bg: page === 1 ? "#E23E00" : "gray.100" }}
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" colorScheme="gray" size="sm">
              次へ
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
