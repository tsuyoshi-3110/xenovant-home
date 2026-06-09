import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";

export const metadata: Metadata = {
  title: "ゼノバント | Xenovant",
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  alternates: { canonical: "https://xenovant.jp" }, // 絶対URL推奨
  keywords: ["ゼノバント", "Xenovant", "プロダクト開発", "SaaS", "フロントエンド", "AI"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "ゼノバント | Xenovant",
    description:
      "未知への挑戦を続け、テクノロジーで社会を前進させる。人の想いと技術をつなぎ、新しい価値を創造するチーム。",
    url: "https://xenovant.jp", // 画像は入れない！
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description:
      "未知への挑戦を続け、テクノロジーで社会を前進させる。人の想いと技術をつなぎ、新しい価値を創造するチーム。",
  },
};

export default function Page() {
  return <HomeHero />;
}
