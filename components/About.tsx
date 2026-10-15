import { GraduationCap } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { education, profile, stats } from "@/data/portfolio";

export default function About() {
  const [lead, ...rest] = profile.about;
  return (
    <Section id="tentang" eyebrow="Tentang Saya" title="Membangun solusi untuk masalah nyata">
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <p className="text-xl font-semibold leading-relaxed sm:text-2xl">{lead}</p>
          <div className="mt-5 space-y-4 text-base text-muted sm:text-lg">
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="space-y-4 lg:col-span-2">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="card p-4">
                <p className="grad-text text-2xl font-extrabold sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="card p-5">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              <GraduationCap size={18} className="text-accent" aria-hidden /> Pendidikan
            </h3>
            <ul className="mt-3 divide-y divide-line">
              {education.map((e) => (
                <li key={e.school} className="py-3 first:pt-0 last:pb-0">
                  <p className="font-semibold">{e.school}</p>
                  <p className="text-sm text-muted">{e.detail}</p>
                  <p className="font-mono text-xs text-accent">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
