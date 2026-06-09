import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Cloud,
  Eye,
  ShieldCheck,
  Users,
  FolderOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Proclink | 工事写真のクラウド管理システム | Xenovant",
  description:
    "Proclinkは、工事写真を工程・工区・撮影項目ごとに整理し、撮影済み・未撮影をリアルタイムで確認できるクラウド写真管理システムです。",
  alternates: { canonical: "https://www.xenovant.jp/Products/proclink" },
  keywords: ["Proclink", "工事写真", "クラウド管理", "建設", "Xenovant"],
};

const FEATURES = [
  {
    icon: <FolderOpen className="size-5" />,
    title: "工程・工区・撮影項目で自動整理",
    body: "現場で撮影した写真を工程・工区・撮影項目ごとに紐づけ、バラバラになりがちな写真を自動で整理します。",
  },
  {
    icon: <Eye className="size-5" />,
    title: "撮影状況をリアルタイム確認",
    body: "撮影済み・未撮影の状況をリアルタイムで把握できます。進捗が一目でわかるため、現場管理の負担を大幅に削減。",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    title: "撮り忘れ・抜け漏れを防止",
    body: "撮影すべき項目を事前に設定することで、写真の撮り忘れや工程の抜け漏れを防ぎます。提出時に慌てません。",
  },
  {
    icon: <Users className="size-5" />,
    title: "チームで撮影状況を共有",
    body: "共有メンバー全員が同じ撮影状況をリアルタイムで確認可能。現場と事務所がつながる、透明な情報共有を実現。",
  },
  {
    icon: <Camera className="size-5" />,
    title: "黒板付き写真をスムーズに撮影",
    body: "黒板情報を事前に登録しておくことで、現場での撮影がスムーズに。記入ミスや手書きの手間を減らせます。",
  },
  {
    icon: <Cloud className="size-5" />,
    title: "スマホで撮影、クラウドで管理",
    body: "手持ちのスマートフォンで撮影し、そのままクラウドに保存・管理。専用機材は不要です。",
  },
];


export default function ProclinkPage() {
  return (
    <main className="min-h-[100dvh] bg-zinc-950 text-white">
      {/* ヒーロー */}
      <section className="relative flex min-h-[70vh] items-start overflow-hidden">
        <Image
          src="/projects/primerPaint.png"
          alt="黒板付きで塗装作業中の現場写真 - Proclink 工事写真管理"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-zinc-950/10" />
        <div className="absolute inset-x-0 top-0 h-[var(--header-h)] bg-gradient-to-b from-zinc-950/80 to-transparent" />

        <div className="relative w-full max-w-2xl px-6 pt-[calc(var(--header-h)+3rem)]">
          <p className="mb-3 text-sm font-medium tracking-widest text-zinc-400 uppercase">
            Xenovant Product
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-xl md:text-7xl">
            Proclink
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-300 md:text-xl">
            工事写真を、工程・工区・撮影項目ごとに整理。
            <br className="hidden sm:block" />
            撮り忘れゼロへ。現場の「見える化」を実現するクラウド写真管理システム。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/support"
              className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg transition hover:bg-zinc-100"
            >
              お問い合わせ
            </Link>
            <a
              href="https://procnova.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              ProcNova Systems を見る
            </a>
          </div>
        </div>
      </section>

      {/* キャッチコピー */}
      <section className="border-y border-white/10 bg-zinc-900/50 py-10 text-center">
        <p className="mx-auto max-w-2xl px-6 text-lg font-medium text-zinc-200 md:text-2xl">
          「あの写真、撮ったっけ？」をなくす。
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          現場での撮影から、クラウド管理・共有まで一気通貫。
        </p>
      </section>

      {/* 機能紹介 */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Proclink でできること
        </h2>
        <p className="mt-3 text-zinc-400">
          工事写真管理のすべてを、現場のスマホから。
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:shadow-xl"
            >
              <div className="mb-3 text-zinc-400 transition-colors group-hover:text-white">
                {f.icon}
              </div>
              <p className="font-semibold text-white">{f.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ProcNova連携セクション */}
      <section className="border-t border-white/10 bg-zinc-900/50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-xs font-medium tracking-widest text-zinc-500 uppercase">
            Powered by ProcNova
          </p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            写真整理は不要。台帳はワンタップで。
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Proclink で撮影した写真は、施工管理システム <strong className="text-zinc-200">ProcNova</strong> と連携することで、さらに強力になります。
            工程・工区・撮影項目ごとに紐づいた写真がそのまま ProcNova へ取り込まれ、
            <strong className="text-zinc-200">手動での写真整理が一切不要</strong>に。
            完成した写真データはワンタップで工事写真台帳として出力できます。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { step: "01", label: "Proclink で撮影", body: "工程・工区・黒板情報を紐づけながら現場で撮影。" },
              { step: "02", label: "ProcNova へ自動連携", body: "撮影した写真が工程構造のまま ProcNova に取り込まれる。" },
              { step: "03", label: "台帳をワンタップ出力", body: "整理済みの写真から工事写真台帳を即座に生成。" },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <span className="text-xs font-bold tracking-widest text-zinc-500">{s.step}</span>
                <p className="mt-2 font-semibold text-white">{s.label}</p>
                <p className="mt-1 text-sm text-zinc-400">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://procnova.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              ProcNova Systems を見る →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            まずはお気軽にご相談ください
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Proclink の詳細・導入についてのご質問はサポートページからお問い合わせいただけます。
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/support"
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition hover:bg-zinc-100 sm:w-auto"
            >
              お問い合わせ
            </Link>
            <a
              href="https://procnova.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              ProcNova Systems を見る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
