"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Badge,
  Button,
  Spinner,
  Center,
  Container,
  Divider,
  HStack,
  Tag,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaArrowLeft, FaFilter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { apiClient, JobPosting } from "@/lib/api";
import { Header } from "@/components/Header";

export default function SearchResults() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredJobs, setFilteredJobs] = useState<JobPosting[]>([]);

  // 検索パラメータを取得
  const keyword = searchParams.get("keyword") || "";
  const positionIds = searchParams.get("positions")?.split(",") || [];
  const locations = searchParams.get("locations")?.split(",") || [];
  const employmentType = searchParams.get("type") || "";

  // すべての求人を取得
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: apiClient.getAllJobs,
  });

  // 検索条件に基づいて求人をフィルタリング
  useEffect(() => {
    if (!jobs) return;

    let results = [...jobs];

    // キーワード検索
    if (keyword) {
      const keywordLower = keyword.toLowerCase();
      results = results.filter(
        job =>
          job.title.toLowerCase().includes(keywordLower) ||
          job.description.toLowerCase().includes(keywordLower) ||
          job.requirements.toLowerCase().includes(keywordLower)
      );
    }

    // 職種でフィルタリング
    if (positionIds.length > 0) {
      results = results.filter(job =>
        job.positions.some(pos => positionIds.includes(pos.id.toString()))
      );
    }

    // 勤務地でフィルタリング
    if (locations.length > 0) {
      results = results.filter(job => locations.includes(job.location));
    }

    // 雇用形態でフィルタリング
    if (employmentType) {
      results = results.filter(job => job.employment_type === employmentType);
    }

    setFilteredJobs(results);
  }, [jobs, keyword, positionIds, locations, employmentType]);

  if (isLoading) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="#7B66FF" thickness="4px" />
      </Center>
    );
  }

  if (error) {
    return (
      <Box py={10} px={4} textAlign="center">
        <Text color="red.500">エラーが発生しました: {(error as Error).message}</Text>
      </Box>
    );
  }

  // 検索条件のタグを表示するための処理
  const renderSearchTags = () => {
    const tags = [];
    
    if (keyword) {
      tags.push(`キーワード: ${keyword}`);
    }
    
    if (employmentType) {
      tags.push(`雇用形態: ${employmentType}`);
    }
    
    return tags;
  };

  const searchTags = renderSearchTags();

  return (
    <Container maxW="1200px" py={8}>
      <Header />
      
      <Flex align="center" mb={6}>
        <IconButton
          aria-label="戻る"
          icon={<Icon as={FaArrowLeft} />}
          mr={4}
          onClick={() => router.push("/")}
          variant="ghost"
        />
        <Heading as="h1" size="lg">
          検索結果
        </Heading>
      </Flex>

      {/* 検索条件の表示 */}
      {searchTags.length > 0 && (
        <HStack mb={6} flexWrap="wrap">
          <Text fontWeight="bold" mr={2}>
            検索条件:
          </Text>
          {searchTags.map((tag, index) => (
            <Tag key={index} colorScheme="blue" m={1}>
              {tag}
            </Tag>
          ))}
        </HStack>
      )}

      <Divider mb={6} />

      {/* 結果件数 */}
      <Text mb={6}>
        {filteredJobs.length} 件の求人が見つかりました
      </Text>

      {/* 求人一覧 */}
      {filteredJobs.length === 0 ? (
        <Box textAlign="center" py={10}>
          <Text>該当する求人が見つかりませんでした。検索条件を変更してお試しください。</Text>
          <Button mt={4} onClick={() => router.push("/")} colorScheme="blue">
            トップページに戻る
          </Button>
        </Box>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {filteredJobs.map(job => (
            <Box
              key={job.uuid}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={5}
              bg="white"
              boxShadow="sm"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "md",
              }}
            >
              <Heading as="h3" size="md" mb={2} noOfLines={2}>
                {job.title}
              </Heading>
              
              <Text fontSize="sm" color="gray.500" mb={3}>
                {job.location} • {job.employment_type}
              </Text>
              
              <Text noOfLines={3} mb={4} fontSize="sm">
                {job.description}
              </Text>
              
              <Flex gap={2} mb={4} flexWrap="wrap">
                {job.positions.map((position) => (
                  <Badge key={position.id} colorScheme="purple" borderRadius="full" px={2}>
                    {position.name}
                  </Badge>
                ))}
              </Flex>
              
              <Text fontSize="sm" fontWeight="bold" mb={4}>
                {job.salary_range}
              </Text>
              
              <Button
                colorScheme="blue"
                size="sm"
                width="100%"
                onClick={() => router.push(`/${job.uuid}`)}
              >
                詳細を見る
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}