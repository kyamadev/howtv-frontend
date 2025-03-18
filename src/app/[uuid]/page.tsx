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
    error: jobError,
  } = useQuery({
    queryKey: ["job", jobUuid],
    queryFn: () => apiClient.getJob(jobUuid, true),
    enabled: !!jobUuid,
  });

  if (isJobLoading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="red.400" thickness="4px" />
      </Center>
    );
  }

  if (jobError) {
    return (
      <Center h="100vh">
        <Text color="red.500">
          エラーが発生しました: {(jobError as Error).message}
        </Text>
      </Center>
    );
  }

  if (!job) {
    return (
      <Center h="100vh">
        <Text>求人情報が見つかりませんでした</Text>
      </Center>
    );
  }

  return (
    <Flex direction="column" minHeight="100vh" bg="gray.50">
      {/* メインコンテンツ */}
      <Flex flex="1" px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
        <Box
          flex="1"
          pr={{ base: 0, md: 4 }}
          borderRight={{ base: "none", md: "1px solid" }}
          borderColor="gray.200"
          mb={{ base: 6, md: 0 }}
        >
          <Roadmap jobId={jobUuid} />
        </Box>
        <Box
          flex="2"
          pl={{ base: 0, md: 4 }}
          bg="white"
          borderRadius="lg"
          p={6}
          boxShadow="md"
        >
          <Heading as="h2" size="lg" mb={4} color="red.500">
            求人詳細
          </Heading>
          <Box mb={6}>
            <Heading as="h1" size="xl" mb={2} color="gray.800">
              {job.title}
            </Heading>
            <Text fontSize="md" mb={4} color="gray.600">
              <strong>勤務地:</strong> {job.location} |{" "}
              <strong>雇用形態:</strong> {job.employment_type}
            </Text>
            <Text fontSize="md" mb={4} color="gray.600">
              <strong>給与:</strong> {job.salary_range}
            </Text>
            <Text fontWeight="bold" mb={2} color="gray.800">
              職種:
            </Text>
            <Text mb={4} color="gray.600">
              {job.positions.map((pos) => pos.name).join(", ")}
            </Text>
            <Text fontWeight="bold" mb={2} color="gray.800">
              職務内容:
            </Text>
            <Text mb={4} whiteSpace="pre-line" color="gray.600">
              {job.description}
            </Text>
            <Text fontWeight="bold" mb={2} color="gray.800">
              応募要件:
            </Text>
            <Text mb={4} whiteSpace="pre-line" color="gray.600">
              {job.requirements}
            </Text>
            <CompanyDetail company={job.company} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default JobDetailPage;
