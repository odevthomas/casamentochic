import Image from "next/image"
import { motion } from "framer-motion"

const DEFAULT_IMAGE = "/placeholder.svg"

const paymentMethods = [
  {
   
    icon: "/mercado-pago.svg",
  },
  {
   
    icon: "/pix-banco-central.svg",
  },
  {
    icon: "/hotmart.svg",
  },
]

export default function PaymentSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">FORMAS DE PAGAMENTO</h2>
          <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Oferecemos diversas opções de pagamento para sua comodidade.
          </p>
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
              <div className="relative h-32 w-52 mb-2">
                <Image
                  src={method.icon || DEFAULT_IMAGE}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-500">{method.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
