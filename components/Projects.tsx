import { AlertCircle, Lightbulb, TrendingUp, UserCog } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { isPlaceholder, projects } from "@/data/portfolio";

type RowProps = { icon: typeof AlertCircle; label: string; children: React.ReactNode };

const Row = ({ icon: Icon, label, children }: RowProps) => (
  <div className="flex gap-3">
    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
      <Icon size={16} aria-hidden />
    </span>
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-accent">{label}</h4>
      <p className="mt-0.5 text-sm text-muted sm:text-base">{children}</p>
    </div>
  </div>
);

export default function Projects() {
  return (
    <Section
      id="proyek"
      alt
      eyebrow="Proyek Unggulan"
      title="Dari masalah nyata ke solusi teknis"
      intro="Setiap proyek berangkat dari kebutuhan operasional yang konkret, bukan sekadar latihan."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
            <article className="card card-hover relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
              <div className="grad-bg absolute inset-x-0 top-0 h-1.5" aria-hidden />
              <header className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-extrabold tracking-tight">{p.name}</h3>
                {p.badge && (
                  <span className="grad-bg rounded-full px-3 py-1 text-xs font-bold text-white dark:text-[#0a0e1f]">{p.badge}</span>
                )}
              </header>
              <div className={`mt-6 grid gap-5 ${i === 0 ? "sm:grid-cols-2" : ""}`}>
                <Row icon={AlertCircle} label="Masalah">{p.problem}</Row>
                <Row icon={Lightbulb} label="Solusi">{p.solution}</Row>
                <Row icon={UserCog} label="Peran saya">{p.role}</Row>
                {!isPlaceholder(p.impact) && <Row icon={TrendingUp} label="Dampak">{p.impact}</Row>}
              </div>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent">{s}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
