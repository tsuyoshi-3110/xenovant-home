"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, type Transition } from "framer-motion";
import { useLanguage } from "@/lib/language";

type Project = {
  id: string;
  name: string;
  slug: string;
  desc: string;
  descEn: string;
  img?: string;
  images?: string[];
  tags?: string[];
  link?: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    id: "procnova",
    name: "ProcNova",
    slug: "procnova",
    desc: "工程表・工事写真・居住者案内・職人連携を統合する、マンション大規模修繕工事向け施工管理システム。",
    descEn: "An integrated construction management system for large-scale condo renovations — schedules, site photos, resident notices, and worker coordination.",
    img: "/projects/procNovaLogoIcon.png",
    tags: ["Construction", "SaaS"],
    link: "https://procnova.jp/",
  },
  {
    id: "proclink",
    name: "Proclink",
    slug: "proclink",
    desc: "現場で撮影した写真を工程構造に紐づけ、自動整理する工事写真撮影アプリ。",
    descEn: "A construction photo app that links field photos to project workflows and organizes them automatically.",
    img: "/projects/proclinkIcon.png",
    tags: ["Construction", "App"],
    href: "/Products/proclink",
  },
  {
    id: "tsmatelix",
    name: "TSMatelix",
    slug: "tsmatelix",
    desc: "建設現場の材料発注を、よりスムーズに。次世代の統合型アプリ",
    descEn: "Streamlining material ordering on construction sites. A next-generation integrated app.",
    img: "/projects/tsmatelixLogo.png",
    tags: ["Construction", "Materials"],
    link: "https://www.tsmatelix.shop/",
  },
  {
    id: "pageit",
    name: "Pageit",
    slug: "pageit",
    desc: "SNS世代のために設計された、動画×スマホ×AI対応のウェブアプリサービス。",
    descEn: "A web app service designed for the social media generation — video, mobile, and AI-ready.",
    img: "/projects/iconImage.png",
    tags: ["Web", "Publisher"],
    link: "https://www.pageit.shop/",
  },
  {
    id: "sealing-app",
    name: "SealingApp",
    slug: "sealing-app",
    desc: "シーリング材料計算アプリ。現場の施工条件を入力するだけで、必要な材料量を素早く算出。",
    descEn: "A sealing material calculator. Enter site conditions to quickly estimate required quantities.",
    img: "/projects/sealingAppLogo.png",
    tags: ["Construction", "App"],
  },
  {
    id: "urethan-app",
    name: "UrethanApp",
    slug: "urethan-app",
    desc: "防水材料計算アプリ。ウレタン防水工事に必要な材料量を、工法や面積から正確に計算。",
    descEn: "A waterproofing material calculator. Estimate urethane waterproofing quantities by method and area.",
    img: "/projects/urethanAppLogo.png",
    tags: ["Construction", "App"],
  },
];

const T = {
  learnMore: { ja: "詳細を見る →", en: "Learn more →" },
};

export default function ProjectsGrid() {
  const { lang } = useLanguage();
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

  return (
    <main className="relative min-h-[100dvh] px-6 pt-[calc(var(--header-h)+1rem)] pb-16">
      {/* 背景 */}
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
          {"Products".split("").map((ch, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-transparent drop-shadow-xl"
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        {/* カード */}
        <motion.ul variants={container} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => {
            const cardClass =
              "bg-background/70 flex h-full flex-col overflow-hidden rounded-2xl border shadow-lg backdrop-blur transition-shadow group-hover:shadow-xl";

            const desc = lang === "en" ? p.descEn : p.desc;

            const cardBody = (
              <>
                <div className="relative aspect-[16/10] w-full">
                  {p.images && p.images.length > 0 ? (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 px-5">
                      {p.images.map((img) => (
                        <div key={img} className="relative h-[78%] flex-1">
                          <Image
                            src={img}
                            alt={`${p.name} preview`}
                            fill
                            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw"
                            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            unoptimized
                          />
                        </div>
                      ))}
                    </div>
                  ) : p.img ? (
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

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    <div className="flex shrink-0 gap-2">
                      {(p.tags ?? []).map((t) => (
                        <span key={t} className="rounded-full border px-2 py-0.5 text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-2 line-clamp-3 text-sm">{desc}</p>

                  <div className="mt-auto flex items-center justify-between pt-4">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 text-xs underline-offset-4 hover:underline"
                        aria-label={`${p.name} の詳細を見る`}
                      >
                        {T.learnMore[lang]}
                      </a>
                    ) : p.href ? (
                      <span className="text-foreground/70 text-xs">{T.learnMore[lang]}</span>
                    ) : (
                      <span />
                    )}
                    <span className="text-muted-foreground/80 text-[11px]">#{p.slug}</span>
                  </div>
                </div>
              </>
            );

            return (
              <motion.li key={p.id} variants={item} className="group h-full">
                {p.href ? (
                  <Link href={p.href} className={cardClass}>
                    {cardBody}
                  </Link>
                ) : (
                  <div className={cardClass}>{cardBody}</div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.section>
    </main>
  );
}
