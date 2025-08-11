// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// 公開URLに置き換えてください
const SITE_URL = "https://xenovant.jp";
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ゼノバント | Xenovant", template: "%s | Xenovant" },
  description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "Xenovant",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [
      {
        // できれば 1200x630 の専用OGP画像にする（例: /ogp.png）
        url: new URL("/logo.png", SITE_URL).toString(),
        width: 1200,
        height: 630,
        alt: "Xenovant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: ["/logo.png"], // ← タイプミス修正
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Google Analytics */}

        {/* その他のmeta */}
        <link rel="preload" as="image" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="7HSoD5EoR8yl7N2ffBLuIdZO3ZhT__cA4Y6HJyJnpN0"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
