// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const SITE_URL = "https://www.xenovant.jp";
const OGP = `${SITE_URL}/logo.png?v=7`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: { default: "ゼノバント | Xenovant", template: "%s | Xenovant" },
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  openGraph: {
    type: "website",
    siteName: "Xenovant",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    url: "/",
    locale: "ja_JP",
    images: [{ url: OGP, width: 1200, height: 630, alt: "Xenovant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [OGP],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* ← ここを“保険”で直書き（絶対URL・www統一・クエリ付） */}
        <meta property="og:title" content="ゼノバント | Xenovant" />
        <meta
          property="og:description"
          content="未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Xenovant" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:image" content={OGP} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Xenovant" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ゼノバント | Xenovant" />
        <meta
          name="twitter:description"
          content="未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。"
        />
        <meta name="twitter:image" content={OGP} />
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
