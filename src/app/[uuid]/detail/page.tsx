"use client";
import React, { useState } from "react";
import { Box, Input, Button, Heading, Flex, Text } from "@chakra-ui/react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const SkillsPage = () => {
  // テスト用の会話データ：Bot の質問を２回用意
  const botQuestions = [
    "What are your greatest strengths?",
    "Can you describe a challenging situation you've faced?",
  ];

  // 初回は最初の質問を表示
  const [conversationIndex, setConversationIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([
    { text: botQuestions[0], sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // ユーザー回答を追加
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // もしまだ残っている質問があれば次の質問を自動追加
    if (conversationIndex < botQuestions.length - 1) {
      const nextIndex = conversationIndex + 1;
      setConversationIndex(nextIndex);
      setTimeout(() => {
        const botMessage: Message = {
          text: botQuestions[nextIndex],
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 500);
    }
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        英語面接の練習
      </Heading>
      <Box
        border="1px solid"
        borderColor="gray.200"
        p={4}
        borderRadius="md"
        height="300px"
        overflowY="auto"
        mb={4}
      >
        {messages.map((msg, idx) => (
          <Flex
            key={idx}
            justify={msg.sender === "user" ? "flex-end" : "flex-start"}
            mb={2}
          >
            <Box
              bg={msg.sender === "user" ? "red.400" : "gray.100"}
              color={msg.sender === "user" ? "white" : "black"}
              p={2}
              borderRadius="md"
              maxWidth="70%"
            >
              <Text>{msg.text}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <form onSubmit={handleSubmit}>
        <Flex>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="メッセージを入力..."
            mr={2}
          />
          <Button colorScheme="red" type="submit">
            送信
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default SkillsPage;
