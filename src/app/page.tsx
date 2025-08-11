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
      "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    url: "https://xenovant.jp",   
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description:
      "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  },
};

export default function Page() {
  return <HomeHero />;
}
