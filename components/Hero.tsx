import { Briefcase, Download, FolderOpen, GraduationCap, MapPin, MessageCircle, Rocket } from "lucide-react";
import { profile, stats } from "@/data/portfolio";

const btn = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition";

const highlights = [
  { icon: Rocket, text: "Ketua Kelompok PMW 2026 · PortoLink" },
  { icon: Briefcase, text: "Menteri MEB · BEM KM PNP" },
  { icon: GraduationCap, text: "D3 Manajemen Informatika · PNP" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0" aria-hidden />
      <div className="orb -left-24 -top-24 size-80 bg-accent" aria-hidden />
      <div className="orb -right-24 top-40 size-72 bg-accent-2" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-5">
        <div className="fade-up lg:col-span-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex size-2" aria-hidden>
              <span className="grad-bg absolute inline-flex size-full animate-ping rounded-full opacity-70" />
              <span className="grad-bg relative inline-flex size-2 rounded-full" />
            </span>
            Terbuka untuk hackathon &amp; kolaborasi
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            Halo, saya <span className="grad-text">{profile.name}</span>
          </h1>
          <p className="mt-4 text-lg font-semibold sm:text-2xl">{profile.role}</p>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">{profile.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#proyek" className={`${btn} grad-bg text-white shadow-lg shadow-accent/20 hover:brightness-110 dark:text-[#0a0e1f]`}>
              <FolderOpen size={18} aria-hidden /> Lihat Proyek
            </a>
            <a href={profile.cv} download className={`${btn} border border-line bg-surface hover:border-accent hover:text-accent`}>
              <Download size={18} aria-hidden /> Unduh CV
            </a>
            <a href="#kontak" className={`${btn} border border-line bg-surface hover:border-accent hover:text-accent`}>
              <MessageCircle size={18} aria-hidden /> Hubungi Saya
            </a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" aria-hidden /> {profile.location}
          </p>
        </div>

        <div className="fade-up lg:col-span-2 [animation-delay:0.12s]">
          <div className="card relative p-6 sm:p-7">
            <div className="grad-bg absolute inset-x-0 top-0 h-1.5 rounded-t-[1.25rem]" aria-hidden />
            <div className="flex items-center gap-4">
              <div className="grad-bg grid size-16 shrink-0 place-items-center rounded-2xl text-2xl font-extrabold text-white dark:text-[#0a0e1f]" aria-hidden>
                MH
              </div>
              <div>
                <p className="text-lg font-bold leading-tight">{profile.name}</p>
                <p className="text-sm text-muted">Padang, Sumatera Barat</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 rounded-xl bg-accent-soft px-3.5 py-2.5 text-sm font-medium">
                  <Icon size={18} className="shrink-0 text-accent" aria-hidden /> {text}
                </li>
              ))}
            </ul>
            <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-5">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <dt className="text-xs leading-snug text-muted">{s.label}</dt>
                  <dd className="grad-text text-3xl font-extrabold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
