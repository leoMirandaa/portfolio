"use client"

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react"

export type Lang = "en" | "id"

type Project = {
  title: string
  category: "Web Development" | "Desktop" | "AI / Deep Learning"
  description: string
}

type Milestone = { title: string; detail: string }

type Dict = {
  header: { tagline: string }
  hero: {
    badge: string
    role: string
    bio: string
    downloadCv: string
    stats: { value: string; label: string }[]
  }
  tech: { title: string; groups: { label: string; items: string[] }[] }
  education: {
    title: string
    school: string
    degree: string
    focusTitle: string
    focusAreas: string[]
  }
  projects: {
    title: string
    filters: { key: string; label: string }[]
    categoryLabels: Record<Project["category"], string>
    items: Project[]
    source: string
    demo: string
  }
  experience: { title: string; milestones: Milestone[] }
  social: { title: string }
  footer: string
}

const en: Dict = {
  header: { tagline: "Portfolio · 2026" },
  hero: {
    badge: "Available for opportunities",
    role: "Full-Stack Web Developer & Informatics Engineering Student",
    bio: "Currently in my 6th semester of Informatics Engineering. Passionate about building scalable end-to-end web applications, interactive desktop systems, and exploring AI/Computer Vision solutions.",
    downloadCv: "Download CV",
    stats: [
      { value: "6th", label: "Semester" },
      { value: "3+", label: "Featured Projects" },
      { value: "Full-Stack", label: "Web · Desktop · AI" },
    ],
  },
  tech: {
    title: "Tech Stack",
    groups: [
      { label: "Front-End", items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"] },
      { label: "Back-End & DB", items: ["Node.js", "Express.js", "Java (NetBeans)", "MySQL"] },
      { label: "Tools", items: ["Git", "GitHub", "RESTful API"] },
    ],
  },
  education: {
    title: "Education",
    school: "Universitas Pamulang (UNPAM)",
    degree: "B.Sc. Informatics Engineering — Semester 6",
    focusTitle: "Focus Areas",
    focusAreas: ["Software Engineering", "Web Development", "Deep Learning"],
  },
  projects: {
    title: "Featured Projects",
    filters: [
      { key: "All", label: "All" },
      { key: "Web Development", label: "Web Development" },
      { key: "Desktop", label: "Desktop" },
      { key: "AI / Deep Learning", label: "AI / Deep Learning" },
    ],
    categoryLabels: {
      "Web Development": "Web / Full-Stack",
      Desktop: "Desktop App",
      "AI / Deep Learning": "AI / Computer Vision",
    },
    items: [
      {
        title: "Web-Based Tracking System (PT PTS)",
        category: "Web Development",
        description:
          "Developed a comprehensive tracking system using React.js for the front-end dashboard, integrated with a Node.js/Express.js REST API, and optimized MySQL database queries for real-time operational data monitoring.",
      },
      {
        title: "Rental & Salary Management System",
        category: "Desktop",
        description:
          "Built a robust desktop GUI application using Java (NetBeans Swing) with secure MySQL database connectivity and Object-Oriented Programming (OOP) architecture.",
      },
      {
        title: "Sign-to-Voice AI & Trash Classification",
        category: "AI / Deep Learning",
        description:
          "Trained a Deep Learning model utilizing Convolutional Neural Networks (CNN) for image recognition, showcasing skills in Digital Image Processing (spatial filtering, feature extraction).",
      },
    ],
    source: "Source Code",
    demo: "Live Demo",
  },
  experience: {
    title: "Experience & Campus",
    milestones: [
      {
        title: "Google Student Ambassador Program",
        detail: "Program Candidate — representing and fostering developer community initiatives on campus.",
      },
      {
        title: "Community Service (PKM)",
        detail: "Active involvement building school profile websites for local institutions.",
      },
    ],
  },
  social: { title: "Let's Connect" },
  footer: "Designed & built by Yoga May Suhendra · Full-Stack Web Developer",
}

const id: Dict = {
  header: { tagline: "Portofolio · 2026" },
  hero: {
    badge: "Terbuka untuk peluang",
    role: "Full-Stack Web Developer & Mahasiswa Teknik Informatika",
    bio: "Saat ini menempuh semester 6 Teknik Informatika. Antusias membangun aplikasi web end-to-end yang skalabel, sistem desktop interaktif, serta mengeksplorasi solusi AI/Computer Vision.",
    downloadCv: "Unduh CV",
    stats: [
      { value: "6", label: "Semester" },
      { value: "3+", label: "Proyek Unggulan" },
      { value: "Full-Stack", label: "Web · Desktop · AI" },
    ],
  },
  tech: {
    title: "Teknologi",
    groups: [
      { label: "Front-End", items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"] },
      { label: "Back-End & Basis Data", items: ["Node.js", "Express.js", "Java (NetBeans)", "MySQL"] },
      { label: "Perkakas", items: ["Git", "GitHub", "RESTful API"] },
    ],
  },
  education: {
    title: "Pendidikan",
    school: "Universitas Pamulang (UNPAM)",
    degree: "S1 Teknik Informatika — Semester 6",
    focusTitle: "Bidang Fokus",
    focusAreas: ["Rekayasa Perangkat Lunak", "Pengembangan Web", "Deep Learning"],
  },
  projects: {
    title: "Proyek Unggulan",
    filters: [
      { key: "All", label: "Semua" },
      { key: "Web Development", label: "Pengembangan Web" },
      { key: "Desktop", label: "Desktop" },
      { key: "AI / Deep Learning", label: "AI / Deep Learning" },
    ],
    categoryLabels: {
      "Web Development": "Web / Full-Stack",
      Desktop: "Aplikasi Desktop",
      "AI / Deep Learning": "AI / Computer Vision",
    },
    items: [
      {
        title: "Sistem Pelacakan Berbasis Web (PT PTS)",
        category: "Web Development",
        description:
          "Mengembangkan sistem pelacakan menyeluruh menggunakan React.js untuk dashboard front-end, terintegrasi dengan REST API Node.js/Express.js, serta mengoptimalkan query basis data MySQL untuk pemantauan data operasional secara real-time.",
      },
      {
        title: "Sistem Manajemen Sewa & Gaji",
        category: "Desktop",
        description:
          "Membangun aplikasi GUI desktop yang andal menggunakan Java (NetBeans Swing) dengan koneksi basis data MySQL yang aman dan arsitektur Pemrograman Berorientasi Objek (OOP).",
      },
      {
        title: "AI Isyarat-ke-Suara & Klasifikasi Sampah",
        category: "AI / Deep Learning",
        description:
          "Melatih model Deep Learning menggunakan Convolutional Neural Networks (CNN) untuk pengenalan citra, menunjukkan kemampuan dalam Pengolahan Citra Digital (spatial filtering, ekstraksi fitur).",
      },
    ],
    source: "Kode Sumber",
    demo: "Demo Langsung",
  },
  experience: {
    title: "Pengalaman & Kampus",
    milestones: [
      {
        title: "Google Student Ambassador Program",
        detail: "Kandidat Program — mewakili dan menumbuhkan inisiatif komunitas developer di kampus.",
      },
      {
        title: "Pengabdian Masyarakat (PKM)",
        detail: "Terlibat aktif membangun website profil sekolah untuk institusi lokal.",
      },
    ],
  },
  social: { title: "Mari Terhubung" },
  footer: "Dirancang & dibangun oleh Yoga May Suhendra · Full-Stack Web Developer",
}

const dictionaries: Record<Lang, Dict> = { en, id }

type LanguageContextValue = {
  lang: Lang
  t: Dict
  isAnimating: boolean
  toggle: () => void
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")
  const [isAnimating, setIsAnimating] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setLang = useCallback((next: Lang) => {
    setIsAnimating(true)
    if (timeout.current) clearTimeout(timeout.current)
    // Mid-fade: swap the language while text is invisible, then fade back in.
    timeout.current = setTimeout(() => {
      setLangState(next)
      setIsAnimating(false)
    }, 220)
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "id" : "en")
  }, [lang, setLang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, t: dictionaries[lang], isAnimating, toggle, setLang }),
    [lang, isAnimating, toggle, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
