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

// Add a DEFAULT_IMAGE constant at the top of the file, after WEDDING_IMAGES
const DEFAULT_IMAGE = "/placeholder.svg?height=400&width=600"

// Create an array of images with guaranteed valid paths
const images = [
  {
    src: WEDDING_IMAGES[0],
    alt: "Decoração elegante de casamento",
    title: "Decoração Minimalista",
  },
  {
    src: WEDDING_IMAGES[1],
    alt: "Buquê de noiva",
    title: "Buquês Delicados",
  },
  {
    src: WEDDING_IMAGES[2],
    alt: "Mesa de convidados",
    title: "Mesas Sofisticadas",
  },
  {
    src: WEDDING_IMAGES[3],
    alt: "Vestido de noiva",
    title: "Vestidos Elegantes",
  },
  {
    src: WEDDING_IMAGES[0],
    alt: "Cerimônia ao ar livre",
    title: "Cerimônias Especiais",
  },
]

export default function ImageCarousel() {
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
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        className="py-10"
      >
        {images.map((image, index) => {
          // Ensure we have a valid image path
          const imageSrc = image.src || DEFAULT_IMAGE

          return (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="aspect-[4/3] relative">
                  {/* Only render the Image if we have a valid source */}
                  {imageSrc && (
                    <Image
                      src={imageSrc || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-serif text-xl">{image.title}</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <button className="swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
        <ChevronLeft className="w-6 h-6 text-[#cfa144]" />
        <span className="sr-only">Anterior</span>
      </button>

      <button className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
        <ChevronRight className="w-6 h-6 text-[#cfa144]" />
        <span className="sr-only">Próximo</span>
      </button>
    </div>
  )
}
