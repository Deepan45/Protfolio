// Public-folder assets are referenced as root-absolute paths (e.g. "/profile.jpeg").
// When deployed under a subpath (e.g. GitHub Pages project sites), those need the
// configured base prepended, since Vite does not rewrite public/ references automatically.
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
