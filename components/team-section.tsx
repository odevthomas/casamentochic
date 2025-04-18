export default function TeamSection() {
  const team = [
    {
      name: "Juliana Silva",
      role: "Fundadora & Consultora",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      name: "Mariana Freitas",
      role: "Especialista em Decoração",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      name: "Carlos Teixeira",
      role: "Consultor Financeiro",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
    {
      name: "Luciana Mendes",
      role: "Assessora de Eventos",
      social: {
        instagram: "#",
        facebook: "#",
        linkedin: "#",
      },
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">A EQUIPE</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Conheça os profissionais dedicados a tornar o seu casamento perfeito e econômico.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group">
            <div className="h-80 bg-[#f8f7f4] flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-[#e8e6e1] flex items-center justify-center">
                <span className="text-[#cfa144] text-4xl font-serif">{member.name.charAt(0)}</span>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-serif text-xl text-[#5c5c5c] mb-1">{member.name}</h3>
              <p className="text-[#8c8c8c] mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.facebook} className="text-[#cfa144] hover:text-[#a08c4a] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href={member.social.instagram} className="text-[#cfa144] hover:text-[#a08c4a] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                <a href={member.social.linkedin} className="text-[#cfa144] hover:text-[#a08c4a] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
