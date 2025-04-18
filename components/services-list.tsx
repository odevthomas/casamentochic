import Image from "next/image"
import Link from "next/link"

// Define fixed image paths to avoid any empty strings
const WEDDING_IMAGES = ["/images/wedding1.png", "/images/wedding2.png", "/images/wedding3.png", "/images/wedding4.png"]

// Add a DEFAULT_IMAGE constant at the top of the file, after WEDDING_IMAGES
const DEFAULT_IMAGE = "/placeholder.svg?height=300&width=500"

const services = [
  {
    id: 1,
    title: "Consultoria Personalizada",
    description: "Atendimento individual para planejar seu casamento com elegância e economia.",
    image: WEDDING_IMAGES[0],
    link: "/servicos/consultoria",
  },
  {
    id: 2,
    title: "Curso Online",
    description: "Aprenda a organizar seu casamento do zero com nosso curso completo.",
    image: WEDDING_IMAGES[1],
    link: "/servicos/curso",
  },
  {
    id: 3,
    title: "E-book de Decoração",
    description: "Ideias e dicas para uma decoração sofisticada com orçamento controlado.",
    image: WEDDING_IMAGES[2],
    link: "/servicos/ebook",
  },
  {
    id: 4,
    title: "Assessoria de Fornecedores",
    description: "Indicação dos melhores fornecedores com preços especiais para nossas noivas.",
    image: WEDDING_IMAGES[3],
    link: "/servicos/fornecedores",
  },
  {
    id: 5,
    title: "Planilha de Orçamento",
    description: "Controle todos os gastos do seu casamento com nossa planilha exclusiva.",
    image: WEDDING_IMAGES[0],
    link: "/servicos/planilha",
  },
  {
    id: 6,
    title: "Mentoria VIP",
    description: "Acompanhamento completo do planejamento até o grande dia.",
    image: WEDDING_IMAGES[1],
    link: "/servicos/mentoria",
  },
]

export default function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        // Ensure we have a valid image path
        const serviceSrc = service.image || DEFAULT_IMAGE

        return (
          <Link href={service.link} key={service.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg h-full flex flex-col">
              <div className="relative h-48">
                {serviceSrc ? (
                  <Image
                    src={serviceSrc || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">{service.title}</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl text-[#5c5c5c] mb-2 group-hover:text-[#b8a369] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#5c5c5c] mb-4 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[#b8a369] font-serif">
                    Saiba mais
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
