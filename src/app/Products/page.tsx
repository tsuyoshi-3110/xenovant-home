import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Xenovant",
  description: "Xenovantが手がけるプロジェクト一覧。TSMatelix、Pageit、ProcNova など。",
  alternates: { canonical: "https://www.xenovant.jp/projects" },
  keywords: ["Xenovant", "Projects", "TSMatelix", "Pageit", "ProcNova"],
  // openGraph / twitter は書かない
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
