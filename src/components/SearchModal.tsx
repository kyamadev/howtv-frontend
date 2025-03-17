"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  CheckboxGroup,
  VStack,
  Input,
  FormControl,
  FormLabel,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api";

const SearchModal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [employmentType, setEmploymentType] = useState("");

  // APIから職種データを取得
  const { data: positions, isLoading: positionsLoading } = useQuery({
    queryKey: ["positions"],
    queryFn: apiClient.getAllPositions,
  });

  // 求人データから勤務地を抽出（実際のAPIにエンドポイントがあればそちらを使用）
  const { data: jobs, isLoading: jobsLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: apiClient.getAllJobs,
  });

  // 勤務地の一覧を抽出
  const locationOptions = jobs 
    ? Array.from(new Set(jobs.map(job => job.location)))
    : [];

  const handleSearch = () => {
    // 検索条件を設定
    const searchParams = new URLSearchParams();
    
    if (searchKeyword) {
      searchParams.append("keyword", searchKeyword);
    }
    
    if (selectedPositions.length > 0) {
      searchParams.append("positions", selectedPositions.join(","));
    }
    
    if (selectedLocations.length > 0) {
      searchParams.append("locations", selectedLocations.join(","));
    }
    
    if (employmentType) {
      searchParams.append("type", employmentType);
    }
    
    // 検索結果ページに遷移
    // Note: 実際の検索結果ページを実装する必要があります
    router.push(`/results?${searchParams.toString()}`);
    setIsOpen(false);
  };

  return (
    <Box>
      <Button
        bg="#FF4500"
        color="white"
        size="lg"
        px={8}
        _hover={{ bg: "#E23E00" }}
        onClick={() => setIsOpen(true)}
      >
        検索
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>求人検索</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack gap={4} align="stretch">
              <FormControl>
                <FormLabel>キーワード</FormLabel>
                <Input 
                  placeholder="求人タイトル、スキルなど" 
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>職種</FormLabel>
                {positionsLoading ? (
                  <Spinner size="sm" />
                ) : (
                  <CheckboxGroup
                    colorScheme="red"
                    value={selectedPositions}
                    onChange={(values) => setSelectedPositions(values as string[])}
                  >
                    <VStack align="start" maxH="200px" overflowY="auto">
                      {positions?.map((position) => (
                        <Checkbox key={position.id} value={position.id.toString()}>
                          {position.name}
                        </Checkbox>
                      ))}
                    </VStack>
                  </CheckboxGroup>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>勤務地</FormLabel>
                {jobsLoading ? (
                  <Spinner size="sm" />
                ) : (
                  <CheckboxGroup
                    colorScheme="red"
                    value={selectedLocations}
                    onChange={(values) => setSelectedLocations(values as string[])}
                  >
                    <VStack align="start" maxH="200px" overflowY="auto">
                      {locationOptions.map((location) => (
                        <Checkbox key={location} value={location}>
                          {location}
                        </Checkbox>
                      ))}
                    </VStack>
                  </CheckboxGroup>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>雇用形態</FormLabel>
                <Select 
                  placeholder="全ての雇用形態"
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                >
                  <option value="正社員">正社員</option>
                  <option value="契約社員">契約社員</option>
                  <option value="パートタイム">パートタイム</option>
                  <option value="フリーランス">フリーランス</option>
                </Select>
              </FormControl>

              <Button
                bg="#FF4500"
                color="white"
                w="full"
                _hover={{ bg: "#E23E00" }}
                onClick={handleSearch}
                mt={4}
              >
                検索する
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SearchModal;