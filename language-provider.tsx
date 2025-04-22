"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "pt" | "en"

type Translations = {
  [key: string]: {
    pt: string
    en: string
  }
}

const translations: Translations = {
  // Header
  "nav.home": { pt: "Início", en: "Home" },
  "nav.about": { pt: "Sobre", en: "About" },
  "nav.team": { pt: "Equipe", en: "Team" },
  "nav.gallery": { pt: "Galeria", en: "Gallery" },
  "nav.services": { pt: "Serviços", en: "Services" },
  "nav.plans": { pt: "Planos", en: "Plans" },
  "nav.blog": { pt: "Blog", en: "Blog" },
  "nav.contact": { pt: "Contato", en: "Contact" },

  // Hero
  "hero.title": { pt: "CASAMENTO CHIC PAGANDO POUCO", en: "ELEGANT WEDDING ON A BUDGET" },
  "hero.subtitle": {
    pt: "TE ENSINO A FAZER UM CASAMENTO CHIC PAGANDO POUCO. TOPA?",
    en: "I'LL TEACH YOU HOW TO HAVE AN ELEGANT WEDDING WITHOUT BREAKING THE BANK. READY?",
  },
  "hero.button": { pt: "EU VOU CASAR", en: "I'M GETTING MARRIED" },

  // About
  "about.title": { pt: "SOBRE NÓS", en: "ABOUT US" },
  "about.description": {
    pt: "Ajudamos noivas a realizarem o casamento dos sonhos com elegância e sofisticação, sem comprometer o orçamento.",
    en: "We help brides achieve their dream wedding with elegance and sophistication, without compromising their budget.",
  },
  "about.whatwedo.title": { pt: "O QUE FAZEMOS", en: "WHAT WE DO" },
  "about.whatwedo.description": {
    pt: "Oferecemos consultoria especializada, cursos e recursos para ajudar noivas a planejarem casamentos elegantes com orçamento controlado. Nossa missão é transformar o sonho do casamento perfeito em realidade, sem comprometer suas finanças.",
    en: "We offer specialized consulting, courses, and resources to help brides plan elegant weddings with a controlled budget. Our mission is to transform the dream of a perfect wedding into reality, without compromising your finances.",
  },

  // Services
  "services.title": { pt: "SERVIÇOS", en: "SERVICES" },
  "services.description": {
    pt: "Conheça nossas soluções para realizar o casamento dos seus sonhos sem comprometer seu orçamento.",
    en: "Discover our solutions to achieve the wedding of your dreams without compromising your budget.",
  },
  "services.learnmore": { pt: "Saiba mais", en: "Learn more" },

  // Contact
  "contact.title": { pt: "CONTATO", en: "CONTACT" },
  "contact.description": {
    pt: "Entre em contato conosco para tirar suas dúvidas ou agendar uma consultoria.",
    en: "Contact us to ask questions or schedule a consultation.",
  },
  "contact.info.title": { pt: "Informações de Contato", en: "Contact Information" },
  "contact.info.description": {
    pt: "Estamos disponíveis para ajudar você a realizar o casamento dos seus sonhos com elegância e economia.",
    en: "We are available to help you achieve the wedding of your dreams with elegance and economy.",
  },
  "contact.form.name": { pt: "Nome", en: "Name" },
  "contact.form.email": { pt: "E-mail", en: "Email" },
  "contact.form.phone": { pt: "Telefone", en: "Phone" },
  "contact.form.message": { pt: "Mensagem", en: "Message" },
  "contact.form.submit": { pt: "Enviar Mensagem", en: "Send Message" },
  "contact.form.sending": { pt: "Enviando...", en: "Sending..." },
  "contact.form.success": { pt: "Mensagem Enviada!", en: "Message Sent!" },
  "contact.form.success.description": {
    pt: "Obrigado pelo contato. Responderemos em breve.",
    en: "Thank you for your message. We will respond shortly.",
  },

  // Footer
  "footer.copyright": {
    pt: "Todos os direitos reservados.",
    en: "All rights reserved.",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    return {
      language: "pt" as Language,
      setLanguage: (lang: Language) => {
        console.warn("setLanguage called outside of LanguageProvider")
      },
      t: (key: string) => {
        console.warn(`Translation key "${key}" requested outside of LanguageProvider`)
        if (translations[key]) {
          return translations[key].pt
        }
        return key
      },
    }
  }
  return context
}
