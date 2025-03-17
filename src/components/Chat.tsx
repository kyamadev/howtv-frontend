"use client";
import React, { useState } from "react";
import { Box, Heading, Input, Button, Flex, Text } from "@chakra-ui/react";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // ユーザーのメッセージを追加（右寄せ）
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 擬似的なボットのレスポンスを追加（左寄せ）
    setTimeout(() => {
      const botMessage: Message = {
        text: `ボットのレスポンス: ${userMessage.text}`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        チャット機能
      </Heading>
      <Box
        height="300px"
        overflowY="auto"
        bg="gray.50"
        p={4}
        borderRadius="md"
        mb={4}
      >
        {messages.map((message, index) => (
          <Flex
            key={index}
            justify={message.sender === "user" ? "flex-end" : "flex-start"}
            mb={2}
          >
            <Box
              bg={message.sender === "user" ? "blue.100" : "green.100"}
              p={2}
              borderRadius="md"
              maxW="70%"
            >
              <Text>{message.text}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
      <Flex as="form" mt={4} onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="メッセージを入力..."
          mr={2}
          bg="white"
          borderColor="gray.300"
          _focus={{ borderColor: "blue.300" }}
        />
        <Button colorScheme="blue" type="submit">
          送信
        </Button>
      </Flex>
    </Box>
  );
}
