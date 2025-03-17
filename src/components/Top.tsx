import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  Stack,
  Image,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { Header } from './Header';

export default function Top() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    router.push(`/results?q=${searchQuery}`);
  };

  return (
    <Box
      as="section"
      bg="white"  // 背景色を白に変更
      minHeight="80vh"
      py={12}
    >
      <Container maxW="1200px">
        {/* ナビゲーション */}
        <Header />

        {/* メインコンテンツ */}
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          gap={10}
        >
          {/* 左側：テキストと検索 */}
          <Box
            maxW={{ lg: '550px' }}
          >
            <Heading
              as="h1"
              size="2xl"
              color="#0B2B82"
              lineHeight="1.2"
              fontWeight="800"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <Box as="span">あなたの</Box>
              <Box as="span" color="#FF4500"> スキル </Box>  {/* オレンジっぽい赤色でハイライト */}
              <Box as="span">を活かせる</Box>
              <Box as="span" display="block" mt={2}>最高の仕事を見つけよう</Box>
            </Heading>

            <Text fontSize="lg" color="#3D589B" textAlign={{ base: 'center', lg: 'left' }}>
              HowTVは、あなたの経験とスキルに合った最適な求人情報を提供します。
              新たなキャリアへの第一歩を踏み出しましょう。
            </Text>

            {/* 検索ボックス */}
            <Box
              bg="white"
              p={4}
              borderRadius="xl"
              boxShadow="md"
              width="100%"
              maxW="500px"
              mt={8}
            >
              <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={3}
              >
                <InputGroup flex={1}>
                  <Box position="relative">
                    <Box position="absolute" left="16px" top="50%" transform="translateY(-50%)" zIndex={2} pointerEvents="none">
                      <Icon as={FaSearch} color="#FF4500" />  {/* オレンジっぽい赤色 */}
                    </Box>
                    <Input
                      size="lg"
                      placeholder="スキルまたは職種を入力"
                      pl="42px"
                      borderRadius="md"
                      borderColor="#E2E8F0"
                      _focus={{
                        borderColor: "#FF4500",  // フォーカス時にオレンジっぽい赤色
                        boxShadow: "0 0 0 1px #FF4500"
                      }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Box>
                </InputGroup>

                <Button
                  bg="#FF4500"  // オレンジっぽい赤色
                  color="white"
                  size="lg"
                  px={8}
                  _hover={{ bg: '#E23E00' }}  // ホバー時は少し暗く
                  w={{ base: '100%', sm: 'auto' }}
                  onClick={handleSearch}
                >
                  検索
                </Button>
              </Flex>
            </Box>
          </Box>

          {/* 右側：イラスト画像 */}
          <Box
            display={{ base: 'none', md: 'block' }}
            position="relative"
          >
            <Image
              src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg"
              alt="就職活動のイラスト"
              maxW="500px"
              borderRadius="xl"
              boxShadow="lg"
            />

            {/* 装飾的な要素 */}
            <Box
              position="absolute"
              top="-20px"
              right="-20px"
              width="140px"
              height="140px"
              borderRadius="full"
              border="2px dashed #FF4500"  // オレンジっぽい赤色
              zIndex={-1}
            />
            <Box
              position="absolute"
              bottom="-15px"
              left="-15px"
              width="80px"
              height="80px"
              borderRadius="full"
              bg="#FF4500"  // オレンジっぽい赤色
              opacity="0.1"
              zIndex={-1}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
