"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/Products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || "");
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // ルーティング/ハッシュ遷移で自動クローズ
  useEffect(() => setOpen(false), [pathname, hash]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 text-white backdrop-blur supports-[backdrop-filter]:bg-black/65">
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between px-4">
        {/* ロゴ＋ブランド */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Xenovant" width={32} height={32} className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-wide">Xenovant</span>
        </Link>

        {/* デスクトップナビ */}
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => {
            const targetHash = it.href.startsWith("/#") ? `#${it.href.split("#")[1]}` : "";
            const active =
              (it.href === "/" && pathname === "/") || (targetHash && hash === targetHash);
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
        </nav>

        {/* モバイルメニュー切替 */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* モバイルドロワー */}
      {open && (
        <div className="border-t border-white/10 bg-black/90 md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-2">
            <ul className="flex flex-col">
              {items.map((it) => {
                const targetHash = it.href.startsWith("/#") ? `#${it.href.split("#")[1]}` : "";
                const active =
                  (it.href === "/" && pathname === "/") || (targetHash && hash === targetHash);
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
          {/* セーフエリア（iPhone） */}
          <div className="h-[env(safe-area-inset-top,0px)]" />
        </div>
      )}
    </header>
  );
}
