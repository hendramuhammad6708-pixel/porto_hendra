import { Cloud, Code2, Globe, Palette, Sparkles, Users, type LucideIcon } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = { code: Code2, cloud: Cloud, palette: Palette, sparkles: Sparkles, users: Users, globe: Globe };

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Alat yang saya kuasai">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => {
          const Icon = icons[g.icon] ?? Code2;
          return (
            <Reveal key={g.group} delay={(i % 3) * 0.06}>
              <div className="card card-hover h-full p-6">
                <h3 className="flex items-center gap-3 font-bold">
                  <span className="grad-bg grid size-10 place-items-center rounded-xl text-white dark:text-[#0a0e1f]">
                    <Icon size={20} aria-hidden />
                  </span>
                  {g.group}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-medium">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
