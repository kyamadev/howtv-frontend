"use client";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
  Text,
  VStack,
  Spinner,
  Badge,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";
import { useRouter } from "next/navigation";

interface Choice {
  id: number;
  text: string;
  questionType: string;
}

interface RoadmapProps {
  jobId: string;
}

export default function Roadmap({ jobId }: RoadmapProps) {
  // 質問リストを質問タイプと関連付ける
  const questions: Choice[] = [
    { id: 1, text: "必要なスキルは？", questionType: "skills" },
    { id: 2, text: "習得の方法は？", questionType: "learning" },
    { id: 3, text: "キャリアパスについて", questionType: "career" },
  ];

  const router = useRouter();
  const [selectedQuestion, setSelectedQuestion] = useState<Choice | null>(null);
  const [showQuestions, setShowQuestions] = useState<boolean>(true);

  // ロードマップ取得クエリ
  const {
    data: roadmapData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["roadmap", jobId, selectedQuestion?.questionType],
    queryFn: () => apiClient.generateRoadmap(jobId, selectedQuestion?.questionType),
    enabled: !!jobId && !!selectedQuestion, // 質問選択時のみ実行
  });

  const handleQuestionClick = async (question: Choice) => {
    setSelectedQuestion(question);
    setShowQuestions(false);

    try {
      await refetch();
      // レスポンスが返ってきたら再び質問リストを表示
      setShowQuestions(true);
    } catch (err) {
      console.error("ロードマップ取得エラー:", err);
      setShowQuestions(true);
    }
  };

  return (
    <Box
      p={4}
      border="1px solid"
      borderColor="gray.200"
      borderRadius="md"
      bg="white"
    >
      <Heading as="h3" size="md" mb={4}>
        キャリアロードマップ
      </Heading>

      {/* 回答エリア */}
      <Box
        p={3}
        bg="white"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.200"
        mb={4}
        minHeight="200px"
        maxHeight="400px"
        overflowY="auto"
      >
        {isLoading ? (
          <Flex align="center" justify="center" height="100%">
            <Spinner size="sm" mr={2} />
            <Text>ロードマップを生成中...</Text>
          </Flex>
        ) : error ? (
          <Text color="red.500">
            エラーが発生しました: {(error as Error).message}
          </Text>
        ) : roadmapData ? (
          <Box>
            <Flex alignItems="center" mb={2}>
              <Text fontWeight="bold" mr={2}>
                {roadmapData.job_title}
              </Text>
              {selectedQuestion && (
                <Badge colorScheme="blue" borderRadius="full">
                  {selectedQuestion.text}
                </Badge>
              )}
            </Flex>
            <Text fontSize="sm" color="gray.600" mb={3}>
              勤務地: {roadmapData.location}
            </Text>
            <Box
              whiteSpace="pre-line"
              fontSize="sm"
              sx={{
                "h1, h2, h3": {
                  fontWeight: "bold",
                  marginTop: "1rem",
                  marginBottom: "0.5rem",
                },
                "ul, ol": {
                  paddingLeft: "1.5rem",
                  marginBottom: "1rem",
                },
              }}
            >
              {roadmapData.roadmap}
            </Box>
          </Box>
        ) : (
          <Text>
            質問を選択すると、この求人に関連するキャリアロードマップが表示されます
          </Text>
        )}
      </Box>

      {/* 質問リスト（showQuestions が true の場合のみ表示） */}
      {showQuestions && (
        <VStack gap={3} align="stretch">
          {questions.map((question) => (
            <Button
              key={question.id}
              onClick={() => handleQuestionClick(question)}
              colorScheme={selectedQuestion?.id === question.id ? "red" : "gray"}
              variant={selectedQuestion?.id === question.id ? "solid" : "outline"}
              isDisabled={isLoading}
            >
              {question.text}
            </Button>
          ))}
          <Button
            colorScheme="red"
            onClick={() => router.push(`/${jobId}/detail`)}
          >
            詳細を見る
          </Button>
        </VStack>
      )}
    </Box>
  );
}
