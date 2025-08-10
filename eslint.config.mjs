import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // 無視パターン（ビルド成果物など）
  { ignores: ["node_modules", ".next", "out", "dist", "coverage"] },

  // Next.js 推奨 + TS + Prettier（競合するスタイル系ルールを無効化）
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
];
