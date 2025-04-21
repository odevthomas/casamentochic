"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

import ContactForm from "./contact-form"

const DEFAULT_IMAGE = "/Image/Hero/hero-horizontal.jpeg"

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  // Ensure we have a valid image path
  const imageSrc = DEFAULT_IMAGE

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          {/* Título animado */}
          <motion.h1
            className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30, scale: 0.9, rotate: -10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            CASAMENTO CHIC PAGANDO POUCO
          </motion.h1>

          <p className="font-serif text-2xl md:text-3xl text-white mb-8">
            TE ENSINO A FAZER UM CASAMENTO CHIC PAGANDO POUCO. TOPA?
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#cfa144] hover:bg-[#cfa144] text-white font-serif py-3 px-8 rounded-md transition-colors text-lg"
          >
            EU VOU CASAR
          </button>
        </motion.div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-2xl text-[#5c5c5c]">Vamos começar</h3>
              <button onClick={() => setShowForm(false)} className="text-[#5c5c5c] hover:text-[#cfa144]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <ContactForm onSuccess={() => setShowForm(false)} />
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  )
}
  