import { Box, Button, Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" mb={16}>
      {/* ロゴ */}
      <Box>
        <Flex alignItems="center">
          <Box
            bg="#FF4500" // オレンジっぽい赤色
            w="40px"
            h="40px"
            borderRadius="md"
            mr={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">
              H
            </Text>
          </Box>
          <Text fontSize="xl" fontWeight="bold" color="#0E0359">
            HowTV
          </Text>
        </Flex>
      </Box>

      {/* メニューリンク - 必要に応じて追加 */}
      <Flex gap={8} display={{ base: "none", md: "flex" }}>
        <Text fontWeight="500" cursor="pointer" _hover={{ color: "#FF4500" }}>
          求人を探す
        </Text>
        <Text fontWeight="500" cursor="pointer" _hover={{ color: "#FF4500" }}>
          新着求人
        </Text>
        <Text fontWeight="500" cursor="pointer" _hover={{ color: "#FF4500" }}>
          企業を見る
        </Text>
      </Flex>

      {/* ログインボタン */}
      <Button
        bg="#FF4500" // オレンジっぽい赤色
        color="white"
        _hover={{ bg: "#E23E00" }} // ホバー時は少し暗く
        borderRadius="full"
        px={6}
      >
        ログイン
      </Button>
    </Flex>
  );
}
