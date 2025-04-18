import Image from "next/image"

// Define fixed image paths to avoid any empty strings
const WEDDING_IMAGES = ["/images/wedding1.png", "/images/wedding2.png", "/images/wedding3.png", "/images/wedding4.png"]

// Add a DEFAULT_IMAGE constant at the top of the file, after WEDDING_IMAGES
const DEFAULT_IMAGE = "/placeholder.svg?height=200&width=200"

const partners = [
  {
    id: 1,
    name: "Buffet Elegance",
    logo: WEDDING_IMAGES[0],  
    url: "#",
  },
  {
    id: 2,
    name: "Flores & Cia",
    logo: WEDDING_IMAGES[1],
    url: "#",
  },
  {
    id: 3,
    name: "Fotografia Memories",
    logo: WEDDING_IMAGES[2],
    url: "#",
  },
  {
    id: 4,
    name: "Vestidos Glamour",
    logo: WEDDING_IMAGES[3],
    url: "#",
  },
  {
    id: 5,
    name: "Doces Sonhos",
    logo: WEDDING_IMAGES[0],
    url: "#",
  },
  {
    id: 6,
    name: "Decoração Chic",
    logo: WEDDING_IMAGES[1],
    url: "#",
  },
]

export default function PartnersSection() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">PARCEIROS</h2>
          <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Conheça os fornecedores parceiros que oferecem condições especiais para nossas noivas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => {
            // Ensure we have a valid image path
            const logoSrc = partner.logo || DEFAULT_IMAGE

            return (
              <a
                key={partner.id}
                href={partner.url}
                className="bg-[#f8f7f4] rounded-lg p-6 flex items-center justify-center group transition-all duration-300 hover:shadow-md"
              >
                <div className="relative h-20 w-full">
                  {/* Only render the Image if we have a valid source */}
                  {logoSrc && (
                    <Image
                      src={logoSrc || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain transition-opacity group-hover:opacity-80"
                    />
                  )}
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="/parceiros"
            className="inline-flex items-center text-[#cfa144] hover:text-[#cfa144] transition-colors font-serif"
          >
            <span>Ver todos os parceiros</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
