import Reveal from "./Reveal";

export default function Section({
  id, eyebrow, title, intro, alt = false, children,
}: { id: string; eyebrow: string; title: string; intro?: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={alt ? "bg-bg-alt" : ""}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
            <span className="grad-bg h-0.5 w-8 rounded-full" aria-hidden /> {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-3 text-base text-muted sm:text-lg">{intro}</p>}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
