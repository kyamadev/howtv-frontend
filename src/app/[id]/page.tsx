import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import CompanyDetail from "@/components/CompanyDetail";
import Roadmap from "@/components/Roadmap";

const Page: React.FC = () => {
  return (
    <Flex height="100vh">
      <Box flex="1" borderRight="1px solid #ccc" p="1rem">
        <Heading as="h2" size="md" mb="4">
          ロードマップ作成
        </Heading>
        <Box>
          <Roadmap />
        </Box>
      </Box>
      <Box flex="2" p="1rem">
        <CompanyDetail />
      </Box>
    </Flex>
  );
};

export default Page;
