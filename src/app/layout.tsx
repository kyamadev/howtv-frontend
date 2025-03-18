"use client";
import { ChakraProvider } from "@chakra-ui/react";
import QueryProvider from "@/lib/QueryProvider";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <QueryProvider>
          <ChakraProvider>
            <Header />
            {children}
            <Footer />
          </ChakraProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
