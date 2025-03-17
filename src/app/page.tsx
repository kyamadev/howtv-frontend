"use client";
import Category from "@/components/Category";
import Top from "@/components/Top";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <Top />
      <Category />
    </ChakraProvider>
  );
}
