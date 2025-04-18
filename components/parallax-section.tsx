"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type React from "react"

const DEFAULT_BG = "linear-gradient(to right, #333, #111)"

interface ParallaxSectionProps {
  imageUrl?: string
  height?: string
  children?: React.ReactNode
  overlayOpacity?: number
  reverse?: boolean
}

export default function ParallaxSection({
  imageUrl,
  height = "h-[90vh]",
  children,
  overlayOpacity = 0.3,
  reverse = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], reverse ? [0, 100] : [0, -100])

  const hasValidImage = imageUrl && imageUrl.trim() !== ""
  const backgroundStyle = hasValidImage
    ? { backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
    : { background: DEFAULT_BG }

  // Força atualização ao montar (em casos onde a posição inicial não ativa o scroll)
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden w-full ${height}`}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="absolute inset-0"
          style={backgroundStyle}
        />
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
