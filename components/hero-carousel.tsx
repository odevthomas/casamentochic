"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const WEDDING_IMAGES = [
  "/Image/Hero/hero10.webp",
  "/Image/Hero/hero3.webp",
  "/Image/Hero/hero7.webp",
  "/Image/Hero/hero5.webp",
  "/Image/Hero/hero9.webp",
];

const DEFAULT_IMAGE = "/placeholder.svg?height=1080&width=1920";

const slides = [
  {
    id: 1,
    image: WEDDING_IMAGES[0],
    title: "Casamento Chic, pagando pouco",
    subtitle: "Faça do seu dia especial um momento único e acessível",
  },
  {
    id: 2,
    image: WEDDING_IMAGES[1],
    title: "Seu casamento chic com 50% de desconto",
    subtitle: "Aproveite nossa promoção exclusiva e torne seu casamento inesquecível",
  },
  {
    id: 3,
    image: WEDDING_IMAGES[2],
    title: "Casamento dos sonhos em grande estilo",
    subtitle: "Realize o casamento dos seus sonhos com um orçamento acessível",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goToSlide = (index: number) => {
    setCurrent(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => nextSlide(), 8000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const currentSlide = slides[current] || slides[0];
  const currentImagePath = currentSlide?.image || DEFAULT_IMAGE;

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
          style={{ y }}
        >
          <Image
            src={currentImagePath}
            alt="Casamento elegante"
            fill
            priority={current === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Textos */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-wider">
              {currentSlide.title}
            </h1>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white mb-8 opacity-90">
              {currentSlide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 ease-in-out"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 ease-in-out"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bolinhas */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-[#cfa144] w-10" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
