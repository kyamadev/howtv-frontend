"use client";
import Category from "@/components/Category";
import Top from "@/components/Top";
import Footer from "@/components/Footer";
import JobList from "@/components/JobList";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Top />
      {/* <Category /> */}
      <JobList />
    </Box>
  );
}
