import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Xenovant",
  description: "Xenovantが手がけるプロジェクト一覧。TSMatelix、Pageit、manabeba など。",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: "Projects | Xenovant",
    description: "Xenovantが手がけるプロジェクト一覧。TSMatelix、Pageit、manabeba など。",
    url: "/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Xenovant",
    description: "Xenovantが手がけるプロジェクト一覧。TSMatelix、Pageit、manabeba など。",
  },
  keywords: ["Xenovant", "Projects", "TSMatelix", "Pageit", "manabeba"],
};

export default function ProjectsPage() {
  return <ProjectsGrid />; // ← これは "use client" の別コンポーネントにしてOK
}
