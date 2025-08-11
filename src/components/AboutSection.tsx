"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { HeartHandshake, Target, Lightbulb, Users, Rocket, Recycle, Accessibility, Smile } from "lucide-react";

const EASE: Transition["ease"] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: EASE, duration: 0.6, when: "beforeChildren", staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  show: { opacity: 1, y: 0, scale: 1, transition: { ease: EASE, duration: 0.8 } },
};

const parent: Variants = { hidden: {}, show: {} };
const child: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 3, ease: EASE } },
};

export default function AboutSection() {
  return (
    <main className="relative min-h-[100dvh] px-6 pt-[calc(var(--header-h)+1rem)] pb-16">
      {/* 背景メッシュ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,hsl(var(--color-primary)/0.08),transparent),radial-gradient(40rem_30rem_at_10%_120%,hsl(260_100%_66%/0.06),transparent),radial-gradient(40rem_30rem_at_90%_120%,hsl(200_100%_60%/0.06),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5" />
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl space-y-10"
      >
        {/* 見出し */}
        <motion.h1
          variants={parent}
          initial="hidden"
          animate="show"
          className="text-4xl font-extrabold tracking-tight md:text-7xl"
        >
          {"About Xenovant".split(".").map((ch, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent drop-shadow-xl"
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        {/* 説明文 */}
        <motion.p variants={item} className="text-muted-foreground -mt-6 leading-relaxed md:-mt-4">
          ゼノバントは、未知（Xeno）を受け入れ、前衛（avant）で切り拓く開発チーム。
          テクノロジーで“思いやり”を形にする価値提供に、実装重視で取り組みます。
        </motion.p>

        {/* 原則カード */}
        <motion.ul variants={item} className="grid gap-4 md:grid-cols-3">
          {[
            { icon: <Lightbulb className="size-5" />, title: "現場起点", body: "実務の痛みから設計する。" },
            { icon: <Smile className="size-5" />, title: "やさしさ設計", body: "誰にでも分かる体験へ。" },
            { icon: <Recycle className="size-5" />, title: "共益志向", body: "価値が循環するプロダクトを。" },
          ].map((v) => (
            <li
              key={v.title}
              className="group bg-background/60 relative overflow-hidden rounded-2xl border p-5 text-sm shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="mb-2 text-primary">{v.icon}</div>
              <p className="font-semibold">{v.title}</p>
              <p className="text-muted-foreground mt-1">{v.body}</p>
            </li>
          ))}
        </motion.ul>

        {/* 社会へのコミットメント */}
        <motion.div
          variants={item}
          className="group bg-background/70 relative overflow-hidden rounded-2xl border p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <div
            aria-hidden
            className="bg-primary/10 group-hover:bg-primary/15 absolute -top-16 -left-16 size-56 rounded-full blur-3xl transition-colors duration-300"
          />
          <div className="relative flex items-start gap-3">
            <div className="bg-background/80 mt-0.5 rounded-lg border p-2 shadow-sm">
              <HeartHandshake className="size-5" aria-hidden />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold tracking-tight">社会へのコミットメント</h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                当社の<strong>Stripe決済収益の1%</strong>は、売上発生と同時に自動的に社会貢献へ送られます。
                取引のたびに、未来への投資が積み重なります。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="bg-background/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm">
                  <Target className="size-3.5" aria-hidden />
                  1% for a Better Future
                </div>
                <div className="bg-background/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm">
                  Stripe 自動寄付
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
