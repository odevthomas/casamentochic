import Image from "next/image"
import Link from "next/link"

const WEDDING_IMAGES = [
  "/Image/Capas/capa1.webp",
  "/Image/Capas/capa2.webp",
  "/Image/Capas/capa3.webp",
  "/Image/Capas/capa4.webp"
]

const GALLERY_IMAGES = [
  "/Image/Galeria/galeria1.webp",
  "/Image/Galeria/galeria2.webp",
  "/Image/Galeria/galeria3.webp",
  "/Image/Galeria/galeria4.webp",
  "/Image/Galeria/galeria5.webp",
  "/Image/Galeria/galeria6.webp",
  "/Image/Galeria/galeria7.webp",
  "/Image/Galeria/galeria8.webp"
]

const DEFAULT_IMAGE = "/placeholder.svg"

const inspirations = [
  {
    id: 1,
    title: "Revista Constance Zahn Casamentos",
    image: WEDDING_IMAGES[0],
    description: "Edição Especial 2023",
    link: "https://www.constancezahn.com/tag/revista-constance-zahn-casamentos/"
  },
  {
    id: 2,
    title: "Revista Paraíso das Noivas",
    image: WEDDING_IMAGES[1],
    description: "Tendências 2024",
    link: "https://www.expoparaisonoivas.com.br/revista"
  },
  {
    id: 3,
    title: "Vogue - noivas",
    image: WEDDING_IMAGES[2],
    description: "Os Melhores Casamentos",
    link: "https://vogue.globo.com/noiva/"
  }
]

export default function InspirationSection() {
  return (
    <div className="py-20 bg-[#f8f7f4]">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">INSPIRAÇÃO</h2>
          <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Casamentos que inspiraram as principais revistas do setor.
          </p>
        </div>

        {/* Cards de inspiração com links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((item) => {
            const imageSrc = item.image || DEFAULT_IMAGE

            return (
              <Link key={item.id} href={item.link} className="group relative overflow-hidden rounded-lg shadow-md block">
                <div className="relative w-full h-[600px]">
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute top-4 left-4">
                      <div className="bg-[#cfa144] text-white px-3 py-1 text-sm font-serif">DESTAQUE</div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-serif text-2xl mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Texto + Mini Galeria com links */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl text-[#5c5c5c] mb-4">Casamentos que Inspiram</h3>
              <p className="text-[#5c5c5c] mb-6">
                Nossos projetos já foram destaque nas principais revistas de casamento do Brasil e do mundo. Trabalhamos
                para criar casamentos únicos, elegantes e memoráveis, sempre respeitando o orçamento dos nossos clientes.
              </p>
              <p className="text-[#5c5c5c]">
                Seja um casamento intimista ou uma grande celebração, nosso compromisso é transformar o seu sonho em
                realidade, com sofisticação e economia.
              </p>
            </div>

            {/* Mini Galeria estilosa com links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {GALLERY_IMAGES.map((src, index) => (
                <Link
                  key={index}
                  href={`/galeria/${index + 1}`}
                  className={`relative overflow-hidden rounded-xl group ${
                    index % 3 === 0 ? "aspect-[2/3]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Galeria ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
