import Image from "next/image"
import Link from "next/link"

// Definindo uma imagem padrão para casos de erro
const DEFAULT_IMAGE = "/placeholder.svg?height=100&width=200"

const paymentMethods = [
  {
    id: 1,
    name: "Cartão de Crédito",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    description: "Parcele em até 12x",
  },
  {
    id: 2,
    name: "Pix",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    description: "Pagamento instantâneo",
  },
  {
    id: 3,
    name: "Transferência Bancária",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="7" y1="15" x2="7" y2="15" />
        <line x1="12" y1="15" x2="12" y2="15" />
      </svg>
    ),
    description: "TED ou DOC",
  },
]

export default function PaymentSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">FORMAS DE PAGAMENTO</h2>
          <div className="w-20 h-1 bg-[#b8a369] mx-auto"></div>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Oferecemos diversas opções de pagamento para sua comodidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-[#f8f7f4] rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#b8a369] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {method.icon}
              </div>
              <h3 className="font-serif text-xl text-[#5c5c5c] mb-2">{method.name}</h3>
              <p className="text-[#8c8c8c]">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
