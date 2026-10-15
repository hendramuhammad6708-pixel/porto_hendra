import { ArrowUpRight } from "lucide-react";
import { isPlaceholder } from "@/data/portfolio";

// Tautan hanya tampil bila sudah diisi; nilai [ISI: ...] disembunyikan agar web tetap rapi.
export default function ExtLink({ href, label }: { href: string; label: string }) {
  if (isPlaceholder(href)) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-surface px-5 text-sm font-semibold transition hover:border-accent hover:text-accent"
    >
      {label} <ArrowUpRight size={16} aria-hidden />
    </a>
  );
}
