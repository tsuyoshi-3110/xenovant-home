"use client";

import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";


export default function Home() {
  const EASE: Transition["ease"] = [0.16, 1, 0.3, 1];

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

  function StaggerText({
    text,
    className,
    delay = 0.2, // 最初の待ち
    duration = 0.7, // 各文字の所要時間
    stagger = 0.035, // 文字間の間隔
  }: {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
  }) {
    const parent: Variants = {
      hidden: { opacity: 1 }, // 親は常に表示、子だけを段階表示
      show: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren: delay },
      },
    };
    const child: Variants = {
      hidden: { opacity: 0, y: 8 },
      show: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
    };

    return (
      <motion.p variants={parent} initial="hidden" animate="show" className={className}>
        {Array.from(text).map((ch, i) => (
          <motion.span key={i} variants={child} className="inline-block">
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        ))}
      </motion.p>
    );
  }

  return (
    <main className="relative flex min-h-[100dvh] flex-col pt-[calc(var(--header-h)+0.5rem)]">

      {/* 背景メッシュ */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,hsl(var(--color-primary)/0.10),transparent),radial-gradient(40rem_30rem_at_10%_120%,hsl(260_100%_66%/0.08),transparent),radial-gradient(40rem_30rem_at_90%_120%,hsl(200_100%_60%/0.08),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/5 to-transparent dark:from-white/5" />
      </div>

      {/* ヒーロー */}
      <section className="mx-auto max-w-6xl px-6 pt-10 text-center">
        {/* ロゴ（最上部） */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="ゼノバントのロゴ"
            width={640}
            height={640}
            priority
            className="mx-auto h-auto w-[340px] drop-shadow-xl md:w-[480px] lg:w-[560px]"
          />
        </motion.div>

        <motion.h1
          variants={parent}
          initial="hidden"
          animate="show"
          className="text-5xl font-extrabold tracking-tight md:text-7xl"
        >
          {"Xenovant".split("").map((ch, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent drop-shadow-xl"
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <StaggerText
          text="未知（Xeno）を受け入れ、前衛（avant）で切り拓く。テクノロジーで“思いやり”を形にすることを掲げ、挑み続けるチームです"
          className="text-muted-foreground mx-auto mt-5 max-w-3xl text-lg leading-relaxed md:text-xl"
          delay={0.2}
        />

        <StaggerText
          text="既存の枠にとらわれない視点で設計し、最短で価値に到達する実装で社会課題に挑みます。"
          className="text-muted-foreground/90 mx-auto mt-3 max-w-3xl text-base leading-relaxed md:text-lg"
          delay={0.3}
        />

        <div className="via-foreground/30 mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
      </section>

      <footer className="text-muted-foreground/80 mt-auto w-full py-6 text-center text-sm">
        © {new Date().getFullYear()} Xenovant
      </footer>
    </main>
  );
}
