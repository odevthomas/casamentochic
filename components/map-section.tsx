import Image from "next/image"

// Define fixed image paths to avoid any empty strings
const WEDDING_IMAGES = ["/images/wedding1.png", "/images/wedding2.png", "/images/wedding3.png", "/images/wedding4.png"]

// Add a DEFAULT_IMAGE constant at the top of the file, after WEDDING_IMAGES
const DEFAULT_IMAGE = "/placeholder.svg?height=500&width=800"

export default function MapSection() {
  // Ensure we have a valid image path
  const mapImageSrc = WEDDING_IMAGES[2] || DEFAULT_IMAGE

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">ONDE ATUAMOS</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Ajudamos noivas em todo o Brasil e no exterior a realizarem o casamento dos seus sonhos.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
        <div className="relative h-[400px] md:h-[500px] w-full">
          {/* Only render the Image if we have a valid source */}
          {mapImageSrc && (
            <Image src={mapImageSrc || "/placeholder.svg"} alt="Mapa de atuação" fill className="object-contain" />
          )}
          <div className="absolute inset-0">
            {/* Pontos no mapa */}
            <div className="absolute top-[30%] left-[45%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                São Paulo
              </div>
            </div>
            <div className="absolute top-[25%] left-[40%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                Rio de Janeiro
              </div>
            </div>
            <div className="absolute top-[20%] left-[35%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                Brasília
              </div>
            </div>
            <div className="absolute top-[15%] left-[30%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                Salvador
              </div>
            </div>
            <div className="absolute top-[40%] left-[20%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                Recife
              </div>
            </div>
            <div className="absolute top-[20%] left-[70%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                Lisboa
              </div>
            </div>
            <div className="absolute top-[15%] left-[75%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                Paris
              </div>
            </div>
            <div className="absolute top-[25%] left-[15%] group">
              <div className="w-4 h-4 bg-[#cfa144] rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-[#cfa144] rounded-full relative z-10"></div>
              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-1 rounded shadow-md text-sm transition-opacity duration-200 whitespace-nowrap">
                Miami
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-[#cfa144] text-4xl font-serif mb-2">15+</div>
            <p className="text-[#5c5c5c]">Cidades no Brasil</p>
          </div>
          <div className="text-center">
            <div className="text-[#cfa144] text-4xl font-serif mb-2">8+</div>
            <p className="text-[#5c5c5c]">Países</p>
          </div>
          <div className="text-center">
            <div className="text-[#cfa144] text-4xl font-serif mb-2">500+</div>
            <p className="text-[#5c5c5c]">Casamentos realizados</p>
          </div>
        </div>
      </div>
    </div>
  )
}
