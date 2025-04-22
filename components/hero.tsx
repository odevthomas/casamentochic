"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "react-feather";

import ContactForm from "./contact-form";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/hero/hero1.png"
          alt="Casamento elegante"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }} // Aumentei o tempo de transição
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            TE ENSINO A FAZER UM CASAMENTO CHIC PAGANDO POUCO
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-white mb-8">TOPA?</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#cfa144] hover:bg-[#a08c4a] text-white font-serif py-3 px-8 rounded-md transition-colors text-lg"
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
              <button
                onClick={() => setShowForm(false)}
                className="text-[#5c5c5c] hover:text-[#cfa144]"
              >
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
  );
}
