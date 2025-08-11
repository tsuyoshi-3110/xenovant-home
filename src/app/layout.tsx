// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const SITE_URL = "https://www.xenovant.jp"; // ← www を正に
const OGP_IMAGE = `${SITE_URL}/logo.png?v=4`; // ← 絶対URL + キャッシュバスト

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  title: { default: "ゼノバント | Xenovant", template: "%s | Xenovant" },
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL, // ← 絶対URL
    siteName: "Xenovant",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [{ url: OGP_IMAGE, width: 1200, height: 630, alt: "Xenovant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [OGP_IMAGE], // ← 同じ絶対URL
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* ▼ 念のため手動で明示（LINE対策の“保険”） */}
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={OGP_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OGP_IMAGE} />
        {/* 先読みは任意 */}
        <link rel="preload" as="image" href="/ogp.png" type="image/png" />
      </head>
      <body>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
