import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import Chat from "@/components/Chat";
import CompanyDetail from "@/components/CompanyDetail";

const Page: React.FC = () => {
  return (
    <Flex height="100vh">
      <Box flex="1" borderRight="1px solid #ccc" p="1rem">
        <Heading as="h2" size="md" mb="4">
          チャット機能
        </Heading>
        <Box>
          <Chat />
        </Box>
      </Box>
      <Box flex="2" p="1rem">
        <Heading as="h2" size="md" mb="4">
          右側の画面
        </Heading>
        <CompanyDetail />
      </Box>
    </Flex>
  );
};

export default Page;
