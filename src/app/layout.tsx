"use client";
import { ChakraProvider } from "@chakra-ui/react";
import QueryProvider from "@/lib/QueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <QueryProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </QueryProvider>
      </body>
    </html>
  );
}