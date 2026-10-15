import { Building2 } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const [main, ...others] = experiences;
  return (
    <Section
      id="pengalaman"
      alt
      eyebrow="Organisasi & Wirausaha"
      title="Memimpin tim dan menjalankan usaha"
      intro="Kepemimpinan di BEM, pekerjaan lepas untuk UMKM, dan usaha sendiri melatih saya bernegosiasi, mengeksekusi, dan bekerja dalam tim."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal className="md:col-span-3">
          <article className="card relative overflow-hidden p-6 sm:p-8">
            <div className="grad-bg absolute inset-y-0 left-0 w-1.5" aria-hidden />
            <p className="font-mono text-xs font-bold text-accent">{main.period}</p>
            <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">{main.role}</h3>
            <p className="flex items-center gap-1.5 text-sm text-muted">
              <Building2 size={14} aria-hidden /> {main.org}
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2 sm:text-base">
              {main.points.map((p) => (
                <li key={p} className="rounded-xl bg-accent-soft p-4">{p}</li>
              ))}
            </ul>
          </article>
        </Reveal>
        {others.map((e, i) => (
          <Reveal key={e.role} delay={(i % 3) * 0.07}>
            <article className="card card-hover h-full p-5 sm:p-6">
              <p className="font-mono text-xs font-bold text-accent">{e.period}</p>
              <h3 className="mt-1 text-lg font-bold leading-snug">{e.role}</h3>
              <p className="text-sm text-muted">{e.org}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
