"use client";
import React from "react";
import { Box, SimpleGrid, Flex, Text, Icon, Spinner, Center } from "@chakra-ui/react";
import {
  FaBriefcase,
  FaCode,
  FaChartBar,
  FaPalette,
  FaBullhorn,
  FaBookOpen,
  FaServer,
  FaMobileAlt,
} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { apiClient, Position } from "@/lib/api";

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
        cursor: "pointer",
      }}
    >
      <Box p={4} borderRadius="full" bg="#F3F1FF" mb={4}>
        <Icon as={icon} boxSize={8} color="#7B66FF" />
      </Box>
      <Text fontWeight="600" fontSize="lg" mb={2}>
        {title}
      </Text>
      <Text color="gray.500" fontSize="sm">
        {count} jobs available
      </Text>
    </Flex>
  );
};

// アイコンとカテゴリのマッピング
const positionIconMap: Record<string, React.ElementType> = {
  "フロントエンドエンジニア": FaCode,
  "バックエンドエンジニア": FaServer,
  "フルスタックエンジニア": FaCode,
  "モバイルエンジニア": FaMobileAlt,
  "インフラエンジニア": FaServer,
  "データエンジニア": FaChartBar,
  "AI/ML エンジニア": FaChartBar,
  "DevOpsエンジニア": FaServer,
  "セキュリティエンジニア": FaServer,
  "QAエンジニア": FaBookOpen,
  "Marketing": FaBullhorn,
  "Development": FaCode,
  "Data Science": FaChartBar,
  "Design": FaPalette,
  "Sales": FaBullhorn,
  "Education": FaBookOpen,
  "IT & Networking": FaServer,
  "Mobile App": FaMobileAlt,
};

export default function Category() {
  // APIから職種データを取得
  const { data: positions, isLoading, error } = useQuery({
    queryKey: ["positions"],
    queryFn: apiClient.getAllPositions,
  });

  // 全ての求人を取得して各ポジションの求人数をカウント
  const { data: jobs } = useQuery({
    queryKey: ["jobs"],
    queryFn: apiClient.getAllJobs,
  });

  // ポジションごとの求人数をカウント
  const getPositionCount = (positionId: number) => {
    if (!jobs) return 0;
    return jobs.filter(job => 
      job.positions.some(pos => pos.id === positionId)
    ).length;
  };

  // エラー表示
  if (error) {
    return (
      <Box py={10} px={4} textAlign="center">
        <Text color="red.500">エラーが発生しました: {(error as Error).message}</Text>
      </Box>
    );
  }

  // ローディング表示
  if (isLoading) {
    return (
      <Box py={10} px={4} textAlign="center">
        <Center>
          <Spinner size="xl" color="#7B66FF" thickness="4px" />
        </Center>
      </Box>
    );
  }

  // データがない場合のフォールバック
  if (!positions || positions.length === 0) {
    const fallbackCategories = [
      { icon: FaBriefcase, title: "Marketing", count: 258 },
      { icon: FaCode, title: "Development", count: 632 },
      { icon: FaChartBar, title: "Data Science", count: 324 },
      { icon: FaPalette, title: "Design", count: 158 },
      { icon: FaBullhorn, title: "Sales", count: 194 },
      { icon: FaBookOpen, title: "Education", count: 105 },
      { icon: FaServer, title: "IT & Networking", count: 267 },
      { icon: FaMobileAlt, title: "Mobile App", count: 186 },
    ];

    return renderCategorySection(fallbackCategories);
  }

  // ポジションデータをカテゴリアイテムに変換
  const categories = positions.map((position: Position) => ({
    icon: positionIconMap[position.name] || FaBriefcase,
    title: position.name,
    count: getPositionCount(position.id)
  }));

  return renderCategorySection(categories);
}

// カテゴリセクションのレンダリング
function renderCategorySection(categories: { icon: React.ElementType; title: string; count: number }[]) {
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
        <Text fontSize="3xl" fontWeight="700" mb={4}>
          人気のカテゴリを探す
        </Text>
        <Text fontSize="md" color="gray.600" maxW="xl" mx="auto">
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