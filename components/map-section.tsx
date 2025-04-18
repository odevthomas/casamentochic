"use client"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

const WEDDING_IMAGES = ["/Mapas.jpg", "/Mapas.jpg"]
const DEFAULT_IMAGE = "/Mapas.jpg"

const AnimatedNumber = ({ target }: { target: number }) => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000 // 2 segundos
    const increment = target / (duration / 50)

    const interval = setInterval(() => {
      start += increment
      if (start >= target) {
        start = target
        clearInterval(interval)
      }
      setValue(Math.floor(start))
    }, 50)

    return () => clearInterval(interval)
  }, [target])

  return <motion.div className="text-[#cfa144] text-4xl font-serif mb-2">{value}+</motion.div>
}

export default function MapSection() {
  const mapImageSrc = WEDDING_IMAGES[2] || DEFAULT_IMAGE

  return (
    <div className="container mx-auto px-4 py-32 min-h-[1200px]">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">ONDE ATUAMOS</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Ajudamos noivas em todo o Brasil e no exterior a realizarem o casamento dos seus sonhos.
        </p>
      </div>

      <div className="md:p-10">
        <div className="relative h-[900px] w-full">
          {mapImageSrc && (
            <Image src={mapImageSrc} alt="Mapa de atuação" fill className="object-contain" />
          )}

          <div className="absolute inset-0">
            {/* ... seus pontos de mapa ... */}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <AnimatedNumber target={15} />
            <p className="text-[#5c5c5c]">Cidades no Brasil</p>
          </div>
          <div className="text-center">
            <AnimatedNumber target={8} />
            <p className="text-[#5c5c5c]">Países</p>
          </div>
          <div className="text-center">
            <AnimatedNumber target={500} />
            <p className="text-[#5c5c5c]">Casamentos realizados</p>
          </div>
        </div>
      </div>
    </div>
  )
}
