"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import FormModal from "@/components/form-modal";

export default function AboutSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">
            Oi Noiva! Como você se sente?
          </h2>
          <div className="w-20 h-1 bg-[#cfa144] mx-auto" />
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Parabéns, você disse SIM! E agora está se perguntando: "Por onde começo?" A resposta é: por aqui
            mesmo! Você não vai ficar perdida, com dúvidas ou sem saber o que fazer.
          </p>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Vou te ensinar a organizar um casamento elegante, o casamento dos seus sonhos, gastando até 50% menos. Nosso método já ajudou mais de 500 noivas a economizarem sem abrir mão da qualidade e sofisticação.
          </p>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Clique no botão abaixo e vamos juntas criar o casamento mais incrível que você já viu!
          </p>
          <div className="mt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-[#cfa144] hover:bg-[#a08c4a] text-white font-serif py-3 px-8 rounded-md transition-colors text-lg"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      {/* Modal do Formulário */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
 
      
      <div className="text-center mt-10 mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">SOBRE NÓS</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto" />
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Ajudamos noivas a realizarem o casamento dos sonhos com elegância e sofisticação, sem comprometer o orçamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[300px] md:h-[600px] bg-[#f8f7f4] rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src="/Image/Hero/hero-horizontal.webp"
            alt="Casamento Chic"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          {[
            {
              title: "O QUE FAZEMOS",
              text: "Oferecemos consultoria especializada, cursos e recursos para ajudar noivas a planejarem casamentos elegantes com orçamento controlado. Nossa missão é transformar o sonho do casamento perfeito em realidade, sem comprometer suas finanças.",
            },
            {
              title: "COMO TRABALHAMOS",
              text: "Através de um método exclusivo, ensinamos estratégias para economizar em cada aspecto do casamento, mantendo a elegância e sofisticação. Compartilhamos dicas de negociação com fornecedores, alternativas criativas para decoração e soluções inteligentes para cada detalhe.",
            },
            {
              title: "POR QUE NOS ESCOLHER",
              text: "Com anos de experiência no mercado de casamentos, já ajudamos centenas de noivas a economizarem até 40% no orçamento total, sem abrir mão da qualidade. Nossa abordagem personalizada garante que cada casamento seja único e especial, refletindo a personalidade dos noivos.",
            },
          ].map(({ title, text }, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="font-serif text-2xl text-[#5c5c5c] mb-4">{title}</h3>
              <p className="text-[#5c5c5c]">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        {[
          {
            title: "PAIXÃO",
            description: "Amamos o que fazemos e nos dedicamos a cada projeto com entusiasmo e comprometimento.",
            icon: (
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            ),
          },
          {
            title: "QUALIDADE",
            description: "Mantemos o padrão de excelência em todos os nossos serviços e recomendações.",
            icon: (
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            ),
          },
          {
            title: "PERSONALIZAÇÃO",
            description: "Cada casal é único, por isso oferecemos soluções personalizadas para cada projeto.",
            icon: (
              <>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </>
            ),
          },
        ].map((item, idx) => (
          <div key={idx} className="text-center p-6">
            <div className="w-16 h-16 bg-[#cfa144] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[#5c5c5c] mb-2">{item.title}</h3>
            <p className="text-[#5c5c5c]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
