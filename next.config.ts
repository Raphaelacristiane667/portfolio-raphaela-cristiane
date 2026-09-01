import type { NextConfig } from "next";

/** distDir relativo — Next.js não aceita caminho absoluto fora do projeto */
const nextConfig: NextConfig = {
  distDir: ".next",
};

export default nextConfig;
