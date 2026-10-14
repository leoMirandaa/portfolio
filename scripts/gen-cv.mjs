import { writeFileSync } from "node:fs"

// Build a minimal, valid single-page PDF with correct xref offsets.
const lines = [
  { t: "Yoga May Suhendra", size: 20, dy: 0 },
  { t: "Full-Stack Web Developer & Informatics Engineering Student", size: 11, dy: 28 },
  { t: "Email: yogamaysuhendra@gmail.com  |  GitHub: github.com/yogamaysuhendra", size: 10, dy: 20 },
  { t: "", size: 10, dy: 24 },
  { t: "EDUCATION", size: 13, dy: 8 },
  { t: "Universitas Pamulang (UNPAM)", size: 11, dy: 20 },
  { t: "S1 Teknik Informatika - Semester 6", size: 10, dy: 16 },
  { t: "Focus: Software Engineering, Web Development, Deep Learning", size: 10, dy: 16 },
  { t: "", size: 10, dy: 24 },
  { t: "TECH STACK", size: 13, dy: 8 },
  { t: "Front-End: React.js, Next.js, Tailwind CSS, JavaScript", size: 10, dy: 20 },
  { t: "Back-End & DB: Node.js, Express.js, Java (NetBeans), MySQL", size: 10, dy: 16 },
  { t: "Tools: Git, GitHub, RESTful API", size: 10, dy: 16 },
  { t: "", size: 10, dy: 24 },
  { t: "PROJECTS", size: 13, dy: 8 },
  { t: "Web-Based Tracking System (PT PTS) - React.js, Node/Express, MySQL", size: 10, dy: 20 },
  { t: "Rental & Salary Management System - Java NetBeans Swing, MySQL, OOP", size: 10, dy: 16 },
  { t: "Sign-to-Voice AI & Trash Classification - CNN, Deep Learning", size: 10, dy: 16 },
  { t: "", size: 10, dy: 24 },
  { t: "EXPERIENCE", size: 13, dy: 8 },
  { t: "Google Student Ambassador Program Candidate", size: 10, dy: 20 },
  { t: "Community Service (PKM) - building school profile websites", size: 10, dy: 16 },
]

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")

let stream = "BT\n72 740 Td\n"
lines.forEach((l, i) => {
  if (i > 0) stream += `0 -${l.dy} Td\n`
  stream += `/F1 ${l.size} Tf\n(${esc(l.t)}) Tj\n`
})
stream += "ET"

const objects = []
objects.push("<< /Type /Catalog /Pages 2 0 R >>")
objects.push("<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
objects.push("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>")
objects.push(`<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`)
objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

let pdf = "%PDF-1.4\n"
const offsets = []
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf))
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`
})

const xrefStart = Buffer.byteLength(pdf)
pdf += `xref\n0 ${objects.length + 1}\n`
pdf += "0000000000 65535 f \n"
offsets.forEach((o) => {
  pdf += `${String(o).padStart(10, "0")} 00000 n \n`
})
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

writeFileSync("public/Yoga-May-Suhendra-CV.pdf", pdf, "latin1")
console.log("CV PDF generated")
