"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "./language-provider"

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Garantir que o componente só seja renderizado no lado do cliente
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDropdown = () => setIsOpen(prevState => !prevState)

  const selectLanguage = (lang: "pt" | "en") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  // Evitar renderização durante a hidratação inicial
  if (!mounted) {
    return (
      <div className="flex items-center space-x-1 text-[#5c5c5c]">
        <span>PT</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-[#5c5c5c] hover:text-[#cfa144] transition-colors"
      >
        <span>{language.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white shadow-md rounded-md overflow-hidden z-50">
          <button
            onClick={() => selectLanguage("pt")}
            className={`block w-full text-left px-4 py-2 text-sm ${language === "pt" ? "bg-[#f8f7f4] text-[#cfa144]" : "text-[#5c5c5c] hover:bg-[#f8f7f4]"}`}
          >
            Português
          </button>
          <button
            onClick={() => selectLanguage("en")}
            className={`block w-full text-left px-4 py-2 text-sm ${language === "en" ? "bg-[#f8f7f4] text-[#cfa144]" : "text-[#5c5c5c] hover:bg-[#f8f7f4]"}`}
          >
            English
          </button>
        </div>
      )}
    </div>
  )
}
