// app/page.tsx
import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import Head from "next/head";

export const metadata: Metadata = {
  title: "ゼノバント | Xenovant",
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  alternates: { canonical: "https://www.xenovant.jp" },
  openGraph: { url: "https://www.xenovant.jp" },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return (
    <>
      <Head>
        <title>Xenovant（ゼノバント）｜未知を受け入れ、前衛で切り拓くテクノロジーチーム</title>
        <meta
          name="description"
          content="Xenovant（ゼノバント）は、未知（Xeno）を受け入れ、前衛（avant）で切り拓くテクノロジーチームです。AI・Web・アプリ開発を通して“思いやり”を形にします。"
        />
        <meta
          name="keywords"
          content="Xenovant, ゼノバント, AI開発, Web制作, アプリ開発, テクノロジー, イノベーション"
        />
        <meta
          property="og:title"
          content="Xenovant（ゼノバント）｜未知を受け入れ、前衛で切り拓く"
        />
        <meta
          property="og:description"
          content="未知を受け入れ、前衛で切り拓く。AI・Web・アプリ開発を通じて“思いやり”を形にするテクノロジーチーム。"
        />
        <meta property="og:image" content="https://www.pageit.shop/images/ogpImage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.xenovant.jp/" />
        <meta
          name="google-site-verification"
          content="7HSoD5EoR8yl7N2ffBLuIdZO3ZhT__cA4Y6HJyJnpN0"
        />
      </Head>
      <HomeHero />;
    </>
  );
}
