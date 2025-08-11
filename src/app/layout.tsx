// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const SITE = "https://xenovant.jp";
// ← LINEなどのキャッシュ回避のためにバージョンを付与（値は更新時に変えてOK）
const OGP = `${SITE}/og.jpg`;

export const metadata = {
  metadataBase: new URL(SITE),
  alternates: { canonical: SITE },
  title: { default: "ゼノバント | Xenovant", template: "%s | Xenovant" },
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE,
    siteName: "Xenovant",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [{ url: OGP, width: 1200, height: 630, alt: "Xenovant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description: "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [OGP],
  },
} satisfies Metadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* 直書き（保険）— 主要クローラーが拾いやすい並びで設置 */}
        <meta property="og:title" content="ゼノバント | Xenovant" />
        <meta
          property="og:description"
          content="未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE} />
        <meta property="og:site_name" content="Xenovant" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:image" content={OGP} />
        <meta property="og:image:secure_url" content={OGP} />
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
        <link rel="canonical" href={SITE} />
      </head>
      <body>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
