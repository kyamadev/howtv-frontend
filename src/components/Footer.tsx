import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Link,
  Input,
  Button,
  IconButton,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
// useColorModeValueの代わりに固定値を使用するため、import不要

// SocialButtonの定義
interface SocialButtonProps {
  children: React.ReactNode;
  href: string;
}

const SocialButton = ({ children }: SocialButtonProps) => {
  return (
    <IconButton
      aria-label="Social media"
      as="a"
      size="md"
      bg="transparent"
      rounded="full"
      border="1px solid"
      borderColor="gray.300"
      color="gray.700"
      transition="all 0.3s ease"
      _hover={{
        bg: "#7B66FF",
        color: "white",
        borderColor: "#7B66FF",
        transform: "translateY(-2px)",
        boxShadow: "md",
      }}
    >
      {children}
    </IconButton>
  );
};

// ListHeaderの定義
const ListHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      fontWeight="700"
      fontSize="lg"
      mb={4}
      color="#0B2B82"
      position="relative"
      display="inline-block"
      _after={{
        content: '""',
        position: "absolute",
        width: "40px",
        height: "2px",
        bottom: "-8px",
        left: "0",
        backgroundColor: "#7B66FF",
      }}
    >
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"white"}
      borderTop="1px"
      borderStyle={"solid"}
      borderColor={"gray.200"}
      color={"gray.700"}
      boxShadow="0 -1px 10px rgba(0, 0, 0, 0.05)"
    >
      <Container as={Stack} maxW={"1200px"} py={16}>
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            sm: "1fr 1fr",
            md: "2fr 1fr 1fr 2fr",
          }}
          gap={{ base: 10, md: 8 }}
        >
          <Stack gap={8}>
            <Box>
              {/* ロゴコンポーネントまたはイメージに置き換えてください */}
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color="#0B2B82"
                letterSpacing="-0.5px"
              >
                HowTV
              </Text>
            </Box>
            <Text fontSize="sm" color="gray.600" lineHeight="taller" maxW="sm">
              求職者と求人企業をつなぐプラットフォーム。
              <br />
              最新の求人情報を提供し、あなたのキャリアをサポートします。
            </Text>
            <HStack gap={4}>
              <SocialButton href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton href={"#"}>
                <FaLinkedin />
              </SocialButton>
            </HStack>
          </Stack>

          <VStack align="flex-start" gap={4}>
            <ListHeader>求人情報</ListHeader>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
              display="flex"
              alignItems="center"
            >
              求人一覧
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              人気の職種
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              企業一覧
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              勤務地から探す
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              スキルから探す
            </Link>
          </VStack>

          <VStack align="flex-start" gap={4}>
            <ListHeader>企業情報</ListHeader>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              会社概要
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              ミッション
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              採用情報
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              プレスリリース
            </Link>
            <Link
              href={"#"}
              color="gray.600"
              _hover={{ color: "#7B66FF", textDecoration: "none" }}
            >
              お問い合わせ
            </Link>
          </VStack>

          <VStack align="flex-start" gap={6}>
            <ListHeader>最新情報を受け取る</ListHeader>
            <Text fontSize="sm" color="gray.600" lineHeight="taller">
              業界の最新ニュースと求人情報をメールでお届けします
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} w="100%" gap={2}>
              <Input
                placeholder="あなたのメールアドレス"
                size="md"
                bg="gray.50"
                border="1px"
                borderColor="gray.200"
                _focus={{
                  borderColor: "#7B66FF",
                  boxShadow: "0 0 0 1px #7B66FF",
                }}
                fontSize="sm"
                rounded="md"
              />
              <Button
                bg="#7B66FF"
                color="white"
                _hover={{
                  bg: "#6755e8",
                  transform: "translateY(-2px)",
                  boxShadow: "md",
                }}
                transition="all 0.3s ease"
                rounded="md"
                size="md"
                px={6}
              >
                <FaArrowRight fontSize="0.8em" />
                登録
              </Button>
            </Stack>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* 区切り線 */}
      <Box borderTop="1px" borderColor="gray.200" w="100%" />

      <Box py={8}>
        <Container maxW="1200px">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize="sm" color="gray.500" mb={{ base: 4, md: 0 }}>
              © 2025 HowTV. All rights reserved
            </Text>
            <HStack
              gap={{ base: 2, sm: 6 }}
              justifyContent={{ base: "center", md: "flex-end" }}
              flexWrap="wrap"
            >
              <Link
                href="#"
                fontSize="xs"
                color="gray.500"
                _hover={{ color: "#7B66FF" }}
              >
                プライバシーポリシー
              </Link>
              <Link
                href="#"
                fontSize="xs"
                color="gray.500"
                _hover={{ color: "#7B66FF" }}
              >
                利用規約
              </Link>
              <Link
                href="#"
                fontSize="xs"
                color="gray.500"
                _hover={{ color: "#7B66FF" }}
              >
                特定商取引法
              </Link>
              <Link
                href="#"
                fontSize="xs"
                color="gray.500"
                _hover={{ color: "#7B66FF" }}
              >
                Cookieポリシー
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}