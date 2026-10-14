import { LanguageProvider } from "@/lib/i18n"
import { Portfolio } from "@/components/portfolio/portfolio"

export default function Page() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}
