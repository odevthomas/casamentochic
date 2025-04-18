"use client"

export default function HairstyleSection() {
  const hairstyles = [
    {
      id: 1,
      title: "Coque Elegante",
      image: "/image/Penteados/coque-elegante.jpg",
    },
    {
      id: 2,
      title: "Trança Lateral",
      image: "/image/Penteados/tranca-lateral.jpg",
    },
    {
      id: 3,
      title: "Ondas Românticas",
      image: "/image/Penteados/ondas-romanticas.jpg",
    },
    {
      id: 4,
      title: "Semi-preso com Flores",
      image: "/image/Penteados/semi-preso-flores.jpg",
    },
    {
      id: 5,
      title: "Coque Baixo",
      image: "/image/Penteados/coque-baixo.jpg",
    },
    {
      id: 6,
      title: "Penteado Vintage",
      image: "/image/Penteados/penteado-vintage.jpg",
    },
  ]

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4 sm:px-8 py-16"
      style={{
        backgroundImage: 'url("/image/Penteados/penteados.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">PENTEADOS</h2>
          <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
          <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
            Inspire-se com os penteados mais elegantes e econômicos para o seu grande dia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {hairstyles.map((style) => (
            <div key={style.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-[2/3] w-full relative">
                <img
                  src={style.image}
                  alt={style.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-serif text-xl">{style.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
