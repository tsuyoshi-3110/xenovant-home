"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { HeartHandshake, Target } from "lucide-react";

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

const parent: Variants = {
  hidden: {}, // 親は制御しない
  show: {}, // （stagger/delay なし）
};

// ゆっくり浮上
const child: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 3, ease: EASE }, // ← ゆっくり
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-[100dvh] px-6 pt-[calc(var(--header-h)+1rem)] pb-16">
      {/* 背景のうっすらメッシュ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,hsl(var(--color-primary)/0.08),transparent),radial-gradient(40rem_30rem_at_10%_120%,hsl(260_100%_66%/0.06),transparent),radial-gradient(40rem_30rem_at_90%_120%,hsl(200_100%_60%/0.06),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5" />
      </div>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl space-y-8"
      >
        {/* 見出し */}
        <motion.h1
          variants={parent}
          initial="hidden"
          animate="show"
          className="text-4xl font-extrabold tracking-tight md:text-7xl"
        >
          {"About Xenovant".split("").map((ch, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent drop-shadow-xl"
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          variants={item}
          className="via-foreground/30 mx-auto h-px w-24 bg-gradient-to-r from-transparent to-transparent"
        />

        {/* 説明文 */}
        <motion.p variants={item} className="text-muted-foreground -mt-6 leading-relaxed md:-mt-4">
          ゼノバントは、未知（Xeno）を受け入れ、前衛（avant）で切り拓く開発チーム。
          テクノロジーで“思いやり”を形にする価値提供に、実装重視で取り組みます。
        </motion.p>

        {/* 原則（3点） */}
        <motion.ul variants={item} className="grid gap-3 md:grid-cols-3">
          <li className="bg-background/60 rounded-2xl border p-4 text-sm backdrop-blur">
            <p className="font-bold">現場起点</p>
            <p className="text-muted-foreground mt-1">実務の痛みから設計する。</p>
          </li>
          <li className="bg-background/60 rounded-2xl border p-4 text-sm backdrop-blur">
            <p className="font-bold">やさしさ設計</p>
            <p className="text-muted-foreground mt-1">誰にでも分かる体験へ。</p>
          </li>
          <li className="bg-background/60 rounded-2xl border p-4 text-sm backdrop-blur">
            <p className="font-bold">共益志向</p>
            <p className="text-muted-foreground mt-1">
              ユーザー・クライアント・チーム・社会に価値が循環する設計。
            </p>
          </li>
        </motion.ul>

        {/* 社会へのコミットメント（カード） */}
        <motion.div
          variants={item}
          className="bg-background/70 rounded-2xl border p-6 backdrop-blur"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-lg border p-2">
              <HeartHandshake className="size-5" aria-hidden />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold tracking-tight">社会へのコミットメント</h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                私たちは、毎期の<strong>当期純利益の1%</strong>を社会に還元します。
                四半期ごとに積み立て、期末から3ヶ月以内に寄付。寄付先と金額は年次レポートで公開します。
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                <Target className="size-3.5" aria-hidden />
                Profit 1% for Social Good
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
