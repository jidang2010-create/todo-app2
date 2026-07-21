import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jay-dot-curious.jidang2010.chatgpt.site"),
  title: "Jay Dot — 좋아하는 걸 배우는 사람",
  description: "AI 아트, 영상, 바이브코딩을 배우며 작은 관심사를 연결하는 Jay Dot의 브랜드 페이지.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Jay Dot — 좋아하는 걸 배우는 사람",
    description: "AI와 놀고, 만들고, 배우는 Jay Dot의 세계.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Jay Dot 브랜드 카드" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
