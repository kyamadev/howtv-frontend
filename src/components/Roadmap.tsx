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
} from "@chakra-ui/react";

interface Choice {
  id: number;
  text: string;
}

export default function Roadmap() {
  const questions: Choice[] = [
    { id: 1, text: "最新のテクノロジートレンドは？" },
    { id: 2, text: "業界の動向について" },
    { id: 3, text: "キャリアアップの方法は？" },
  ];

  const [selectedQuestion, setSelectedQuestion] = useState<Choice | null>(null);
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showQuestions, setShowQuestions] = useState<boolean>(true);

  const handleQuestionClick = (question: Choice) => {
    setSelectedQuestion(question);
    setAnswer("");
    setShowQuestions(false);
    setLoading(true);

    // 疑似的なネットワークリクエストをシミュレーション
    setTimeout(() => {
      const simulatedAnswer = `回答: ${question.text} に関する情報をこちらに表示します。`;
      setAnswer(simulatedAnswer);
      setLoading(false);
      // レスポンスが返ってきたら再び質問リストを表示
      setShowQuestions(true);
    }, 800);
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
        関連する質問
      </Heading>

      {/* 回答エリア */}
      <Box
        p={3}
        bg="white"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.200"
        mb={4}
      >
        {loading ? (
          <Flex align="center">
            <Spinner size="sm" mr={2} />
            <Text>回答中…</Text>
          </Flex>
        ) : (
          <Text>{answer || "質問を選択してください"}</Text>
        )}
      </Box>

      {/* 質問リスト（showQuestions が true の場合のみ表示） */}
      {showQuestions && (
        <VStack gap={3} align="stretch">
          {questions.map((question) => (
            <Button
              key={question.id}
              onClick={() => handleQuestionClick(question)}
              colorScheme={
                selectedQuestion?.id === question.id ? "red" : "gray"
              }
              variant={
                selectedQuestion?.id === question.id ? "solid" : "outline"
              }
            >
              {question.text}
            </Button>
          ))}
        </VStack>
      )}
    </Box>
  );
}
