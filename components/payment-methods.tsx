"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function PaymentMethods() {
  const paymentMethods = [
    {
      name: "Mercado Pago",
      icon: "/images/mercado-pago.png",
    },
    {
      name: "Stripe",
      icon: "/images/stripe.png",
    },
    {
      name: "Hotmart",
      icon: "/images/hotmart.png",
    },
    {
      name: "Cartão de Crédito",
      icon: "/images/credit-card.png",
    },
    {
      name: "Pix",
      icon: "/images/pix.png",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Formas de Pagamento</h2>
          <p className="text-gray-600">Aceitamos diversas formas de pagamento para sua conveniência</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="relative h-12 w-32 mb-2">
                <Image
                  src={method.icon || "/placeholder.svg?height=48&width=128"}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-500">{method.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
