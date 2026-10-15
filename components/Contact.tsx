import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import ExtLink from "./ExtLink";
import { profile } from "@/data/portfolio";

const btn = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition";

export default function Contact() {
  const wa = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Halo Hendra, saya melihat portofolio Anda.")}`;
  const info = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "WhatsApp", value: profile.phone, href: wa },
    { icon: MapPin, label: "Lokasi", value: profile.location },
  ];
  return (
    <Section id="kontak" alt eyebrow="Kontak" title="Mari berdiskusi">
      <Reveal>
        <div className="card relative overflow-hidden p-6 sm:p-10">
          <div className="orb -right-20 -top-20 size-64 bg-accent" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold sm:text-3xl">Punya ide atau butuh rekan tim?</h3>
              <p className="mt-3 text-muted sm:text-lg">
                Terbuka untuk hackathon, kolaborasi, dan proyek web atau mobile. Respons tercepat lewat WhatsApp.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={wa} target="_blank" rel="noopener noreferrer" className={`${btn} grad-bg text-white hover:brightness-110 dark:text-[#0a0e1f]`}>
                  <MessageCircle size={18} aria-hidden /> Chat WhatsApp
                </a>
                <a href={`mailto:${profile.email}`} className={`${btn} border border-line bg-surface hover:border-accent hover:text-accent`}>
                  <Mail size={18} aria-hidden /> Kirim Email
                </a>
                <ExtLink href={profile.linkedin} label="LinkedIn" />
                <ExtLink href={profile.github} label="GitHub" />
              </div>
            </div>
            <ul className="space-y-3">
              {info.map(({ icon: Icon, label, value, href }) => {
                const body = (
                  <>
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon size={20} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-muted">{label}</span>
                      <span className="block break-words font-semibold">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className="flex items-center gap-4 rounded-2xl border border-line bg-bg p-4 transition hover:border-accent">{body}</a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-line bg-bg p-4">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
