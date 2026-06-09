import type { Metadata } from "next";
import ProclinkContent from "@/components/ProclinkContent";

export const metadata: Metadata = {
  title: "Proclink | 工事写真のクラウド管理システム | Xenovant",
  description:
    "Proclinkは、工事写真を工程・工区・撮影項目ごとに整理し、撮影済み・未撮影をリアルタイムで確認できるクラウド写真管理システムです。",
  alternates: { canonical: "https://www.xenovant.jp/Products/proclink" },
  keywords: ["Proclink", "工事写真", "クラウド管理", "建設", "Xenovant"],
};

export default function ProclinkPage() {
  return <ProclinkContent />;
}
