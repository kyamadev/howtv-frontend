"use client";
import Category from "@/components/Category";
import Top from "@/components/Top";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { defaultSystem } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Top />
      <Category />
      <Footer />
    </ChakraProvider>
  );
}
