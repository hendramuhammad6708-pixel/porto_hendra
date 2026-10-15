import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, profile } from "@/data/portfolio";

const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], display: "swap" });

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: profile.tagline,
  keywords: ["Muhammad Hendra", "portofolio", "web developer", "Flutter", "Laravel", "Politeknik Negeri Padang", "PortoLink"],
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: { title, description: profile.tagline, url: "/", siteName: profile.name, locale: "id_ID", type: "website" },
  twitter: { card: "summary_large_image", title, description: profile.tagline },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [{ color: "#0a0e1f" }],
};

// Mode gelap default; hanya beralih ke terang bila pengguna memilihnya.
const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} dark antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
