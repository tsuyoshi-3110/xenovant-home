"use client";

import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";

export default function HomeHero() {
  const EASE: Transition["ease"] = [0.16, 1, 0.3, 1];

  const parent: Variants = { hidden: {}, show: {} };
  const child: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 3, ease: EASE } },
  };

  function StaggerText({
    text,
    lines,
    className,
    delay = 0.2,
    duration = 0.7,
    stagger = 0.035,
  }: {
    text?: string;
    lines?: string[];
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
  }) {
    const p: Variants = {
      hidden: { opacity: 1 },
      show: { opacity: 1, transition: { staggerChildren: stagger, delayChildren: delay } },
    };
    const c: Variants = {
      hidden: { opacity: 0, y: 8 },
      show: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
    };

    const displayLines = lines ?? (text ? [text] : []);

    return (
      <motion.div variants={p} initial="hidden" animate="show" className={className}>
        {displayLines.map((line, lineIndex) => (
          <p key={`${line}-${lineIndex}`} className="block">
            {Array.from(line).map((ch, i) => (
              <motion.span key={`${lineIndex}-${i}`} variants={c} className="inline-block">
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </p>
        ))}
      </motion.div>
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
          lines={[
            "私たちが目指すのは、誰もが公平に技術の恩恵を受けられる社会です。",
            "使う人の仕事を少しでも楽にし、新しい可能性を切り開く。",
            "Xenovantは、そのためのプロダクトを開発し続けます。",
          ]}
          className="text-muted-foreground mx-auto mt-5 max-w-3xl space-y-2 text-lg leading-relaxed md:text-xl"
          delay={0.2}
        />

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="mx-auto mt-6 inline-flex items-center rounded-full border border-gray-300 bg-gray-900 px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-lg backdrop-blur dark:border-white/20 dark:bg-white dark:text-gray-900"
        >
          Patented Technology / Japan Patent No. 7611328
        </motion.div>

        <div className="via-foreground/30 mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
      </section>

      <footer className="text-muted-foreground/80 mt-auto w-full py-6 text-center text-sm">
        © {new Date().getFullYear()} Xenovant
      </footer>
    </main>
  );
}
