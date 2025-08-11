// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const SITE_URL = "https://xenovant.jp";
const OGP_IMAGE = `${SITE_URL}/logo.png?v=6`; // ← ここに一本化

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  title: { default: "ゼノバント | Xenovant", template: "%s | Xenovant" },
  description:
    "未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "Xenovant",
    title: "ゼノバント | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [{ url: OGP_IMAGE, width: 1200, height: 630, alt: "Xenovant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ゼノバント | Xenovant",
    description:
      "未知を受け入れ、前衛で切り拓く。テクノロジーで“思いやり”を形にするチーム。",
    images: [OGP_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
