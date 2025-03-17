"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Badge,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { apiClient, JobPosting } from "@/lib/api";

const JobCard = ({ job }: { job: JobPosting }) => {
  const router = useRouter();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg="white"
      boxShadow="sm"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "md",
      }}
    >
      <Heading as="h3" size="md" mb={2} noOfLines={2}>
        {job.title}
      </Heading>
      
      <Text fontSize="sm" color="gray.500" mb={3}>
        {job.location} • {job.employment_type}
      </Text>
      
      <Text noOfLines={3} mb={4} fontSize="sm">
        {job.description}
      </Text>
      
      <Flex gap={2} mb={4} flexWrap="wrap">
        {job.positions.map((position) => (
          <Badge key={position.id} colorScheme="purple" borderRadius="full" px={2}>
            {position.name}
          </Badge>
        ))}
      </Flex>
      
      <Text fontSize="sm" fontWeight="bold" mb={4}>
        {job.salary_range}
      </Text>
      
      <Button
        colorScheme="blue"
        size="sm"
        width="100%"
        onClick={() => router.push(`/${job.uuid}`)}
      >
        詳細を見る
      </Button>
    </Box>
  );
};

export default function JobList() {
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => apiClient.getAllJobs(),
  });

  if (isLoading) {
    return (
      <Center py={20}>
        <Spinner size="xl" color="#7B66FF" thickness="4px" />
      </Center>
    );
  }

  if (error) {
    return (
      <Box py={10} px={4} textAlign="center">
        <Text color="red.500">エラーが発生しました: {(error as Error).message}</Text>
      </Box>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <Box py={10} px={4} textAlign="center">
        <Text>求人情報が見つかりませんでした</Text>
      </Box>
    );
  }

  return (
    <Box py={10} px={4}>
      <Box textAlign="center" mb={10}>
        <Text
          fontSize="sm"
          fontWeight="500"
          color="#7B66FF"
          textTransform="uppercase"
          letterSpacing="wider"
          mb={2}
        >
          求人情報
        </Text>
        <Heading as="h2" size="xl" mb={4}>
          最新の求人一覧
        </Heading>
        <Text fontSize="md" color="gray.600" maxW="xl" mx="auto">
          あなたのスキルに合った最適な仕事を見つけましょう
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} maxW="1200px" mx="auto">
        {jobs.map((job) => (
          <JobCard key={job.uuid} job={job} />
        ))}
      </SimpleGrid>
    </Box>
  );
}