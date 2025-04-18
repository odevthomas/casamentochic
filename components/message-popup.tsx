"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function MessagePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 max-w-sm bg-white rounded-lg shadow-lg border border-[#e8e6e1] p-4 transition-all duration-300 ${
        isClosing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <button onClick={handleClose} className="absolute top-2 right-2 text-[#5c5c5c] hover:text-[#cfa144]">
        <X className="w-4 h-4" />
        <span className="sr-only">Fechar</span>
      </button>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          <span className="text-2xl">✨</span>
        </div>
        <div>
          <p className="font-serif text-[#5c5c5c] mb-2">Pronta para realizar o seu sonho? Estamos aqui com você!</p>
          <button onClick={handleClose} className="text-[#cfa144] hover:text-[#cfa144] text-sm font-serif">
            Agendar consultoria gratuita
          </button>
        </div>
      </div>
    </div>
  )
}
