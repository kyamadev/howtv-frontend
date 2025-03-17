"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const companies = [
  {
    id: 1,
    name: "株式会社〇〇",
    description: "革新的なテクノロジーソリューションを提供する企業です。",
  },
  {
    id: 2,
    name: "株式会社△△",
    description: "デザインと開発で業界をリードする企業です。",
  },
  {
    id: 3,
    name: "株式会社□□",
    description: "マーケティング戦略に強みを持つ企業です。",
  },
];

export default function Result() {
  const router = useRouter();
  let id = 1;

  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" mb={6}>
        検索結果
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {companies.map((company) => (
          <Box
            key={company.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
          >
            <Heading as="h2" size="md" mb={2}>
              {company.name}
            </Heading>
            <Text fontSize="sm" color="gray.600" mb={4}>
              {company.description}
            </Text>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => router.push(`/${id}`)}
            >
              詳細を見る
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}
