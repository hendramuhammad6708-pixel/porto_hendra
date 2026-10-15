import { Award, Trophy } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { achievements, certifications, isPlaceholder } from "@/data/portfolio";

export default function Achievements() {
  const items = achievements.filter((a) => !isPlaceholder(a.title));
  return (
    <Section id="prestasi" eyebrow="Prestasi & Sertifikasi" title="Jejak kompetisi dan kepemimpinan">
      <div className="grid gap-10 lg:grid-cols-5">
        <ol className="relative space-y-5 lg:col-span-3">
          <span className="grad-bg absolute bottom-2 left-[15px] top-2 w-0.5 rounded-full opacity-40" aria-hidden />
          {items.map((a, i) => (
            <li key={a.title} className="relative pl-12">
              <Reveal delay={i * 0.05}>
                <span
                  className={`absolute left-0 top-1 grid size-8 place-items-center rounded-full border-4 border-bg ${a.highlight ? "grad-bg" : "bg-line"}`}
                  aria-hidden
                >
                  {a.highlight && <Trophy size={13} className="text-white dark:text-[#0a0e1f]" />}
                </span>
                <div className="card p-5">
                  <p className="font-mono text-xs font-bold text-accent">{a.year}</p>
                  <h3 className="mt-1 font-bold leading-snug">{a.title}</h3>
                  <p className="mt-1 text-sm text-muted">{a.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal delay={0.1} className="lg:col-span-2">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <Award size={18} className="text-accent" aria-hidden /> Sertifikasi
          </h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((c) => (
              <li key={c.name} className="card card-hover flex items-center gap-4 p-4">
                <span className="grad-bg grid size-11 shrink-0 place-items-center rounded-xl text-white dark:text-[#0a0e1f]">
                  <Award size={20} aria-hidden />
                </span>
                <div>
                  <p className="font-semibold leading-snug">{c.name}</p>
                  <p className="text-sm text-muted">{c.issuer} · {c.year}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
