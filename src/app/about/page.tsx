import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About | Xenovant",
  description:
    "ゼノバントは、未知（Xeno）を受け入れ、前衛（avant）で切り拓く開発チーム。テクノロジーで“思いやり”を形にする価値提供に、実装重視で取り組みます。",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "About | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にする開発チーム・ゼノバントの紹介。",
    url: "/about",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "About Xenovant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にする開発チーム・ゼノバントの紹介。",
    images: ["/og.jpg"],
  },
  keywords: ["ゼノバント", "Xenovant", "About", "社会貢献", "当期純利益1%"],
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      {/* 構造化データ（AboutPage） */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About | Xenovant",
            url: "/about",
            description:
              "ゼノバントは、未知（Xeno）を受け入れ、前衛（avant）で切り拓く開発チーム。テクノロジーで“思いやり”を形にする価値提供に、実装重視で取り組みます。",
            primaryImageOfPage: { "@type": "ImageObject", url: "/og.jpg" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "/" },
                { "@type": "ListItem", position: 2, name: "About", item: "/about" },
              ],
            },
          }),
        }}
      />
    </>
  );
}
