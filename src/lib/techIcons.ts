// Maps known tech/tool names to their simpleicons.org slug (real brand logos).
// Lookup is case-insensitive; anything not listed here renders as plain text — no fabricated icons.
const techIconMap: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  typescript: "typescript",
  "c#": "csharp",
  ".net": "dotnet",
  ".net / asp.net web api": "dotnet",
  "asp.net": "dotnet",
  "react.js": "react",
  react: "react",
  "next.js": "nextdotjs",
  nextjs: "nextdotjs",
  angular: "angular",
  postgresql: "postgresql",
  azure: "microsoftazure",
  fastapi: "fastapi",
  "fastapi / fastmcp": "fastapi",
  php: "php",
  laravel: "laravel",
  ethereum: "ethereum",
};

export function getTechIconSlug(name: string): string | undefined {
  return techIconMap[name.trim().toLowerCase()];
}
