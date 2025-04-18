"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h3 className="font-serif text-2xl text-[#5c5c5c] mb-4">
              {mounted ? t("contact.info.title") : "Informações de Contato"}
            </h3>
            <p className="text-[#5c5c5c] mb-6">
              {mounted
                ? t("contact.info.description")
                : "Estamos disponíveis para ajudar você a realizar o casamento dos seus sonhos com elegância e economia."}
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#f8f7f4] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#cfa144]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#5c5c5c]">Telefone</h4>
                  <p className="text-[#8c8c8c]">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#f8f7f4] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#cfa144]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#5c5c5c]">E-mail</h4>
                  <p className="text-[#8c8c8c]">contato@casamentochic.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#f8f7f4] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#cfa144]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#5c5c5c]">Endereço</h4>
                  <p className="text-[#8c8c8c]">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-md p-8">
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
                  className="w-full bg-[#cfa144] hover:bg-[#a08c4a] text-white font-serif py-3 px-4 rounded-md transition-colors disabled:opacity-70"
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
    </div>
  )
}
