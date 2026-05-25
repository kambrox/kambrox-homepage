import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAMBROX",
  description: "퇴원 이후의 회복을 데이터로 연결하는 KAMBROX hero prototype"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
