import type { Metadata } from "next";
import SupportContent from "@/components/SupportContent";

const SITE_URL = "https://xenovant.jp";

export const metadata: Metadata = {
  title: "Support | Xenovant",
  description:
    "Xenovantプロダクトのサポートページ。操作方法・ログイン・不具合・アカウントに関するお問い合わせはこちら。",
  alternates: { canonical: `${SITE_URL}/support` },
};

export default function SupportPage() {
  return <SupportContent />;
}
