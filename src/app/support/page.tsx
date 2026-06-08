import type { Metadata } from "next";
import { Mail, CheckCircle } from "lucide-react";

const SITE_URL = "https://xenovant.jp";

export const metadata: Metadata = {
  title: "Proclinkサポート | Xenovant",
  description:
    "Proclinkは、建設現場向けの工事写真管理アプリです。操作方法・ログイン・不具合・アカウントに関するお問い合わせはこちら。",
  alternates: { canonical: `${SITE_URL}/support` },
};

const supportItems = [
  "アプリの操作方法",
  "ログインに関するお問い合わせ",
  "不具合の報告",
  "アカウントに関するご相談",
  "その他サポート",
];

export default function SupportPage() {
  return (
    <main className="relative min-h-[100dvh] px-6 pt-[calc(var(--header-h)+2rem)] pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,hsl(var(--color-primary)/0.06),transparent),radial-gradient(40rem_30rem_at_10%_120%,hsl(260_100%_66%/0.04),transparent)]" />
      </div>

      <section className="mx-auto max-w-2xl space-y-10">
        {/* タイトル */}
        <div className="space-y-4">
          <h1 className="bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-xl md:text-6xl">
            サポート
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Proclinkは、建設現場向けの工事写真管理アプリです。
            工種・工区・工程・撮影項目ごとに写真を整理しながら撮影し、現場関係者との情報共有をサポートします。
          </p>
        </div>

        {/* お問い合わせ */}
        <div className="bg-background/60 space-y-4 rounded-2xl border p-6 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="bg-background/80 rounded-lg border p-2 shadow-sm">
              <Mail className="size-5" aria-hidden />
            </div>
            <h2 className="text-xl font-semibold tracking-tight">お問い合わせ</h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            アプリの不具合、操作方法、ログイン、アカウントに関するご相談は、下記メールアドレスまでご連絡ください。
          </p>
          <a
            href="mailto:xenovant.ts@gmail.com"
            className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden />
            xenovant.ts@gmail.com
          </a>
        </div>

        {/* 対応内容 */}
        <div className="bg-background/60 space-y-4 rounded-2xl border p-6 shadow-sm backdrop-blur">
          <h2 className="text-xl font-semibold tracking-tight">対応内容</h2>
          <ul className="space-y-3">
            {supportItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-primary size-4 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 運営 */}
        <p className="text-muted-foreground text-center text-sm">
          運営：<span className="text-foreground font-medium">Xenovant</span>
        </p>
      </section>
    </main>
  );
}
