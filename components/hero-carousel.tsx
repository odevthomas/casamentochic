"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "./language-provider"

const WEDDING_IMAGES = [
  "/image/Hero/hero1.webp",
  "/image/Hero/hero2.webp",
  "/image/Hero/hero3.webp",
  "/image/Hero/hero4.webp",
  "/image/Hero/hero5.webp",
  "/image/Hero/hero6.webp",
]

const DEFAULT_IMAGE = "/placeholder.svg?height=1080&width=1920"

const slides = [
  {
    id: 1,
    image: WEDDING_IMAGES[0],
    titleKey: "hero.title1",
    subtitleKey: "hero.subtitle1",
  },
  {
    id: 2,
    image: WEDDING_IMAGES[1],
    titleKey: "hero.title2",
    subtitleKey: "hero.subtitle2",
  },
  {
    id: 3,
    image: WEDDING_IMAGES[2],
    titleKey: "hero.title3",
    subtitleKey: "hero.subtitle3",
  },
  {
    id: 4,
    image: WEDDING_IMAGES[3],
    titleKey: "hero.title4",
    subtitleKey: "hero.subtitle4",
  },
  {
    id: 5,
    image: WEDDING_IMAGES[4],
    titleKey: "hero.title5",
    subtitleKey: "hero.subtitle5",
  },
  {
    id: 6,
    image: WEDDING_IMAGES[5],
    titleKey: "hero.title6",
    subtitleKey: "hero.subtitle6",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
    setAutoplay(false)
    setTimeout(() => setAutoplay(true), 5000)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const currentSlide = slides[current] || slides[0]
  const currentImagePath = currentSlide?.image || DEFAULT_IMAGE

  if (!mounted) return null

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{ y }}
        >
          {currentImagePath && (
            <Image
              src={currentImagePath}
              alt="Casamento elegante"
              fill
              priority
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-start pt-[20vh] text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {t(currentSlide.titleKey)}
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-white mb-8">
              {t(currentSlide.subtitleKey)}
            </p>
            <button className="bg-[#cfa144] hover:bg-[#a08c4a] text-white font-serif py-3 px-8 rounded-md transition-colors text-lg">
              {t("hero.button")}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="sr-only">Anterior</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
        <span className="sr-only">Próximo</span>
      </button>

      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#cfa144] w-10" : "bg-white/50 hover:bg-white/80"
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
