"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LanguageSwitcherProps {
  onChange: (language: string) => void
  currentLanguage: string
}

export default function LanguageSwitcher({ onChange, currentLanguage }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full overflow-hidden ${currentLanguage === "pt" ? "ring-2 ring-amber-500" : ""}`}
        onClick={() => onChange("pt")}
        aria-label="Português"
      >
        <Image src="/images/flag-br.svg" alt="Português" width={24} height={24} />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className={`rounded-full overflow-hidden ${currentLanguage === "en" ? "ring-2 ring-amber-500" : ""}`}
        onClick={() => onChange("en")}
        aria-label="English"
      >
        <Image src="/images/flag-us.svg" alt="English" width={24} height={24} />
      </Button>
    </div>
  )
}
