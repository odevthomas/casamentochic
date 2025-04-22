"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useLanguage } from "../language-provider"

export default function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only run on client-side
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">
          {mounted ? t("contact.title") : "CONTATO"}
        </h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          {mounted
            ? t("contact.description")
            : "Entre em contato conosco para tirar suas dúvidas ou agendar uma consultoria."}
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
          <h3 className="font-serif text-2xl text-[#5c5c5c] mb-6">Envie uma Mensagem</h3>

          {submitted ? (
            <div className="text-center py-8">
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
              <h4 className="font-serif text-xl text-[#5c5c5c] mb-2">
                {mounted ? t("contact.form.success") : "Mensagem Enviada!"}
              </h4>
              <p className="text-[#5c5c5c]">
                {mounted ? t("contact.form.success.description") : "Obrigado pelo contato. Responderemos em breve."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#5c5c5c] mb-1 font-serif">
                  {mounted ? t("contact.form.name") : "Nome"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#5c5c5c] mb-1 font-serif">
                  {mounted ? t("contact.form.email") : "E-mail"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#5c5c5c] mb-1 font-serif">
                  {mounted ? t("contact.form.phone") : "Telefone"}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#5c5c5c] mb-1 font-serif">
                  {mounted ? t("contact.form.message") : "Mensagem"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-[#e8e6e1] rounded-md focus:outline-none focus:ring-2 focus:ring-[#cfa144]"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#cfa144] hover:bg-[#cfa144] text-white font-serif py-3 px-4 rounded-md transition-colors disabled:opacity-70"
              >
                {isSubmitting
                  ? mounted
                    ? t("contact.form.sending")
                    : "Enviando..."
                  : mounted
                    ? t("contact.form.submit")
                    : "Enviar Mensagem"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
