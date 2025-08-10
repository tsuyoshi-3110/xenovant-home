"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { href: string; label: string; Icon: React.ComponentType<{ className?: string }> };

const items: Item[] = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/#about", label: "About", Icon: Info },
  { href: "/#contact", label: "Contact", Icon: Mail },
];

export default function FooterNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handler = () => setHash(window.location.hash || "");
    handler();
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <nav aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-50">
      <div className="bg-black text-white border-t border-white/10">
        <ul className="mx-auto flex max-w-4xl items-center justify-around px-2 py-3 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
          {items.map(({ href, label, Icon }) => {
            const targetHash = href.startsWith("/#") ? `#${href.split("#")[1]}` : "";
            const isActive =
              (href === "/" && pathname === "/") || (targetHash && hash === targetHash);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex flex-col items-center gap-1 px-4 text-xs transition-colors",
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="size-5" />
                  <span className="leading-none">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
