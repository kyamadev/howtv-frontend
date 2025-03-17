import React from "react";
import { Box, Heading, Text, Stack, Button } from "@chakra-ui/react";

export default function CompanyDetail() {
  return (
    <Box p={4}>
      <Heading as="h1" size="lg" mb={4}>
        会社詳細
      </Heading>
      <Stack gap={3}>
        <Text fontSize="md" color="gray.600">
          会社名: 〇〇株式会社
        </Text>
        <Text fontSize="sm">
          会社概要:
          〇〇株式会社は、革新的なテクノロジーソリューションを提供する企業です。数々の実績と豊富な専門知識でお客様のビジネスをサポートします。
        </Text>
        <Text fontSize="sm">設立: 2000年</Text>
        <Text fontSize="sm">従業員数: 100名</Text>
      </Stack>
      <Box mt={6} textAlign="center">
        <Button colorScheme="blue" size="lg">
          応募する
        </Button>
      </Box>
    </Box>
  );
}
