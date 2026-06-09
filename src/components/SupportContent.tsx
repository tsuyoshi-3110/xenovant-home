"use client";

import { Mail, Wrench, LogIn, AlertCircle, MessageSquare, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/language";

const T = {
  subtitle: {
    ja: "ご不明点やお困りのことがあれば、いつでもお気軽にご連絡ください。",
    en: "If you have any questions or need assistance, feel free to reach out anytime.",
  },
  contactTitle: { ja: "お問い合わせ", en: "Contact Us" },
  contactBody: {
    ja: "アプリの不具合、操作方法、ログイン、アカウントに関するご相談は、下記メールアドレスまでご連絡ください。",
    en: "For questions about app usage, login, bugs, or your account, please reach out to us at the email address below.",
  },
  supportTitle: { ja: "対応内容", en: "What We Can Help With" },
  items: {
    ja: [
      { icon: <Wrench className="size-4" />, label: "アプリの操作方法" },
      { icon: <LogIn className="size-4" />, label: "ログインに関するお問い合わせ" },
      { icon: <AlertCircle className="size-4" />, label: "不具合の報告" },
      { icon: <MessageSquare className="size-4" />, label: "アカウントに関するご相談" },
      { icon: <HelpCircle className="size-4" />, label: "その他サポート" },
    ],
    en: [
      { icon: <Wrench className="size-4" />, label: "How to use the app" },
      { icon: <LogIn className="size-4" />, label: "Login & authentication" },
      { icon: <AlertCircle className="size-4" />, label: "Bug reports" },
      { icon: <MessageSquare className="size-4" />, label: "Account inquiries" },
      { icon: <HelpCircle className="size-4" />, label: "Other support" },
    ],
  },
  footer: { ja: "運営：", en: "Operated by " },
};

export default function SupportContent() {
  const { lang } = useLanguage();

  return (
    <main className="relative min-h-[100dvh] px-6 pt-[calc(var(--header-h)+3rem)] pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,hsl(var(--color-primary)/0.08),transparent),radial-gradient(40rem_30rem_at_10%_120%,hsl(260_100%_66%/0.06),transparent)]" />
      </div>

      <section className="mx-auto max-w-2xl space-y-10">
        {/* ヘッダー */}
        <div>
          <h1 className="bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-xl md:text-7xl">
            Support
          </h1>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            {T.subtitle[lang]}
          </p>
        </div>

        {/* お問い合わせ */}
        <div className="group bg-background/70 relative overflow-hidden rounded-2xl border p-7 shadow-lg backdrop-blur transition-shadow hover:shadow-xl">
          <div
            aria-hidden
            className="bg-primary/8 group-hover:bg-primary/12 absolute -top-16 -right-16 size-56 rounded-full blur-3xl transition-colors duration-500"
          />
          <div className="relative">
            <div className="bg-background mb-5 inline-flex items-center justify-center rounded-xl border p-2.5 shadow-sm">
              <Mail className="size-5" aria-hidden />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">{T.contactTitle[lang]}</h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {T.contactBody[lang]}
            </p>
            <a
              href="mailto:info@xenovant.jp"
              className="bg-primary text-primary-foreground mt-6 inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 text-sm font-semibold shadow-md transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden />
              info@xenovant.jp
            </a>
          </div>
        </div>

        {/* 対応内容 */}
        <div className="bg-background/70 rounded-2xl border p-7 shadow-sm backdrop-blur">
          <h2 className="mb-5 text-lg font-bold tracking-tight">{T.supportTitle[lang]}</h2>
          <ul className="space-y-2">
            {T.items[lang].map(({ icon, label }) => (
              <li
                key={label}
                className="text-foreground/80 bg-background/60 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{icon}</span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* フッター */}
        <p className="text-muted-foreground text-center text-xs">
          {T.footer[lang]}<span className="text-foreground font-medium">Xenovant</span>
        </p>
      </section>
    </main>
  );
}
