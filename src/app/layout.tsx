// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// 公開URL（localhost ではなく実ドメイン）
const SITE_URL = "https://xenovant.jp";
// 共有用画像の絶対URL（キャッシュ更新したい時は ?v=2 など付ける）
const OGP_IMAGE = `${SITE_URL}/ogp.png?v=1`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  title: { default: "ゼノバント | Xenovant", template: "%s | Xenovant" },
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,                  // ← 相対ではなく絶対URL
    siteName: "Xenovant",
    title: "ゼノバント | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [{ url: OGP_IMAGE, width: 1200, height: 630, alt: "Xenovant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [OGP_IMAGE],            // ← ここも同じ画像＆絶対URL
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
