// Semua konten portofolio ada di file ini. Edit di sini tanpa menyentuh komponen.
// Placeholder bertanda [ISI: ...] harus dilengkapi sebelum dikirim ke juri.
// Struktur siap i18n: pindahkan string ke { id, en } saat versi Inggris dibutuhkan.

export const SITE_URL = "https://porto-hendra.vercel.app"; // [ISI: ganti dengan domain Vercel final]

export const profile = {
  name: "Muhammad Hendra",
  role: "Web & Mobile Developer · UI/UX Designer",
  tagline:
    "Membangun aplikasi web dan mobile yang membantu UMKM dan kampus bekerja lebih terstruktur, dengan identitas visual yang kuat.",
  location: "Padang, Sumatera Barat",
  email: "hendramuhammad6708@gmail.com",
  phone: "0896-7722-8511",
  whatsapp: "6289677228511",
  github: "[ISI: URL GitHub]",
  linkedin: "[ISI: URL LinkedIn]",
  cv: "/CV-Muhammad-Hendra.pdf",
  about: [
    "Saya mahasiswa D3 Manajemen Informatika Politeknik Negeri Padang (IPK 3,52) yang membangun aplikasi web dan mobile untuk masalah operasional nyata: penyewaan alat berat, pengelolaan toko, dan administrasi event kampus.",
    "Sebagai freelance web developer, saya mengerjakan website UMKM dari analisis kebutuhan sampai implementasi, agar bisnis klien terdigitalisasi dan menjangkau pasar lebih luas.",
    "Saya juga inisiator PortoLink, platform portofolio mahasiswa yang lolos Program Mahasiswa Wirausaha (PMW) 2026, dan memimpin kerja sama strategis sebagai Menteri di BEM KM PNP.",
    "Teknologi dan desain visual saya padukan agar produk tidak hanya berfungsi, tetapi juga terlihat dan terasa meyakinkan.",
  ],
};

export const stats = [
  { value: "3,52", label: "IPK D3 Manajemen Informatika" },
  { value: "4", label: "Proyek aplikasi terpilih" },
  { value: "3", label: "Sertifikasi (BNSP & Huawei)" },
  { value: "2026", label: "PMW · Ketua Kelompok PortoLink" },
];

export type Project = {
  name: string;
  badge?: string;
  problem: string;
  solution: string;
  role: string;
  stack: string[];
  impact: string;
};

// Urut dari yang paling relevan untuk hackathon.
export const projects: Project[] = [
  {
    name: "PortoLink",
    badge: "PMW 2026",
    problem:
      "Mahasiswa kesulitan menampilkan karya dan kemampuan profesional mereka dalam satu tempat yang meyakinkan.",
    solution:
      "Platform portofolio berbasis web yang membantu mahasiswa menyusun dan menampilkan karya profesional mereka.",
    role: "Inisiator, ketua kelompok, dan pengembang.",
    stack: ["Web"], // [ISI: tech stack PortoLink]
    impact:
      "Terpilih dalam Program Mahasiswa Wirausaha (PMW) 2026.",
  },
  {
    name: "My Paskam",
    problem:
      "Pengelolaan penyewaan alat berat sulit dipantau: data sewa, ketersediaan unit, dan operasional tersebar.",
    solution:
      "Aplikasi web pengelolaan jasa penyewaan alat berat yang menyatukan data penyewaan, ketersediaan unit, dan operasional.",
    role: "Pengembang aplikasi web.",
    stack: ["Web"], // [ISI: tech stack My Paskam]
    impact: "[ISI: hasil / dampak, misalnya klien atau jumlah transaksi]",
  },
  {
    name: "SiKadai",
    problem:
      "Pemilik toko kesulitan mencatat transaksi, mengelola stok, dan memantau kegiatan usaha secara efisien.",
    solution:
      "Aplikasi pengelolaan toko untuk pencatatan transaksi, pengelolaan stok, dan pemantauan usaha.",
    role: "Pengembang aplikasi.",
    stack: ["Aplikasi"], // [ISI: tech stack SiKadai]
    impact: "[ISI: hasil / dampak]",
  },
  {
    name: "SiMek",
    problem:
      "Perencanaan, koordinasi, dan administrasi event kampus berjalan tanpa alur yang terstruktur.",
    solution:
      "Aplikasi pengelolaan event kampus yang menunjang perencanaan, koordinasi, dan administrasi secara terstruktur.",
    role: "Perancang dan pengembang aplikasi.",
    stack: ["Aplikasi"], // [ISI: tech stack SiMek]
    impact: "[ISI: hasil / dampak]",
  },
];

