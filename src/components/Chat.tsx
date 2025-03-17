import React from "react";
import { Box, Heading, Input, Button, Flex } from "@chakra-ui/react";

export default function Chat() {
  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        チャット機能
      </Heading>
      <Box mb={4}>{/* チャットのUIコンポーネント等をここに実装 */}</Box>
      <Flex as="form" mt={4}>
        <Input
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
