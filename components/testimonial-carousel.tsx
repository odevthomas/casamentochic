"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// Define fixed image paths to avoid any empty strings
const WEDDING_IMAGES = ["/images/wedding1.png", "/images/wedding2.png", "/images/wedding3.png", "/images/wedding4.png"]

const testimonials = [
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
    name: "Fernanda Oliveira",
    role: "Noiva de Janeiro/2024",
    image: WEDDING_IMAGES[3],
    content:
      "Meu casamento foi exatamente como sonhei, elegante e sofisticado, mas com um orçamento que cabia no meu bolso. Recomendo demais!",
  },
]

export default function TestimonialCarousel() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="py-10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#cfa144]">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#5c5c5c]">{testimonial.name}</h3>
                  <p className="text-sm text-[#8c8c8c]">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-[#5c5c5c] italic flex-grow">{testimonial.content}</p>
              <div className="mt-4 flex justify-end">
                <svg className="w-5 h-5 text-[#cfa144]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 text-[#cfa144]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 text-[#cfa144]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 text-[#cfa144]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg className="w-5 h-5 text-[#cfa144]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="testimonial-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
        <ChevronLeft className="w-6 h-6 text-[#cfa144]" />
        <span className="sr-only">Anterior</span>
      </button>

      <button className="testimonial-next absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
        <ChevronRight className="w-6 h-6 text-[#cfa144]" />
        <span className="sr-only">Próximo</span>
      </button>
    </div>
  )
}
