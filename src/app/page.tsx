import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";

// ページ専用メタ（タイトル/OG/Twitter/カノニカル）
export const metadata: Metadata = {
  title: "ゼノバント | Xenovant",
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  alternates: { canonical: "/" },
  keywords: ["ゼノバント", "Xenovant", "プロダクト開発", "SaaS", "フロントエンド", "AI"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "ゼノバント | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "ゼノバント | Xenovant" }], // public/og.jpg を用意
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: ["/og.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <HomeHero />
      {/* 構造化データ（Organization） */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Xenovant",
            url: "https://xenovant.com", // 実ドメインに差し替え可（未定なら後でOK）
            logo: "/logo.png",
            description:
              "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
          }),
        }}
      />
    </>
  );
}
