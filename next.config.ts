import type { NextConfig } from "next";

/**
 * Cache dentro de node_modules — OneDrive costuma sincronizar menos
 * e evita ENOENT / Failed to fetch ao corromper .next na raiz.
 */
const nextConfig: NextConfig = {
  distDir: "node_modules/.cache/next",
};

export default nextConfig;
