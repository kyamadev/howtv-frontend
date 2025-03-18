"use client";
import React, { useState } from "react";
import { Box, Input, Button, Heading, Flex, Text } from "@chakra-ui/react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const SkillsPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // ユーザーからのメッセージ（右寄せ）
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 擬似的なボットからのレスポンス（0.5秒後に左寄せ）
    setTimeout(() => {
      const botMessage: Message = {
        text: `Botのレスポンス: ${userMessage.text}`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <Box p={4}>
      <Heading as="h2" mb={4}>
        ロードマップの詳細
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
