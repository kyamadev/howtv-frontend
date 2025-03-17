"use client";
import React from "react";
import { Box, Heading, Text, Stack, Button, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { apiClient, Company } from "@/lib/api";

interface CompanyDetailProps {
  company?: Company;
  companyId?: number;
}

export default function CompanyDetail({ company, companyId }: CompanyDetailProps) {
  // 会社情報がプロップスで渡されていない場合のみAPIから取得
  const { data: fetchedCompany, isLoading, error } = useQuery({
    queryKey: ["company", companyId],
    queryFn: () => apiClient.getCompany(companyId as number),
    enabled: !company && !!companyId, // companyが渡されている場合はAPIを呼ばない
  });

  // 表示する会社情報（プロップスまたはAPI取得のどちらか）
  const displayCompany = company || fetchedCompany;

  if (!company && isLoading) {
    return (
      <Box p={4} textAlign="center">
        <Spinner size="md" thickness="3px" color="blue.500" />
      </Box>
    );
  }

  if (!company && error) {
    return (
      <Box p={4}>
        <Alert status="error">
          <AlertIcon />
          会社情報の取得に失敗しました: {(error as Error).message}
        </Alert>
      </Box>
    );
  }

  if (!displayCompany) {
    return (
      <Box p={4}>
        <Alert status="warning">
          <AlertIcon />
          会社情報が見つかりませんでした
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={4} borderTop="1px solid" borderColor="gray.200" mt={4} pt={4}>
      <Heading as="h3" size="md" mb={4}>
        会社詳細
      </Heading>
      <Stack gap={3}>
        <Text fontSize="md" fontWeight="bold">
          {displayCompany.name}
        </Text>
        <Text fontSize="sm">
          <strong>会社概要:</strong> {displayCompany.description || "詳細情報はありません"}
        </Text>
        <Text fontSize="sm">
          <strong>設立:</strong> {displayCompany.founded_year || "未登録"}
        </Text>
        <Text fontSize="sm">
          <strong>従業員数:</strong> {displayCompany.employee_count || "未登録"}
        </Text>
        <Text fontSize="sm">
          <strong>業種:</strong> {displayCompany.industry || "未登録"}
        </Text>
        <Text fontSize="sm">
          <strong>住所:</strong> {displayCompany.address || "未登録"}
        </Text>
        <Text fontSize="sm">
          <strong>Webサイト:</strong> {" "}
          {displayCompany.website ? (
            <a href={displayCompany.website} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
              {displayCompany.website}
            </a>
          ) : (
            "未登録"
          )}
        </Text>
      </Stack>
      <Box mt={6} textAlign="center">
        <Button colorScheme="blue" size="lg">
          応募する
        </Button>
      </Box>
    </Box>
  );
}