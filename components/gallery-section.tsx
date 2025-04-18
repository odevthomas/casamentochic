export default function GallerySection() {
  const categories = [
    {
      title: "Decoração",
      image: "https://images.unsplash.com/photo-1602081113318-3f3e5deed5b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Buquês",
      image: "https://images.unsplash.com/photo-1605228918338-7db8314c201f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Vestidos",
      image: "https://images.unsplash.com/photo-1598514982482-50d4d8a9ae95?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cerimônias",
      image: "https://images.unsplash.com/photo-1519741491046-6224a1b78d9b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Gastronomia",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Convites",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Alianças",
      image: "https://images.unsplash.com/photo-1589987607627-ec25c2b7f7cc?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Lembrancinhas",
      image: "https://images.unsplash.com/photo-1600607689611-655d3ac7e3d5?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Inspire-se com nossas ideias para um casamento elegante e econômico.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg bg-[#f8f7f4]">
            <div className="aspect-square relative">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-lg">{category.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#cfa144] hover:bg-[#cfa144] text-white font-serif py-3 px-8 rounded-md transition-colors text-lg">
          Ver Mais Fotos
        </button>
      </div>
    </div>
  )
}
