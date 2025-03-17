"use client";
import React from "react";
import { Flex, Box, Heading, Spinner, Text, Center } from "@chakra-ui/react";
import CompanyDetail from "@/components/CompanyDetail";
import Roadmap from "@/components/Roadmap";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";

const JobDetailPage: React.FC = () => {
  const params = useParams();
  const jobUuid = params.uuid as string;

  // 求人情報を取得
  const { 
    data: job, 
    isLoading: isJobLoading, 
    error: jobError 
  } = useQuery({
    queryKey: ["job", jobUuid],
    queryFn: () => apiClient.getJob(jobUuid, true), // includeCompany=true を指定
    enabled: !!jobUuid,
  });

  // ローディング表示
  if (isJobLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="#7B66FF" thickness="4px" />
      </Center>
    );
  }

  // エラー表示
  if (jobError) {
    return (
      <Center h="100vh">
        <Text color="red.500">エラーが発生しました: {(jobError as Error).message}</Text>
      </Center>
    );
  }

  // データがない場合
  if (!job) {
    return (
      <Center h="100vh">
        <Text>求人情報が見つかりませんでした</Text>
      </Center>
    );
  }

  return (
    <Flex height="100vh">
      <Box flex="1" borderRight="1px solid #ccc" p="1rem">
        <Heading as="h2" size="md" mb="4">
          キャリアロードマップ
        </Heading>
        <Box>
          <Roadmap jobId={jobUuid} />
        </Box>
      </Box>
      <Box flex="2" p="1rem">
        <Heading as="h2" size="md" mb="4">
          求人詳細
        </Heading>
        <Box mb="6">
          <Heading as="h1" size="lg" mb="2">
            {job.title}
          </Heading>
          <Text fontSize="md" mb="4">
            <strong>勤務地:</strong> {job.location} | <strong>雇用形態:</strong> {job.employment_type}
          </Text>
          <Text fontSize="md" mb="4">
            <strong>給与:</strong> {job.salary_range}
          </Text>
          <Text fontWeight="bold" mb="2">職種:</Text>
          <Text mb="4">
            {job.positions.map(pos => pos.name).join(', ')}
          </Text>
          <Text fontWeight="bold" mb="2">職務内容:</Text>
          <Text mb="4" whiteSpace="pre-line">
            {job.description}
          </Text>
          <Text fontWeight="bold" mb="2">応募要件:</Text>
          <Text mb="4" whiteSpace="pre-line">
            {job.requirements}
          </Text>
        </Box>
        <CompanyDetail company={job.company} />
      </Box>
    </Flex>
  );
};

export default JobDetailPage;