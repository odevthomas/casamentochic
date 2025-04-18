export default function InstagramSection() {
  const instagramPosts = [
    {
      id: 1,
      likes: 124,
      comments: 18,
      image: "/Image/Noivos/noivos1.webp",  // Caminho correto a partir da pasta 'public'
    },
    {
      id: 2,
      likes: 98,
      comments: 12,
      image: "/Image/Noivos/noivos2.webp",  // Caminho correto a partir da pasta 'public'
    },
    {
      id: 3,
      likes: 156,
      comments: 24,
      image: "/Image/Noivos/noivos3.webp",  // Caminho correto a partir da pasta 'public'
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">CASAMENTOS NO INSTAGRAM</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Siga-nos no Instagram para mais inspirações e dicas para o seu casamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instagramPosts.map((post) => (
          <div key={post.id} className="group relative overflow-hidden rounded-lg bg-[#333]">
            <div className="aspect-square relative flex items-center justify-center">
              {/* Exibe a imagem do casamento */}
              <img src={post.image} alt={`Casamento ${post.id}`} className="w-full h-full object-cover" />
              <div className="text-white text-4xl font-serif absolute inset-0 flex items-center justify-center"></div>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="text-white">{post.likes}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-white">{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white hover:text-[#cfa144] transition-colors font-serif"
        >
          <span className="mr-2">Siga-nos no Instagram</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>
  );
}
