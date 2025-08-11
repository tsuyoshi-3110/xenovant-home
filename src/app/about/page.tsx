import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

const SITE_URL = "https://www.xenovant.jp";

export const metadata: Metadata = {
  title: "About | Xenovant",
  description:
    "ゼノバントは、未知（Xeno）を受け入れ、前衛（avant）で切り拓く開発チーム。テクノロジーで“思いやり”を形にする価値提供に、実装重視で取り組みます。",
  alternates: { canonical: `${SITE_URL}/about` },
  keywords: ["ゼノバント", "Xenovant", "About", "社会貢献", "当期純利益1%"],
  // openGraph / twitter は書かない
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About | Xenovant",
            url: `${SITE_URL}/about`,
            description:
              "ゼノバントは、未知（Xeno）を受け入れ、前衛（avant）で切り拓く開発チーム。テクノロジーで“思いやり”を形にする価値提供に、実装重視で取り組みます。",
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: `${SITE_URL}/logo.png?v=6`, // ← v=6 に統一
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
              ],
            },
          }),
        }}
      />
    </>
  );
}
