"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language";
import type { Lang } from "@/lib/language";

const NAV_ITEMS = {
  ja: [
    { href: "/Products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
    { href: "mailto:xenovant.ts@gmail.com", label: "Contact" },
  ],
  en: [
    { href: "/Products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
    { href: "mailto:xenovant.ts@gmail.com", label: "Contact" },
  ],
};

function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {(["ja", "en"] as Lang[]).map((l, i) => (
        <React.Fragment key={l}>
          {i > 0 && <span className="text-white/20 text-xs select-none">|</span>}
          <button
            onClick={() => setLang(l)}
            className={cn(
              "px-1.5 py-0.5 text-xs font-semibold tracking-widest uppercase transition-colors",
              lang === l ? "text-white" : "text-white/35 hover:text-white/70",
            )}
          >
            {l.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}

export default function HeaderNav() {
  const { lang } = useLanguage();
  const items = NAV_ITEMS[lang];
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/95 text-white backdrop-blur supports-[backdrop-filter]:bg-black/90">
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between px-4">
        {/* ロゴ＋ブランド */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logoSilver.png" alt="Xenovant" width={40} height={40} className="h-12 w-12" />
          <span className="text-lg font-semibold tracking-wide">Xenovant</span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => {
            const isMail = it.href.startsWith("mailto:");
            const targetHash = it.href.startsWith("/#") ? `#${it.href.split("#")[1]}` : "";
            const active =
              !isMail && ((it.href === "/" && pathname === "/") || (targetHash && hash === targetHash));
            return (
              <Link
                key={it.href}
                href={it.href}
                className={cn(
                  "text-sm transition-colors",
                  active ? "text-white" : "text-white/70 hover:text-white",
                )}
                aria-current={active ? "page" : undefined}
              >
                {it.label}
              </Link>
            );
          })}
          <LangToggle className="ml-2 border-l border-white/15 pl-4" />
        </nav>

        {/* モバイル右側：トグル＋ハンバーガー */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle />
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* モバイルドロワー */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-2">
            <ul className="flex flex-col">
              {items.map((it) => {
                const isMail = it.href.startsWith("mailto:");
                const targetHash = it.href.startsWith("/#") ? `#${it.href.split("#")[1]}` : "";
                const active =
                  !isMail && ((it.href === "/" && pathname === "/") || (targetHash && hash === targetHash));
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className={cn(
                        "block py-3 text-sm",
                        active ? "text-white" : "text-white/80 hover:text-white",
                      )}
                    >
                      {it.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="h-[env(safe-area-inset-top,0px)]" />
        </div>
      )}
    </header>
  );
}
