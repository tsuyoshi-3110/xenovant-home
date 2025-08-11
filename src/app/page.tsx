// app/page.tsx
import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";

export const metadata: Metadata = {
  title: "ゼノバント | Xenovant",
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  alternates: { canonical: "https://www.xenovant.jp" },
  openGraph: { url: "https://www.xenovant.jp" },
  twitter: { card: "summary_large_image" },      
};

export default function Page() {
  return <HomeHero />;
}
