"use client";

import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";


type Project = {
  id: string;
  name: string;
  slug: string;
  desc: string;
  img?: string;
  tags?: string[];
  link?: string; // 外部リンク（ない場合は「制作中」表示）
};

const PROJECTS: Project[] = [
  {
    id: "tsmatelix",
    name: "TSMatelix",
    slug: "tsmatelix",
    desc: "建設現場の材料発注を、よりスムーズに。次世代の統合型アプリ",
    img: "/projects/tsmatelixLogo.png",
    tags: ["SaaS", "Metrics"],
    link: "https://www.tsmatelix.shop/", // ← 実サイトURLに差し替え
  },
  {
    id: "pageit",
    name: "Pageit",
    slug: "pageit",
    desc: "SNS世代のために設計された、動画×スマホ×AI対応のホームページサービス。",
    img: "/projects/iconImage.png",
    tags: ["Web", "Publisher"],
    link: "https://www.pageit.shop/", // ← 実サイトURLに差し替え
  },
  {
    id: "manabeba",
    name: "manabeba",
    slug: "manabeba",
    desc: "AIが伴走する無料の学習プラットフォーム。学びに機会均等を",
    img: "/projects/manabebaLogo.png",
    tags: ["Education"],
    // link は未設定 → 「制作中」バッジ表示
  },
];

export default function ProjectsPage() {
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
        className="mx-auto max-w-6xl"
      >
        <motion.h1
          variants={parent}
          initial="hidden"
          animate="show"
          className="text-4xl font-extrabold tracking-tight md:text-7xl"
        >
          {"Projects".split("").map((ch, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent drop-shadow-xl"
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>



        {/* カードグリッド */}
        <motion.ul variants={container} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <motion.li key={p.id} variants={item} className="group">
              <div className="bg-background/70 overflow-hidden rounded-2xl border backdrop-blur transition-shadow group-hover:shadow-lg">
                {/* 画像 or プレースホルダー */}
                <div className="relative aspect-[16/10] w-full">
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={`${p.name} preview`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      unoptimized
                    />
                  ) : (
                    <div className="text-muted-foreground absolute inset-0 grid place-items-center text-xs">
                      No image
                    </div>
                  )}
                </div>

                {/* 本文 */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    {/* タグ */}
                    <div className="flex shrink-0 gap-2">
                      {(p.tags ?? []).map((t) => (
                        <span key={t} className="rounded-full border px-2 py-0.5 text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-2 line-clamp-3 text-sm">{p.desc}</p>

                  <div className="mt-4 flex items-center justify-between">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 text-xs underline-offset-4 hover:underline"
                        aria-label={`${p.name} の公式サイトを開く`}
                      >
                        公式サイト
                      </a>
                    ) : (
                      <span className="text-muted-foreground rounded-full border px-2 py-0.5 text-[10px]">
                        制作中
                      </span>
                    )}
                    <span className="text-muted-foreground/80 text-[11px]">#{p.slug}</span>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </main>
  );
}
