import { useState } from "react";
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
} from "@chakra-ui/react";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJobCategories, setSelectedJobCategories] = useState<string[]>(
    []
  );
  const [selectedSkillLevels, setSelectedSkillLevels] = useState<string[]>([]);

  const jobCategories = ["エンジニア", "デザイナー", "マーケター"];
  const skillLevels = ["初心者", "中級者", "上級者"];

  const handleSearch = () => {
    console.log("検索条件:", {
      selectedJobCategories,
      selectedSkillLevels,
    });
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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>検索条件を選択</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={4} align="stretch">
              <CheckboxGroup
                colorScheme="red"
                value={selectedJobCategories}
                onChange={(values) =>
                  setSelectedJobCategories(values as string[])
                }
              >
                <VStack align="start">
                  {jobCategories.map((category) => (
                    <Checkbox key={category} value={category}>
                      {category}
                    </Checkbox>
                  ))}
                </VStack>
              </CheckboxGroup>
              <CheckboxGroup
                colorScheme="red"
                value={selectedSkillLevels}
                onChange={(values) =>
                  setSelectedSkillLevels(values as string[])
                }
              >
                <VStack align="start">
                  {skillLevels.map((level) => (
                    <Checkbox key={level} value={level}>
                      {level}
                    </Checkbox>
                  ))}
                </VStack>
              </CheckboxGroup>
              <Button
                bg="#FF4500"
                color="white"
                w="full"
                _hover={{ bg: "#E23E00" }}
                onClick={handleSearch}
              >
                検索
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SearchModal;
