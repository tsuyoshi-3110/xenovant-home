"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import { HeartHandshake, Target, Lightbulb, Recycle, Smile } from "lucide-react";
import { useLanguage } from "@/lib/language";

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

const T = {
  heading: { ja: "About Xenovant", en: "About Xenovant" },
  intro: {
    ja: "Xenovantは、現場に残る非効率や格差を、実用的なテクノロジーで変えていく開発チームです。建設・店舗・地域ビジネスなど、実際の業務で生まれる痛みを起点に、誰もが公平に価値を受け取れる仕組みをつくります。",
    en: "Xenovant is a development team that uses practical technology to eliminate the inefficiencies and inequalities that persist in the real world. Starting from pain points in construction, retail, and local business, we build systems that deliver value fairly to everyone.",
  },
  principles: {
    ja: [
      { icon: <Lightbulb className="size-5" />, title: "現場から生まれる", body: "机上の理想ではなく、実務の困りごとから設計する。" },
      { icon: <Smile className="size-5" />, title: "誰でも使える", body: "専門知識がなくても、迷わず使える体験をつくる。" },
      { icon: <Recycle className="size-5" />, title: "価値を循環させる", body: "一部の人だけでなく、関わる人全体に利益が巡る仕組みへ。" },
    ],
    en: [
      { icon: <Lightbulb className="size-5" />, title: "Born from the Field", body: "Designed not from abstract ideals, but from real operational pain points." },
      { icon: <Smile className="size-5" />, title: "Built for Everyone", body: "We create experiences anyone can use intuitively, without specialized knowledge." },
      { icon: <Recycle className="size-5" />, title: "Value for All", body: "Not just for a select few — benefits flow to everyone involved." },
    ],
  },
  visionTitle: { ja: "Xenovantが目指す未来", en: "The Future Xenovant Envisions" },
  visionBody: {
    ja: "Xenovantの目的は、ただ便利なシステムを作ることではありません。業界に残る無駄、不公平、属人化をなくし、技術の恩恵を誰もが受けられる社会をつくることです。さらに、当社の",
    en: "Our goal is not simply to build convenient systems. We aim to eliminate the waste, unfairness, and knowledge silos that remain in industry — and build a society where the benefits of technology reach everyone. Additionally, ",
  },
  stripeText: {
    ja: "Stripe決済収益の1%",
    en: "1% of our Stripe payment revenue",
  },
  visionBody2: {
    ja: "は、売上発生と同時に自動的に社会貢献へ送られます。",
    en: " is automatically directed to social contribution at the point of sale.",
  },
  badge1: { ja: "Technology for Fairness", en: "Technology for Fairness" },
  badge2: { ja: "Stripe 自動寄付", en: "Stripe Auto-Donation" },
};

export default function AboutSection() {
  const { lang } = useLanguage();

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
          {T.heading[lang].split(".").map((ch, i) => (
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
          {T.intro[lang]}
        </motion.p>

        {/* 原則カード */}
        <motion.ul variants={item} className="grid gap-4 md:grid-cols-3">
          {T.principles[lang].map((v) => (
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
              <h2 className="text-xl font-semibold tracking-tight">{T.visionTitle[lang]}</h2>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                {T.visionBody[lang]}
                <strong>{T.stripeText[lang]}</strong>
                {T.visionBody2[lang]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="bg-background/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm">
                  <Target className="size-3.5" aria-hidden />
                  {T.badge1[lang]}
                </div>
                <div className="bg-background/80 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm">
                  {T.badge2[lang]}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
