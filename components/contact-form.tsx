"use client"

import type React from "react"

import { useState } from "react"

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)

    if (onSuccess) {
      setTimeout(() => {
        onSuccess()
      }, 1500)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <svg
          className="w-16 h-16 text-green-500 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 className="font-serif text-xl text-[#5c5c5c] mb-2">Obrigado!</h3>
        <p className="text-[#5c5c5c]">Recebemos suas informações e entraremos em contato em breve.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-[#5c5c5c] mb-1 font-serif">
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b8a369]"
          placeholder="Seu nome completo"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[#5c5c5c] mb-1 font-serif">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#b8a369]"
          placeholder="seu@email.com"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#b8a369] hover:bg-[#a08c4a] text-white font-serif py-2 px-4 rounded-md transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}
