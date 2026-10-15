import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© 2026 {profile.name}</p>
        <p>Dibuat dengan Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
