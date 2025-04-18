"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"

const WEDDING_IMAGES = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521651201144-b62a9f99be46?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1920&auto=format&fit=crop",
]

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop"

const textTestimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Noiva de Junho/2023",
    image: WEDDING_IMAGES[0],
    content:
      "Consegui realizar o casamento dos meus sonhos gastando metade do que imaginava. As dicas foram essenciais para economizar sem perder a elegância.",
  },
  {
    id: 2,
    name: "Carolina Mendes",
    role: "Noiva de Outubro/2023",
    image: WEDDING_IMAGES[1],
    content:
      "Meus convidados ficaram impressionados com a decoração e não acreditaram quando contei quanto gastei. Obrigada por todo o suporte!",
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Noiva de Março/2024",
    image: WEDDING_IMAGES[2],
    content:
      "As consultorias personalizadas fizeram toda a diferença. Consegui negociar com os fornecedores e economizar muito sem abrir mão da qualidade.",
  },
  {
    id: 4,
    name: "Lívia Rocha",
    role: "Noiva de Maio/2024",
    image: WEDDING_IMAGES[3],
    content:
      "Nunca imaginei que fosse possível organizar tudo com tanta leveza e praticidade. Vocês foram incríveis!",
  },
  {
    id: 5,
    name: "Ana Beatriz",
    role: "Noiva de Janeiro/2024",
    image: WEDDING_IMAGES[4],
    content:
      "Super recomendo! Profissionalismo e carinho em cada detalhe do atendimento.",
  },
  {
    id: 6,
    name: "Camila Andrade",
    role: "Noiva de Agosto/2023",
    image: WEDDING_IMAGES[5],
    content:
      "Foi uma experiência maravilhosa. Sem vocês, eu teria gastado o triplo!",
  },
]

const videoTestimonials = [
  {
    id: 1,
    name: "Fernanda e Ricardo",
    date: "Casamento em Dezembro/2023",
    thumbnail: WEDDING_IMAGES[0],
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4", // exemplo
  },
  {
    id: 2,
    name: "Amanda e Carlos",
    date: "Casamento em Fevereiro/2024",
    thumbnail: WEDDING_IMAGES[1],
    videoUrl: "https://www.youtube.com/embed/TiC7_167hQ8", // exemplo
  },
  {
    id: 3,
    name: "Patrícia e João",
    date: "Casamento em Abril/2023",
    thumbnail: WEDDING_IMAGES[2],
    videoUrl: "https://www.youtube.com/embed/gM6vKJrE8nc", // exemplo
  },
]

export default function TestimonialsSection() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const itemsPerGroup = 3
  const totalGroups = Math.ceil(textTestimonials.length / itemsPerGroup)

  const prevGroup = () => {
    setActiveGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1))
  }

  const nextGroup = () => {
    setActiveGroup((prev) => (prev === totalGroups - 1 ? 0 : prev + 1))
  }

  const startIndex = activeGroup * itemsPerGroup
  const visibleTestimonials = textTestimonials.slice(startIndex, startIndex + itemsPerGroup)

  return (
    <div className="py-10 relative">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">DEPOIMENTOS</h2>
          <div className="w-20 h-1 bg-[#b8a369] mx-auto"></div>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Veja o que nossas noivas dizem sobre nossa consultoria e serviços.
          </p>
        </div>

        {/* Text Testimonials */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-4">
                  <Image
                    src={testimonial.image || DEFAULT_IMAGE}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <svg className="w-8 h-8 text-[#b8a369]/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-22 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-10z" />
                </svg>
                <p className="text-[#5c5c5c] italic text-sm mb-4">{testimonial.content}</p>
                <h4 className="font-serif text-lg text-[#5c5c5c]">{testimonial.name}</h4>
                <p className="text-[#8c8c8c] text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>

          {/* Navegação */}
          <button
            onClick={prevGroup}
            className="absolute top-1/2 left-0 -translate-y-1/2 md:-left-5 bg-white rounded-full p-2 shadow-md text-[#b8a369] hover:text-[#cfa144] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextGroup}
            className="absolute top-1/2 right-0 -translate-y-1/2 md:-right-5 bg-white rounded-full p-2 shadow-md text-[#b8a369] hover:text-[#cfa144] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {videoTestimonials.map((video) => (
            <div
              key={video.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
              onClick={() => setSelectedVideo(video.id)}
            >
              <Image
                src={video.thumbnail}
                alt={video.name}
                width={400}
                height={250}
                className="object-cover w-full h-56"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="bg-white p-4">
                <h4 className="font-serif text-lg text-[#5c5c5c]">{video.name}</h4>
                <p className="text-[#8c8c8c] text-sm">{video.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Vídeo */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              width="100%"
              height="480"
              src={videoTestimonials.find((v) => v.id === selectedVideo)?.videoUrl}
              title="Vídeo do depoimento"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}
