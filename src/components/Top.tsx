import { Box, Button, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function Top() {
    return (
        <>
        <Box
        width="100%"
        height="100%"
        paddingTop={10}
        paddingLeft={27}
        paddingRight={27}
        position="relative"
        bg="#F3F1FF"
      >
        <VStack align="start">
          <Flex
            justify="space-between"
            align="center"
            width="100%"
          >
            <Flex align="center" gap={48}>
              <Box width="160px" height="24px" position="relative" overflow="hidden">
                <Box width="41.82px" height="24.08px" left="7.94px" top="0px" position="absolute" bg="#7B66FF" />
                <Box width="18.91px" height="10.33px" left="43.73px" top="12.01px" position="absolute" bg="#7B66FF" />
                <Box width="5.88px" height="12.54px" left="2.86px" top="11.49px" position="absolute" bg="#7B66FF" />
                <Box width="14.88px" height="17.38px" left="70.77px" top="2.88px" position="absolute" bg="#0E0359" />
                <Box width="19.68px" height="16.69px" left="86.66px" top="3.20px" position="absolute" bg="#0E0359" />
                <Box width="12.33px" height="12.67px" left="106.98px" top="7.36px" position="absolute" bg="#0E0359" />
                <Box width="13.44px" height="12.58px" left="119.93px" top="7.39px" position="absolute" bg="#0E0359" />
                <Box width="9.87px" height="12.73px" left="134.25px" top="7.33px" position="absolute" bg="#0E0359" />
                <Box width="11.10px" height="12.67px" left="145.02px" top="7.39px" position="absolute" bg="#0E0359" />
              </Box>
              <Flex gap={8}>
                <Text color="#0E0359" fontSize="16px" fontWeight="400" lineHeight="16px">
                  Find Jobs
                </Text>
                <Text color="#0E0359" fontSize="16px" fontWeight="400" lineHeight="16px">
                  Latest Jobs
                </Text>
                <Text color="#0E0359" fontSize="16px" fontWeight="400" lineHeight="16px">
                  Browse Companies
                </Text>
              </Flex>
            </Flex>
            <Button
              bg="#7B66FF"
              color="white"
              fontSize="16px"
              fontWeight="500"
              lineHeight="24px"
              px={6}
              py={2}
              _hover={{ bg: "#624bd9" }}
              >
              Sign In
            </Button>
          </Flex>
          <Flex align="center">
            <VStack align="start">
              <VStack align="start">
                <Heading
                  as="h1"
                  size="4xl"
                  fontWeight="700"
                  lineHeight="96px"
                  color="#0B2B82"
                  >
                  Explore Over <Box as="span" color="#7B66FF">7,000+</Box> Job
                  Opportunities
                </Heading>
                <Text
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="32px"
                  color="#3D589B"
                  width="569px"
                  >
                  Discover a platform tailored for passionate job seekers interested
                  in startups. Find your next career opportunity and connect with
                  like-minded individuals.
                </Text>
              </VStack>
              <Box
                bg="white"
                padding={4}
                display="inline-flex"
                alignItems="center"
                justifyContent="flex-start"
                gap={24}
                >
                <Flex align="center" gap={6}>
                  <Box width="24px" height="24px" position="relative" overflow="hidden">
                    <Box width="16px" height="16px" left="3px" top="3px" position="absolute" border="1px solid #7B66FF" />
                    <Box width="4.35px" height="4.35px" left="16.65px" top="16.65px" position="absolute" border="1px solid #7B66FF" />
                  </Box>
                  <Text color="#A1ADCB" fontSize="16px" fontWeight="300" lineHeight="24px">
                    Keyword
                  </Text>
                </Flex>
                <Box height="40px" border="1px solid #EDEDED" />
                <Flex align="center" gap={3}>
                  <Box width="24px" height="24px" position="relative" overflow="hidden">
                    <Box width="18px" height="22px" left="3px" top="1px" position="absolute" border="1px solid #7B66FF" />
                    <Box width="6px" height="6px" left="9px" top="7px" position="absolute" border="1px solid #7B66FF" />
                  </Box>
                  <Text color="#A1ADCB" fontSize="16px" fontWeight="300" lineHeight="24px">
                    Location
                  </Text>
                </Flex>
                <Button
                  bg="#7B66FF"
                  color="white"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="24px"
                  px={8}
                  py={4}
                  _hover={{ bg: "#624bd9" }}
                  >
                  Search
                </Button>
              </Box>
              <Flex align="center">
                <Box width="196px" height="56px" mixBlendMode="multiply" bg="#0C2E82" />
                <Text color="#9EABCD" fontSize="16px" fontWeight="400" lineHeight="16px">
                  Tags: Digital Marketer, UX Designer, Data Analyst
                </Text>
              </Flex>
            </VStack>
            <Image
              src="https://placehold.co/547x656"
              alt="Placeholder Image"
              width="547px"
              height="656px"
              />
          </Flex>
        </VStack>
        <Box
          left="1105px"
          top="218px"
          position="absolute"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap="30px"
          >
          <Box
            paddingLeft="158px"
            paddingRight="158px"
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            gap="20px"
            >
            <Box
              width="77px"
              height="77px"
              position="relative"
              background="#0C2E82"
              borderRadius="45px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="8px"
              >
              <Box width="22.27px" height="45.45px" borderRadius="46px" border="1px white solid" />
            </Box>
            <Box
              transform="rotate(-90deg)"
              transformOrigin="top left"
              color="#0B2B82"
              fontSize="18px"
              fontFamily="Bai Jamjuree"
              fontWeight="600"
              textTransform="uppercase"
              lineHeight="21.60px"
              letterSpacing="9.36px"
              >
              Scroll Down
            </Box>
          </Box>
          <Box position="relative" display="inline-flex" alignItems="flex-start" gap="8px">
            <Box width="200px" height="280px" borderRadius="6px" border="1px solid #8D7BF0" />
            <Box
              width="280px"
              height="98px"
              left="298px"
              top="0px"
              position="absolute"
              transform="rotate(90deg)"
              transformOrigin="top left"
              borderRadius="10px"
              border="1px solid #7B66FF"
              />
          </Box>
        </Box>
        <Box
          left="108px"
          top="799px"
          position="absolute"
          display="inline-flex"
          alignItems="flex-start"
          gap="31px"
          >
          <Image src="https://placehold.co/745x96" width="745px" height="96px" />
          <Image src="https://placehold.co/155x96" width="155px" height="96px" />
        </Box>
      </Box>
            </>
    )
}