export type TimelineItem = { year: string; title: string; detail: string; highlight?: boolean };

export const achievements: TimelineItem[] = [
  {
    year: "2026",
    title: "Ketua Kelompok PMW 2026 — PortoLink",
    detail: "Memimpin tim dalam Program Mahasiswa Wirausaha.",
    highlight: true,
  },
  {
    year: "2026",
    title: "Delegasi BEM KM PNP — TemanKita Leadership Summit",
    detail: "Mewakili BEM KM Politeknik Negeri Padang.",
  },
  {
    year: "2025",
    title: "Ketua Pelaksana Pelatihan Kepemimpinan Wirausaha Mahasiswa PNP",
    detail: "Memimpin kepanitiaan pelatihan tingkat kampus.",
  },
  {
    year: "2025",
    title: "Runner-up Futsal TI Cup",
    detail: "Juara kedua kompetisi antar mahasiswa.",
  },
  {
    year: "[ISI: tahun]",
    title: "[ISI: hackathon / lomba teknologi yang pernah diikuti]",
    detail: "Belum ada di CV. Tambahkan jika ada, ini akan sangat menguatkan.",
  },
];

export const certifications = [
  { name: "Junior Graphic Designer", issuer: "BNSP", year: "2025" },
  { name: "HCIA-Cloud Service V3.5", issuer: "Huawei Talent", year: "2025" },
  { name: "HCIA-Cloud Computing V5.5", issuer: "Huawei Talent", year: "2025" },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Menteri Mitra Event dan Bisnis (MEB)",
    org: "BEM KM Politeknik Negeri Padang",
    period: "Jan 2026 – Sekarang",
    points: [
      "Menjalin dan mengelola kerja sama strategis dengan mitra eksternal untuk mendukung program kerja organisasi.",
      "Menginisiasi GameTech Festival dan PNP Esport yang mengintegrasikan teknologi gaming ke lingkungan akademik.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Self-Employed",
    period: "2026 – Sekarang",
    points: [
      "Membangun website kustom untuk UMKM, mulai dari analisis kebutuhan, perancangan, hingga implementasi.",
      "Mendorong digitalisasi dan perluasan jangkauan pasar bisnis klien.",
    ],
  },
  {
    role: "Owner Usaha Kemeja Workshirt Custom",
    org: "Wirausaha Mandiri",
    period: "2026 – Sekarang",
    points: [
      "Mengelola usaha secara mandiri: pengembangan produk, pemasaran, pengelolaan pesanan, dan pelayanan pelanggan.",
    ],
  },
  {
    role: "Koordinator Humas — Hangout of Business 2025",
    org: "BEM KM Politeknik Negeri Padang",
    period: "2025",
    points: ["Mengoordinasikan hubungan masyarakat dan komunikasi acara."],
  },
  {
    role: "Koordinator Media Training",
    org: "BEM KM Politeknik Negeri Padang",
    period: "2025",
    points: ["Mengoordinasikan kegiatan pelatihan media."],
  },
];

export const skills = [
  { group: "Pemrograman & Web", icon: "code", items: ["Flutter (Dart)", "Laravel", "PHP", "Python"] },
  { group: "Cloud", icon: "cloud", items: ["Cloud Computing", "Huawei Cloud"] },
  {
    group: "Desain & Kreatif",
    icon: "palette",
    items: ["Logo Design", "Branding", "UI/UX Design", "Canva", "Adobe Creative Suite"],
  },
  {
    group: "Produktivitas & AI",
    icon: "sparkles",
    items: ["Google Gemini", "Claude", "Gamma", "Microsoft 365"],
  },
  {
    group: "Soft skill",
    icon: "users",
    items: ["Kepemimpinan", "Kerja sama tim", "Negosiasi kemitraan", "Kewirausahaan"],
  },
  { group: "Bahasa", icon: "globe", items: ["Indonesia (penutur asli)", "Inggris (dasar, aktif berlatih)"] },
];

export const education = [
  { school: "Politeknik Negeri Padang", detail: "D3 Manajemen Informatika · IPK 3,52", period: "2024 – Sekarang" },
  { school: "MA Tarbiyah Islamiyah Pasir", detail: "Madrasah Aliyah", period: "2017 – 2024" },
];

export const nav = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#prestasi", label: "Prestasi" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#skills", label: "Skills" },
  { href: "#kontak", label: "Kontak" },
];

// Placeholder = nilai yang masih berisi [ISI: ...]
export const isPlaceholder = (v: string) => v.includes("[ISI");
